import { ConnectionButton, ConnectionColor } from './ConnectionButton';
import { TerminalType } from '../types/generator';
import { generatorLayout } from '../constants/generator';

interface ConnectionTerminalsProps {
  connections: Map<TerminalType, ConnectionColor>;
  selectedTerminal: TerminalType | null;
  onTerminalClick: (terminal: TerminalType) => void;
  debugMode: boolean;
}

export function ConnectionTerminals({ connections, selectedTerminal, onTerminalClick, debugMode }: ConnectionTerminalsProps) {
  const terminals: TerminalType[] = ['Ph1', 'Ph2', 'Ph3', 'N'];

  return (
    <>
      {terminals.map((terminal) => {
        const position = generatorLayout[terminal];
        const color = connections.get(terminal) || null;
        const isSelected = selectedTerminal === terminal;

        return (
          <div key={terminal}>
            {debugMode && (
              <div
                className="absolute border-2 border-red-500 bg-red-500/20"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                  width: `${position.w}%`,
                  height: `${position.h}%`,
                }}
              />
            )}
            <ConnectionButton
              color={color}
              isSelected={isSelected}
              onClick={() => onTerminalClick(terminal)}
              label={terminal}
              style={{
                left: `${position.x + position.w / 2}%`,
                top: `${position.y + position.h / 2}%`,
                transform: 'translate(-50%, -50%)'
              }}
            />
          </div>
        );
      })}
    </>
  );
}
