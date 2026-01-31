import { Terminal } from '../types/generator';

export const terminals: Terminal[] = [
  { id: 'Ph1', label: 'Ph1', color: '#ef4444' },
  { id: 'Ph2', label: 'Ph2', color: '#10b981' },
  { id: 'Ph3', label: 'Ph3', color: '#eab308' },
  { id: 'N', label: 'N', color: '#3b82f6' }
];

export const generatorLayout = {
  Ph1: { x: 41, y: 23, w: 3, h: 6 },
  Ph2: { x: 32, y: 53, w: 3, h: 6 },
  Ph3: { x: 50, y: 53, w: 3, h: 6 },
  N: { x: 41, y: 42, w: 3, h: 6 }
};
