import { TerminalType } from '../types/generator';
import { Amplitude, Frequency } from '../components/GeneratorControls';

export interface VoltageReading {
  voltage: number;
  isValid: boolean;
}

export function calculateMeasuredVoltage(
  comTerminal: TerminalType | null,
  vTerminal: TerminalType | null,
  amplitude: Amplitude,
  frequency: Frequency,
  generatorIsOn: boolean
): VoltageReading {
  if (!generatorIsOn || !comTerminal || !vTerminal || comTerminal === vTerminal) {
    return { voltage: 0, isValid: false };
  }

  if (frequency < 10) {
    return { voltage: 0, isValid: false };
  }

  const simpleVoltage = amplitude;
  const compositeVoltage = amplitude * Math.sqrt(3);

  const isSimpleVoltage = (t1: TerminalType, t2: TerminalType): boolean => {
    return (t1 === 'N' && ['Ph1', 'Ph2', 'Ph3'].includes(t2)) ||
           (t2 === 'N' && ['Ph1', 'Ph2', 'Ph3'].includes(t1));
  };

  const isCompositeVoltage = (t1: TerminalType, t2: TerminalType): boolean => {
    return t1 !== 'N' && t2 !== 'N' && t1 !== t2;
  };

  if (isSimpleVoltage(comTerminal, vTerminal)) {
    return { voltage: simpleVoltage, isValid: true };
  }

  if (isCompositeVoltage(comTerminal, vTerminal)) {
    return { voltage: compositeVoltage, isValid: true };
  }

  return { voltage: 0, isValid: false };
}

export function formatVoltageDisplay(
  voltage: number,
  caliber: number,
  isValid: boolean
): string {
  const decimals = caliber === 20 ? 2 : 1;

  if (!isValid) {
    return caliber === 20 ? '0.00' : '0.0';
  }

  if (voltage > caliber) {
    return 'OL';
  }

  return voltage.toFixed(decimals);
}
