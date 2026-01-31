import { layout } from '../constants/layout';
import { Caliber } from '../types/multimeter';

interface DialSelectorProps {
  currentCaliber: Caliber;
  onCaliberChange: () => void;
  debugMode: boolean;
}

export function DialSelector({ currentCaliber, onCaliberChange, debugMode }: DialSelectorProps) {
  const { dial } = layout;

  return (
    <div
      className="absolute flex items-center justify-center cursor-pointer group"
      style={{
        left: `${dial.x}%`,
        top: `${dial.y}%`,
        width: `${dial.w}%`,
        height: `${dial.h}%`,
        backgroundColor: debugMode ? 'rgba(0, 255, 0, 0.2)' : 'transparent',
        border: debugMode ? '2px solid green' : 'none'
      }}
      onClick={onCaliberChange}
    >
      {debugMode && (
        <div className="absolute -top-5 left-0 text-xs font-bold text-green-600 bg-white px-1">
          DIAL
        </div>
      )}

      <div
        className="w-full h-full flex items-center justify-center transition-all duration-500 ease-out"
        style={{
          transform: `rotate(${currentCaliber.angle}deg)`
        }}
      >
        <svg
          className="w-2/3 h-2/3"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="knobGradient" cx="40%" cy="40%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#e8e8e8" />
              <stop offset="100%" stopColor="#c0c0c0" />
            </radialGradient>
            <radialGradient id="centerGradient" cx="30%" cy="30%">
              <stop offset="0%" stopColor="#f5f5f5" />
              <stop offset="100%" stopColor="#d0d0d0" />
            </radialGradient>
            <filter id="knobShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
              <feOffset dx="0" dy="3" result="offsetblur"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.4"/>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <circle cx="60" cy="60" r="45" fill="url(#knobGradient)" filter="url(#knobShadow)" stroke="#a0a0a0" strokeWidth="1.5"/>

          <circle cx="60" cy="60" r="38" fill="none" stroke="#b8b8b8" strokeWidth="0.5" opacity="0.5"/>

          <ellipse cx="50" cy="50" rx="15" ry="20" fill="#ffffff" opacity="0.3"/>

          <circle cx="60" cy="60" r="18" fill="url(#centerGradient)" stroke="#a8a8a8" strokeWidth="1"/>

          <rect x="58" y="22" width="4" height="26" rx="2" fill="#4a4a4a"/>
          <rect x="58.5" y="22" width="3" height="24" rx="1.5" fill="#6a6a6a"/>

          <path d="M60 48 L65 56 L55 56 Z" fill="#4a4a4a"/>
        </svg>
      </div>

      <div className="absolute inset-0 rounded-full group-hover:bg-white/5 transition-colors" />
    </div>
  );
}
