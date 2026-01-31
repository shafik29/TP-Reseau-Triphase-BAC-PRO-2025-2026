import { layout } from '../constants/layout';
import { JackType } from '../types/multimeter';

interface JacksProps {
  onJackMouseDown: (jack: JackType) => void;
  onJackMouseUp: (jack: JackType) => void;
  debugMode: boolean;
}

export function Jacks({ onJackMouseDown, onJackMouseUp, debugMode }: JacksProps) {
  const jacks: { type: JackType; layout: typeof layout.jackV; label: string; color: string }[] = [
    { type: 'V', layout: layout.jackV, label: 'V/Ω', color: '#3b82f6' },
    { type: 'COM', layout: layout.jackCOM, label: 'COM', color: '#6b7280' },
    { type: 'mA', layout: layout.jackmA, label: 'mA', color: '#3b82f6' },
    { type: '10A', layout: layout.jack10A, label: '10A', color: '#ef4444' }
  ];

  return (
    <>
      {jacks.map(({ type, layout: jack, label, color }) => {
        return (
          <div
            key={type}
            className="absolute flex items-center justify-center cursor-grab active:cursor-grabbing group"
            style={{
              left: `${jack.x}%`,
              top: `${jack.y}%`,
              width: `${jack.w}%`,
              height: `${jack.h}%`,
              backgroundColor: debugMode ? 'rgba(0, 0, 255, 0.2)' : 'transparent',
              border: debugMode ? '2px solid blue' : 'none'
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              onJackMouseDown(type);
            }}
            onMouseUp={() => onJackMouseUp(type)}
          >
            {debugMode && (
              <div className="absolute -top-5 left-0 text-xs font-bold text-blue-600 bg-white px-1 whitespace-nowrap">
                {label}
              </div>
            )}

            <div
              className="w-full h-full rounded-full transition-all group-hover:scale-110"
              style={{
                backgroundColor: 'transparent',
                border: '4px solid transparent'
              }}
            />
          </div>
        );
      })}
    </>
  );
}
