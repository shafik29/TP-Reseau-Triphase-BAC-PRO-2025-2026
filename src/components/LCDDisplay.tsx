import { layout } from '../constants/layout';

interface LCDDisplayProps {
  value: string;
  unit: string;
  debugMode: boolean;
}

export function LCDDisplay({ value, unit, debugMode }: LCDDisplayProps) {
  const { lcd } = layout;

  return (
    <div
      className="absolute flex items-center justify-center"
      style={{
        left: `${lcd.x}%`,
        top: `${lcd.y}%`,
        width: `${lcd.w}%`,
        height: `${lcd.h}%`,
        backgroundColor: debugMode ? 'rgba(255, 0, 0, 0.2)' : '#2a2a2a',
        border: debugMode ? '2px solid red' : '3px solid #1a1a1a',
        borderRadius: '8px',
        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(255, 255, 255, 0.1)',
        padding: '4px'
      }}
    >
      {debugMode && (
        <div className="absolute -top-5 left-0 text-xs font-bold text-red-600 bg-white px-1">
          LCD
        </div>
      )}
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          backgroundColor: '#C2D4B8',
          borderRadius: '4px',
          border: '2px solid #a8b89a',
          boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div className="text-center">
          <div className="font-mono text-2xl md:text-4xl font-bold text-gray-800 leading-none" style={{ textShadow: '1px 1px 0px rgba(255, 255, 255, 0.3)' }}>
            {value}
          </div>
          <div className="font-mono text-sm md:text-lg text-gray-700" style={{ textShadow: '1px 1px 0px rgba(255, 255, 255, 0.3)' }}>
            {unit}
          </div>
        </div>
      </div>
    </div>
  );
}
