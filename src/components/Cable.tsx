interface CableProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  color: 'red' | 'black';
  isTemporary?: boolean;
}

export function Cable({ startX, startY, endX, endY, color, isTemporary = false }: CableProps) {
  const controlPointOffset = Math.abs(endX - startX) * 0.3 + Math.abs(endY - startY) * 0.2;

  const midX = (startX + endX) / 2;
  const midY = (startY + endY) / 2;

  const controlX1 = startX;
  const controlY1 = startY + controlPointOffset;
  const controlX2 = endX;
  const controlY2 = endY - controlPointOffset;

  const cableColor = color === 'red' ? '#ef4444' : '#1f2937';
  const opacity = isTemporary ? 0.6 : 1;

  const minX = Math.min(startX, endX) - 20;
  const minY = Math.min(startY, endY) - 20;
  const maxX = Math.max(startX, endX) + 20;
  const maxY = Math.max(startY, endY) + 20;
  const width = maxX - minX;
  const height = maxY - minY;

  const adjustedStartX = startX - minX;
  const adjustedStartY = startY - minY;
  const adjustedEndX = endX - minX;
  const adjustedEndY = endY - minY;

  const adjustedControlX1 = controlX1 - minX;
  const adjustedControlY1 = controlY1 - minY;
  const adjustedControlX2 = controlX2 - minX;
  const adjustedControlY2 = controlY2 - minY;

  return (
    <svg
      className="absolute pointer-events-none"
      style={{
        left: minX,
        top: minY,
        width,
        height,
        zIndex: 10
      }}
    >
      <defs>
        <filter id={`shadow-${color}-${startX}-${startY}`}>
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" />
        </filter>
      </defs>

      <path
        d={`M ${adjustedStartX} ${adjustedStartY} C ${adjustedControlX1} ${adjustedControlY1}, ${adjustedControlX2} ${adjustedControlY2}, ${adjustedEndX} ${adjustedEndY}`}
        stroke={cableColor}
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        opacity={opacity}
        filter={`url(#shadow-${color}-${startX}-${startY})`}
      />

      <circle
        cx={adjustedStartX}
        cy={adjustedStartY}
        r="8"
        fill={cableColor}
        stroke="#ffffff"
        strokeWidth="2"
        opacity={opacity}
      />

      <circle
        cx={adjustedStartX}
        cy={adjustedStartY}
        r="4"
        fill="#d4af37"
        opacity={opacity}
      />

      <circle
        cx={adjustedEndX}
        cy={adjustedEndY}
        r="8"
        fill={cableColor}
        stroke="#ffffff"
        strokeWidth="2"
        opacity={opacity}
      />

      <circle
        cx={adjustedEndX}
        cy={adjustedEndY}
        r="4"
        fill="#d4af37"
        opacity={opacity}
      />
    </svg>
  );
}
