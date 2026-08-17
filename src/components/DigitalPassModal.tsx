import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, QrCode, Calendar, MapPin, Sparkles, Download } from 'lucide-react';
import type { RsvpData } from '../types/rsvp';

interface DigitalPassModalProps {
  isOpen: boolean;
  onClose: () => void;
  rsvpData: RsvpData | null;
}

export const DigitalPassModal: React.FC<DigitalPassModalProps> = ({
  isOpen,
  onClose,
  rsvpData,
}) => {
  const passRef = useRef<HTMLDivElement>(null);

  if (!isOpen || !rsvpData) return null;

  const handlePrintOrShare = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.85, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.85, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md bg-transparent"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-3 -right-3 z-20 w-9 h-9 rounded-full bg-white text-stone-800 flex items-center justify-center shadow-lg border border-stone-200 hover:scale-110 transition-transform"
          >
            <X className="w-5 h-5" />
          </button>

          {/* VIP Pass Card Container */}
          <div
            ref={passRef}
            className="vip-pass-card p-6 sm:p-8 rounded-3xl relative flex flex-col justify-between text-stone-100 shadow-2xl border-2 border-[#E5C07B]"
          >
            {/* Header of Pass */}
            <div>
              <div className="flex items-center justify-between border-b border-amber-500/40 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <span className="text-xs uppercase tracking-[0.25em] font-bold text-amber-300">
                    Pase de Acceso VIP
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-amber-400/20 text-amber-300 border border-amber-400/40">
                  {rsvpData.attending ? 'Confirmado' : 'Agradecimiento'}
                </span>
              </div>

              <div className="text-center my-3">
                <div className="font-serif-luxury text-3xl font-bold text-amber-300">
                  Mis 60 Años
                </div>
                <div className="font-script text-3xl text-amber-100">
                  Lety Feregrino
                </div>
              </div>
            </div>

            {/* Guest Details */}
            <div className="my-4 bg-white/5 rounded-2xl p-4 border border-amber-400/20 backdrop-blur-sm">
              <div className="text-xs text-amber-400/80 uppercase font-semibold">Invitado de Honor</div>
              <div className="text-xl font-bold text-white mb-2">{rsvpData.fullName}</div>

              <div className="grid grid-cols-2 gap-2 text-xs text-stone-300 pt-2 border-t border-white/10">
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">Pases Reservados</span>
                  <span className="font-bold text-amber-300 text-sm">
                    {rsvpData.guestsCount} {rsvpData.guestsCount === 1 ? 'Persona' : 'Personas'}
                  </span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">Fecha</span>
                  <span className="font-bold text-stone-200 text-sm">5 Dic 2026</span>
                </div>
              </div>

              {rsvpData.guestNames && (
                <div className="mt-2 pt-2 border-t border-white/10 text-xs text-stone-300">
                  <span className="text-stone-400 block text-[10px] uppercase">Acompañantes</span>
                  <span>{rsvpData.guestNames}</span>
                </div>
              )}
            </div>

            {/* Venue & QR Code footer */}
            <div className="flex items-center justify-between pt-2 border-t border-amber-500/40">
              <div className="text-xs space-y-1">
                <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Salón y Jardín Anturios</span>
                </div>
                <div className="flex items-center gap-1.5 text-stone-300">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Sábado 5 Dic 2026 • 15:00 hrs</span>
                </div>
              </div>

              {/* QR Mockup */}
              <div className="w-16 h-16 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 shadow-md">
                <QrCode className="w-full h-full text-stone-900" />
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={handlePrintOrShare}
                className="clay-btn clay-btn-gold text-xs py-2.5 px-5 w-full flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Guardar / Imprimir Pase</span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
