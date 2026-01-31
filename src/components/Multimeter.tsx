import { useState } from 'react';
import { calibers } from '../constants/calibers';
import { JackType } from '../types/multimeter';
import { TerminalType } from '../types/generator';
import { LCDDisplay } from './LCDDisplay';
import { DialSelector } from './DialSelector';
import { ConnectionJacks } from './ConnectionJacks';
import { ConnectionColor } from './ConnectionButton';
import { Amplitude, Frequency } from './GeneratorControls';
import { calculateMeasuredVoltage, formatVoltageDisplay } from '../utils/voltageCalculator';

interface MultimeterProps {
  jackConnections: Map<JackType, ConnectionColor>;
  selectedJack: JackType | null;
  onJackClick: (jack: JackType) => void;
  debugMode: boolean;
  connectedTerminals: { comTerminal: TerminalType | null; vTerminal: TerminalType | null };
  generatorAmplitude: Amplitude;
  generatorFrequency: Frequency;
  generatorIsOn: boolean;
}

export function Multimeter({
  jackConnections,
  selectedJack,
  onJackClick,
  debugMode,
  connectedTerminals,
  generatorAmplitude,
  generatorFrequency,
  generatorIsOn
}: MultimeterProps) {
  const [caliberIndex, setCaliberIndex] = useState(0);

  const currentCaliber = calibers[caliberIndex];

  const handleCaliberChange = () => {
    setCaliberIndex((prev) => (prev + 1) % calibers.length);
  };

  const getDisplayValue = (): { value: string; unit: string } => {
    if (currentCaliber.mode === 'OFF') {
      return { value: '', unit: '' };
    }

    if (currentCaliber.mode === 'VAC') {
      const { comTerminal, vTerminal } = connectedTerminals;
      const { voltage, isValid } = calculateMeasuredVoltage(
        comTerminal,
        vTerminal,
        generatorAmplitude,
        generatorFrequency,
        generatorIsOn
      );

      const displayValue = formatVoltageDisplay(voltage, currentCaliber.value, isValid);
      return { value: displayValue, unit: 'V~' };
    }

    switch (currentCaliber.mode) {
      case 'VDC':
        return { value: '0.00', unit: 'V⎓' };
      case 'OHM':
        return { value: '0.00', unit: 'Ω' };
      case 'ADC':
        return { value: '0.00', unit: 'mA' };
      default:
        return { value: '0.00', unit: '' };
    }
  };

  const display = getDisplayValue();

  return (
    <div className="relative w-full max-w-md mx-auto">
      <img
        src="./orange_brown_minimalist_school_logo-101.png"
        alt="Multimètre"
        className="w-full h-auto block"
        draggable={false}
      />

      <div className="overlay absolute inset-0">
        <LCDDisplay
          value={display.value}
          unit={display.unit}
          debugMode={debugMode}
        />

        <DialSelector
          currentCaliber={currentCaliber}
          onCaliberChange={handleCaliberChange}
          debugMode={debugMode}
        />

        <ConnectionJacks
          connections={jackConnections}
          selectedJack={selectedJack}
          onJackClick={onJackClick}
          debugMode={debugMode}
        />
      </div>
    </div>
  );
}
