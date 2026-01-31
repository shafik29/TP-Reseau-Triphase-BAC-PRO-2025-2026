export type TerminalType = 'Ph1' | 'Ph2' | 'Ph3' | 'N';

export interface Terminal {
  id: TerminalType;
  label: string;
  color: string;
}

export interface GeneratorState {
  isOn: boolean;
  voltage: number;
  frequency: number;
}
