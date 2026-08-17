import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';
import { ambientMusic } from '../utils/audioSynth';

interface FloatingMusicPlayerProps {
  autoPlayStarted?: boolean;
}

export const FloatingMusicPlayer: React.FC<FloatingMusicPlayerProps> = ({ autoPlayStarted }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  useEffect(() => {
    if (autoPlayStarted && !isPlaying) {
      ambientMusic.play();
      setIsPlaying(true);
    }
  }, [autoPlayStarted]);

  const handleToggle = () => {
    const active = ambientMusic.toggle();
    setIsPlaying(active);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    ambientMusic.setVolume(val);
    if (val === 0 && isPlaying) {
      ambientMusic.pause();
      setIsPlaying(false);
    } else if (val > 0 && !isPlaying) {
      ambientMusic.play();
      setIsPlaying(true);
    }
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip on hover / status */}
      {showTooltip && (
        <div 
          className="clay-card py-1.5 px-3.5 text-xs text-amber-900 font-medium flex items-center gap-1.5 shadow-lg border border-amber-200/50"
          style={{ borderRadius: '12px' }}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin" />
          <span>{isPlaying ? 'Música ambiental activa' : 'Toca para activar música'}</span>
        </div>
      )}

      {/* Mini volume control slider if playing */}
      {isPlaying && (
        <div className="hidden sm:flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md border border-amber-100/60">
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 accent-amber-600 cursor-pointer h-1.5 bg-amber-100 rounded-lg"
            title="Volumen de fondo"
          />
        </div>
      )}

      {/* Main Play/Pause Button */}
      <button
        onClick={handleToggle}
        aria-label="Reproducir o pausar música de celebración"
        className={`clay-circle-btn relative group ${
          isPlaying ? 'border-amber-400 bg-gradient-to-br from-amber-50 to-amber-100' : 'bg-white'
        }`}
        style={{ width: '54px', height: '54px' }}
      >
        {isPlaying ? (
          <div className="flex flex-col items-center justify-center gap-0.5">
            <div className="sound-wave">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <Volume2 className="w-3.5 h-3.5 text-amber-700 mt-1" />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <Music className="w-5 h-5 text-amber-800 transition-transform group-hover:scale-110" />
            <VolumeX className="w-3 h-3 text-amber-600/70" />
          </div>
        )}

        {/* Shimmer badge */}
        {isPlaying && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full animate-ping opacity-75"></span>
        )}
      </button>
    </div>
  );
};
