export type ConnectionColor = 'red' | 'green' | 'yellow' | 'blue' | null;

interface ConnectionButtonProps {
  color: ConnectionColor;
  isSelected: boolean;
  onClick: () => void;
  style?: React.CSSProperties;
  label?: string;
}

const colorClasses: Record<NonNullable<ConnectionColor>, string> = {
  red: 'bg-red-500 border-red-600 shadow-red-500/50',
  green: 'bg-green-500 border-green-600 shadow-green-500/50',
  yellow: 'bg-yellow-400 border-yellow-500 shadow-yellow-400/50',
  blue: 'bg-blue-500 border-blue-600 shadow-blue-500/50',
};

export function ConnectionButton({ color, isSelected, onClick, style, label }: ConnectionButtonProps) {
  const baseClasses = 'absolute rounded-full border-4 cursor-pointer transition-all duration-300 hover:scale-110';

  let colorClass = 'bg-slate-700 border-slate-600 hover:bg-slate-600';
  let shadowClass = '';

  if (color) {
    colorClass = colorClasses[color];
    shadowClass = 'shadow-lg';
  }

  if (isSelected) {
    shadowClass = 'shadow-2xl ring-4 ring-white/50 animate-pulse scale-110';
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${colorClass} ${shadowClass}`}
      style={{
        width: '28px',
        height: '28px',
        ...style
      }}
      title={label}
    />
  );
}
