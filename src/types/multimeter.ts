export type CalibMode = 'VDC' | 'VAC' | 'OHM' | 'ADC' | 'OFF';

export interface Caliber {
  mode: CalibMode;
  value: number;
  label: string;
  angle: number;
}

export interface Layout {
  lcd: { x: number; y: number; w: number; h: number };
  dial: { x: number; y: number; w: number; h: number };
  jackV: { x: number; y: number; w: number; h: number };
  jackCOM: { x: number; y: number; w: number; h: number };
  jackmA: { x: number; y: number; w: number; h: number };
  jack10A: { x: number; y: number; w: number; h: number };
}

export type JackType = 'V' | 'COM' | 'mA' | '10A';

export interface JackState {
  V: boolean;
  COM: boolean;
  mA: boolean;
  '10A': boolean;
}
