import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle, Sparkles, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onScrollToRsvp: () => void;
  onScrollToReception: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToRsvp,
  onScrollToReception,
}) => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center items-center text-center px-4 py-16 overflow-hidden">
      {/* Background Image with Warm Gradient Fade */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 sm:opacity-40 mix-blend-multiply"
        style={{ backgroundImage: 'url(/images/hero_bg.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6F0]/60 via-[#FAF6F0]/40 to-[#FAF6F0]" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Top Celebration Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="clay-pill px-5 py-2 mb-6 inline-flex items-center gap-2 border border-amber-300/60"
        >
          <Sparkles className="w-4 h-4 text-amber-600 animate-spin" />
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-amber-900 uppercase">
            Gran Celebración de Jubileo
          </span>
          <Sparkles className="w-4 h-4 text-amber-600 animate-spin" />
        </motion.div>

        {/* Grand Script Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mb-2"
        >
          <span className="text-sm sm:text-base tracking-[0.3em] uppercase text-stone-600 font-medium block mb-2">
            Te invito con todo mi amor a celebrar
          </span>
          
          <h1 className="font-serif-luxury text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-amber-950 leading-none">
            Mis 60 Años
          </h1>

          <div className="font-script text-5xl sm:text-7xl md:text-8xl text-amber-700 font-bold my-2 py-1 leading-tight filter drop-shadow-sm">
            Lety Feregrino
          </div>
        </motion.div>

        {/* Ornamental separator */}
        <div className="ornament-divider w-64 my-4">
          <span className="text-xl">❦</span>
        </div>

        {/* Subtitle / Catchphrase */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif-luxury italic text-xl sm:text-2xl text-stone-700 max-w-xl mx-auto mb-8 font-medium leading-relaxed"
        >
          &ldquo;Sesenta vueltas al sol agradeciendo a Dios cada bendición, cada recuerdo y la dicha de celebrar junto a ti.&rdquo;
        </motion.p>

        {/* Date & Location Highlight Clay Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="clay-card-gold px-6 py-4 sm:px-8 sm:py-5 mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 max-w-xl w-full"
        >
          <div className="flex items-center gap-3 text-amber-950">
            <div className="w-10 h-10 rounded-full bg-amber-200/60 flex items-center justify-center text-amber-800 shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs uppercase tracking-wider text-amber-800/80 font-bold">Fecha</div>
              <div className="font-bold text-sm sm:text-base text-amber-950">Sábado 5 de Diciembre, 2026</div>
            </div>
          </div>

          <div className="hidden sm:block w-px h-10 bg-amber-300/60" />

          <div className="flex items-center gap-3 text-amber-950">
            <div className="w-10 h-10 rounded-full bg-amber-200/60 flex items-center justify-center text-amber-800 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs uppercase tracking-wider text-amber-800/80 font-bold">Lugar</div>
              <div className="font-bold text-sm sm:text-base text-amber-950">Salón & Jardín Anturios</div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Claymorphism Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 w-full"
        >
          <button
            onClick={onScrollToRsvp}
            className="clay-btn clay-btn-gold text-base px-8 py-3.5 shadow-xl group"
          >
            <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Confirmar Asistencia</span>
          </button>

          <button
            onClick={onScrollToReception}
            className="clay-btn clay-btn-white text-base px-7 py-3.5"
          >
            <MapPin className="w-5 h-5 text-amber-700" />
            <span>Ver Recepción & Mapa</span>
          </button>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-12 text-stone-400 flex flex-col items-center gap-1 cursor-pointer"
          onClick={onScrollToReception}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-800/60">Desliza para ver más</span>
          <ChevronDown className="w-5 h-5 text-amber-700/60" />
        </motion.div>
      </div>
    </section>
  );
};
