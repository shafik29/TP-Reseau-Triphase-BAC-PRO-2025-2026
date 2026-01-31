import { generatorLayout } from '../constants/generator';
import { TerminalType } from '../types/generator';

interface GeneratorTerminalsProps {
  onTerminalMouseDown: (terminal: TerminalType) => void;
  onTerminalMouseUp: (terminal: TerminalType) => void;
  debugMode: boolean;
}

export function GeneratorTerminals({ onTerminalMouseDown, onTerminalMouseUp, debugMode }: GeneratorTerminalsProps) {
  const terminals: Array<{ id: TerminalType; color: string }> = [
    { id: 'Ph1', color: '#ef4444' },
    { id: 'Ph2', color: '#10b981' },
    { id: 'Ph3', color: '#eab308' },
    { id: 'N', color: '#3b82f6' }
  ];

  return (
    <>
      {terminals.map((terminal) => {
        const layout = generatorLayout[terminal.id];

        return (
          <div
            key={terminal.id}
            className="absolute cursor-grab active:cursor-grabbing transition-all group"
            style={{
              left: `${layout.x}%`,
              top: `${layout.y}%`,
              width: `${layout.w}%`,
              height: `${layout.h}%`,
              transform: 'translate(-50%, -50%)',
              backgroundColor: debugMode ? 'rgba(255, 0, 0, 0.2)' : 'transparent',
              border: debugMode ? '2px solid red' : 'none'
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              onTerminalMouseDown(terminal.id);
            }}
            onMouseUp={() => onTerminalMouseUp(terminal.id)}
          >
            {debugMode && (
              <div className="absolute -top-5 left-0 text-xs font-bold text-red-600 bg-white px-1 whitespace-nowrap">
                {terminal.id}
              </div>
            )}

            <div
              className="w-full h-full rounded-full border-4 transition-all group-hover:scale-110"
              style={{
                borderColor: 'transparent',
                backgroundColor: 'transparent'
              }}
            />
          </div>
        );
      })}
    </>
  );
}
