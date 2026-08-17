import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, MailOpen } from 'lucide-react';
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

    // Play celebration audio
    ambientMusic.play();

    // Launch celebratory confetti fireworks
    const count = 180;
    const defaults = {
      origin: { y: 0.65 },
      colors: ['#D4AF37', '#F3E5AB', '#E6CA65', '#C59B27', '#E0A96D', '#2C5E43'],
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
    }, 1100);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF6F0]/95 backdrop-blur-md p-4"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-radial-gold opacity-30 pointer-events-none" />

          <motion.div
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full max-w-lg mx-auto flex flex-col items-center text-center"
          >
            {/* Header badges */}
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="clay-pill px-5 py-2 mb-6 flex items-center gap-2 text-amber-900 font-medium text-sm tracking-wider uppercase"
            >
              <Sparkles className="w-4 h-4 text-amber-600 animate-spin" />
              <span>Invitación de Honor</span>
              <Sparkles className="w-4 h-4 text-amber-600 animate-spin" />
            </motion.div>

            {/* 3D Envelope Container */}
            <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl bg-gradient-to-b from-[#FFFDF9] to-[#F3ECE0] shadow-2xl border border-amber-200/60 p-6 flex flex-col items-center justify-between overflow-hidden">
              {/* Envelope flap aesthetic design */}
              <div 
                className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#F8F2E6] to-[#ECE3D2] border-b border-amber-300/40 shadow-sm"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  transformOrigin: 'top center',
                  transform: isOpening ? 'rotateX(180deg)' : 'rotateX(0deg)',
                  transition: 'transform 0.8s ease-in-out',
                }}
              />

              {/* Decorative golden corner details */}
              <div className="gold-corner-tr" />
              <div className="gold-corner-bl" />

              {/* Card preview content */}
              <div className="relative z-10 my-auto flex flex-col items-center">
                <span className="text-xs uppercase tracking-[0.25em] text-amber-800/80 font-semibold mb-1">
                  Estás cordialmente invitado a
                </span>
                
                <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-amber-950 tracking-tight my-1">
                  Mis 60 Años
                </h1>

                <div className="font-script text-3xl sm:text-4xl text-amber-700 font-bold mb-2">
                  Lety Feregrino
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-900/80 bg-amber-50/90 px-4 py-1.5 rounded-full border border-amber-200/50 mt-1">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  <span>Sábado, 5 de Diciembre 2026</span>
                </div>
              </div>

              {/* Wax Seal Button (Interactive Trigger) */}
              <div className="relative z-20 mt-4 flex flex-col items-center">
                <button
                  onClick={triggerOpen}
                  className="wax-seal group"
                  title="Toca para abrir la invitación"
                >
                  <div className="flex flex-col items-center justify-center text-amber-100 drop-shadow">
                    <span className="font-script text-2xl font-bold -mb-1 group-hover:scale-110 transition-transform">
                      LF
                    </span>
                    <span className="text-[10px] font-extrabold tracking-widest uppercase opacity-90">
                      Abrir
                    </span>
                  </div>
                </button>

                <p className="text-xs font-semibold text-amber-800/90 mt-3 flex items-center gap-1.5 animate-pulse">
                  <MailOpen className="w-3.5 h-3.5 text-amber-600" />
                  Toca el sello dorado para abrir la invitación
                </p>
              </div>
            </div>

            {/* Quick skip button */}
            <button
              onClick={triggerOpen}
              className="mt-6 text-xs text-stone-500 hover:text-amber-800 underline transition-colors"
            >
              Entrar directo a la invitación →
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
