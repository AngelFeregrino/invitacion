import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, MailOpen, ChevronRight } from 'lucide-react';
import { ambientMusic } from '../utils/audioSynth';

interface EnvelopeIntroProps {
  onOpen: () => void;
}

export const EnvelopeIntro: React.FC<EnvelopeIntroProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const triggerOpen = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);

    ambientMusic.play();

    const count = 160;
    const defaults = {
      origin: { y: 0.65 },
      colors: ['#ec4899', '#f9a8d4', '#db2777', '#fce7f3', '#be185d'],
    };

    const fire = (particleRatio: number, opts: confetti.Options) => {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    };

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });

    setTimeout(() => {
      setIsOpen(true);
      onOpen();
    }, 950);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 overflow-y-auto bg-gradient-to-b from-[#FFF0F5]/98 via-[#FFF5F8]/98 to-[#FCE7F3]/98 backdrop-blur-md"
        >
          {/* Subtle background ambient glow */}
          <div className="fixed top-0 left-0 w-64 h-64 bg-pink-200/40 rounded-full blur-3xl pointer-events-none -translate-x-1/3 -translate-y-1/3" />
          <div className="fixed bottom-0 right-0 w-64 h-64 bg-rose-200/40 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />

          {/* Centering scroll wrapper: ensures no content is cut off on small screens */}
          <div className="min-h-[100dvh] w-full flex flex-col items-center justify-center p-4 sm:p-6 py-6 sm:py-10 relative z-10">
            <motion.div
              initial={{ scale: 0.92, y: 16, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-full max-w-[340px] sm:max-w-md flex flex-col items-center text-center"
            >
              {/* Header badge */}
              <div className="clay-pill px-4 py-1.5 mb-4 inline-flex items-center gap-2 text-pink-900 font-semibold text-xs tracking-wider uppercase shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-spin" />
                <span>Invitación de Honor</span>
                <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-spin" />
              </div>

              {/* Envelope card */}
              <div className="w-full relative rounded-3xl bg-gradient-to-b from-[#FFFFFF] via-[#FFF8FA] to-[#FCE7F3] shadow-2xl border border-pink-200/80 p-5 sm:p-7 overflow-hidden transition-all">
                {/* Corner ornamental accents */}
                <div className="gold-corner-tr" />
                <div className="gold-corner-bl" />

                {/* Card Header Content */}
                <div className="flex flex-col items-center gap-1.5 mb-5 mt-1">
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-pink-800/80 font-bold">
                    Estás cordialmente invitado a
                  </span>

                  <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-pink-950 tracking-tight leading-tight">
                    Mis 60 Años
                  </h1>

                  <div className="font-script text-3xl sm:text-5xl text-pink-700 font-bold my-0.5 filter drop-shadow-sm">
                    Lety Feregrino
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-900 bg-pink-100/70 px-3.5 py-1 rounded-full border border-pink-200/60 mt-1">
                    <Heart className="w-3 h-3 text-rose-500 fill-rose-500 shrink-0" />
                    <span>Sábado 5 de Diciembre, 2026</span>
                  </div>
                </div>

                {/* Subtle Divider */}
                <div className="ornament-divider w-40 my-3">
                  <span className="text-sm">❦</span>
                </div>

                {/* Wax Seal & Open Trigger */}
                <div className="flex flex-col items-center gap-3 pt-2">
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing ring behind the seal */}
                    <span className="absolute -inset-2 rounded-full bg-pink-400/25 animate-ping -z-10" />

                    <button
                      type="button"
                      onClick={triggerOpen}
                      disabled={isOpening}
                      className="wax-seal group focus:outline-none focus:ring-4 focus:ring-pink-300/60 transform active:scale-95 hover:scale-105 transition-all duration-200"
                      title="Toca para abrir la invitación"
                      aria-label="Abrir invitación"
                    >
                      <div className="flex flex-col items-center justify-center text-pink-100 drop-shadow">
                        <span className="font-script text-2xl sm:text-3xl font-bold -mb-0.5 group-hover:scale-110 transition-transform">
                          LF
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-extrabold tracking-widest uppercase opacity-95">
                          Abrir
                        </span>
                      </div>
                    </button>
                  </div>

                  {/* Prominent tactile button for easy tapping on any screen */}
                  <button
                    type="button"
                    onClick={triggerOpen}
                    disabled={isOpening}
                    className="clay-btn clay-btn-gold w-full py-3 sm:py-3.5 text-sm sm:text-base font-bold shadow-lg flex items-center justify-center gap-2 mt-2"
                  >
                    <MailOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{isOpening ? 'Abriendo invitación...' : 'Toca para abrir la invitación'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] font-medium text-pink-700/80">
                    Presiona el sello o el botón para comenzar ✨
                  </p>
                </div>
              </div>

              {/* Direct access link */}
              <button
                type="button"
                onClick={triggerOpen}
                disabled={isOpening}
                className="mt-4 text-xs font-medium text-stone-500 hover:text-pink-700 underline underline-offset-4 transition-colors py-1.5 px-3"
              >
                Entrar directo a la invitación →
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
