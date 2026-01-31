import { Power } from 'lucide-react';

export type Amplitude = 6 | 9;
export type Frequency = 0.1 | 1 | 10 | 50 | 150;

interface GeneratorControlsProps {
  amplitude: Amplitude;
  frequency: Frequency;
  isOn: boolean;
  onAmplitudeChange: (amplitude: Amplitude) => void;
  onFrequencyChange: (frequency: Frequency) => void;
  onTogglePower: () => void;
}

const frequencyOptions: Frequency[] = [0.1, 1, 10, 50, 150];

export function GeneratorControls({
  amplitude,
  frequency,
  isOn,
  onAmplitudeChange,
  onFrequencyChange,
  onTogglePower
}: GeneratorControlsProps) {
  const frequencyIndex = frequencyOptions.indexOf(frequency);

  const handleFrequencySliderChange = (value: number) => {
    onFrequencyChange(frequencyOptions[value]);
  };

  return (
    <div className="mt-6 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-slate-700/50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-200 uppercase tracking-wide">
            Amplitude
          </label>
          <div className="flex gap-3">
            <button
              onClick={() => onAmplitudeChange(6)}
              className={`flex-1 px-4 py-3 rounded-lg font-bold text-lg transition-all duration-200 ${
                amplitude === 6
                  ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/50 scale-105'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:scale-102'
              }`}
            >
              6V
            </button>
            <button
              onClick={() => onAmplitudeChange(9)}
              className={`flex-1 px-4 py-3 rounded-lg font-bold text-lg transition-all duration-200 ${
                amplitude === 9
                  ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/50 scale-105'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:scale-102'
              }`}
            >
              9V
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-200 uppercase tracking-wide">
            Fréquence: {frequency} Hz
          </label>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max={frequencyOptions.length - 1}
              step="1"
              value={frequencyIndex}
              onChange={(e) => handleFrequencySliderChange(Number(e.target.value))}
              className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              style={{
                background: `linear-gradient(to right, rgb(59 130 246) 0%, rgb(59 130 246) ${(frequencyIndex / (frequencyOptions.length - 1)) * 100}%, rgb(51 65 85) ${(frequencyIndex / (frequencyOptions.length - 1)) * 100}%, rgb(51 65 85) 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-slate-400 px-1">
              {frequencyOptions.map((freq) => (
                <span key={freq} className={frequency === freq ? 'text-blue-400 font-bold' : ''}>
                  {freq}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-3 flex flex-col justify-center">
          <label className="block text-sm font-semibold text-slate-200 uppercase tracking-wide text-center">
            Alimentation
          </label>
          <button
            onClick={onTogglePower}
            className={`flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
              isOn
                ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/50 hover:scale-105'
                : 'bg-gradient-to-br from-slate-700 to-slate-800 text-slate-300 hover:bg-slate-600 hover:scale-102'
            }`}
          >
            <Power size={24} className={isOn ? 'animate-pulse' : ''} />
            {isOn ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>
    </div>
  );
}
