import { ConnectionTerminals } from './ConnectionTerminals';
import { TerminalType } from '../types/generator';
import { ConnectionColor } from './ConnectionButton';

interface GeneratorProps {
  debugMode: boolean;
  terminalConnections: Map<TerminalType, ConnectionColor>;
  selectedTerminal: TerminalType | null;
  onTerminalClick: (terminal: TerminalType) => void;
}

export function Generator({ debugMode, terminalConnections, selectedTerminal, onTerminalClick }: GeneratorProps) {
  return (
    <div className="relative w-full mx-auto" style={{ maxWidth: '900px' }}>
      <img
        src="/copie_de_phase_1-10.png"
        alt="Générateur Triphasé GT14"
        className="w-full h-auto"
        draggable={false}
      />

      <div className="absolute inset-0">
        <ConnectionTerminals
          connections={terminalConnections}
          selectedTerminal={selectedTerminal}
          onTerminalClick={onTerminalClick}
          debugMode={debugMode}
        />
      </div>
    </div>
  );
}
