import { Caliber } from '../types/multimeter';

export const calibers: Caliber[] = [
  { mode: 'OFF', value: 0, label: '0', angle: 0 },

  { mode: 'VAC', value: 20, label: 'V~ 20', angle: 24 },
  { mode: 'VAC', value: 200, label: 'V~ 200', angle: 48 },

  { mode: 'OHM', value: 2000000, label: 'Ω 2M', angle: 72 },
  { mode: 'OHM', value: 200000, label: 'Ω 200k', angle: 96 },
  { mode: 'OHM', value: 20000, label: 'Ω 20k', angle: 120 },
  { mode: 'OHM', value: 2000, label: 'Ω 2k', angle: 144 },
  { mode: 'OHM', value: 200, label: 'Ω 200', angle: 168 },

  { mode: 'ADC', value: 200, label: 'A⎓ 200m', angle: 192 },
  { mode: 'ADC', value: 20, label: 'A⎓ 20m', angle: 216 },
  { mode: 'ADC', value: 2, label: 'A⎓ 2m', angle: 240 },

  { mode: 'VDC', value: 2, label: 'V⎓ 2', angle: 264 },
  { mode: 'VDC', value: 20, label: 'V⎓ 20', angle: 288 },
  { mode: 'VDC', value: 200, label: 'V⎓ 200', angle: 312 },
  { mode: 'VDC', value: 600, label: 'V⎓ 600', angle: 336 }
];
