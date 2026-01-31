import { ConnectionButton, ConnectionColor } from './ConnectionButton';
import { JackType } from '../types/multimeter';
import { layout } from '../constants/layout';

interface ConnectionJacksProps {
  connections: Map<JackType, ConnectionColor>;
  selectedJack: JackType | null;
  onJackClick: (jack: JackType) => void;
  debugMode: boolean;
}

const jackLabels: Record<JackType, string> = {
  'V/Ω': 'V/Ω',
  'COM': 'COM',
  'mA': 'mA',
  '10A': '10A'
};

const jackToLayoutKey: Record<JackType, keyof typeof layout> = {
  'V/Ω': 'jackV',
  'COM': 'jackCOM',
  'mA': 'jackmA',
  '10A': 'jack10A'
};

export function ConnectionJacks({ connections, selectedJack, onJackClick, debugMode }: ConnectionJacksProps) {
  const jacks: JackType[] = ['V/Ω', 'COM', 'mA', '10A'];

  return (
    <>
      {jacks.map((jack) => {
        const jackKey = jackToLayoutKey[jack];
        const position = layout[jackKey];
        const color = connections.get(jack) || null;
        const isSelected = selectedJack === jack;

        return (
          <div key={jack}>
            {debugMode && (
              <div
                className="absolute border-2 border-blue-500 bg-blue-500/20"
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
              onClick={() => onJackClick(jack)}
              label={jackLabels[jack]}
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
