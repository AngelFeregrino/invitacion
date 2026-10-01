import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  CheckCircle,
  Users,
  XCircle,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import type { RsvpData } from '../types/rsvp';

export const RsvpSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [attending, setAttending] = useState<boolean>(true);
  const [adultsCount, setAdultsCount] = useState<number>(2);
  const [kidsCount, setKidsCount] = useState<number>(0);

  // Host WhatsApp number - fixed, cannot be modified
  const hostWhatsApp = '527121381206';

  // Saved RSVPs in localStorage
  const [savedRsvps, setSavedRsvps] = useState<RsvpData[]>(() => {
    try {
      const stored = localStorage.getItem('lety_60_rsvps');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [showGuestListModal, setShowGuestListModal] = useState(false);

  const triggerCelebration = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ec4899', '#f9a8d4', '#db2777', '#F18C8E'],
    });
  };

  const handleSendViaWhatsApp = () => {
    if (!fullName.trim()) {
      alert('Por favor escribe tu nombre antes de enviar la confirmación por WhatsApp.');
      return;
    }

    const totalPasses = adultsCount + kidsCount;

    if (attending && totalPasses === 0) {
      alert('Por favor selecciona al menos 1 pase para confirmar (adultos o niños).');
      return;
    }

    const attendingText = attending
      ? '¡Sí, confirmo mi asistencia con mucha emoción! 🎉'
      : 'Con mucho pesar no podré asistir, pero les envío un fuerte abrazo y mis mejores deseos 💌';

    const textLines = [
      '✨ *CONFIRMACIÓN DE ASISTENCIA* ✨',
      '🎂 *Mis 60 Años - Lety Feregrino*',
      '📅 Sábado 5 de Diciembre de 2026',
      '📍 Salón y Jardín Anturios',
      '',
      `👤 *Invitado(a):* ${fullName.trim()}`,
      `💫 *Estado:* ${attendingText}`,
      attending ? `🎟️ *Total de Pases:* ${totalPasses} persona(s)` : '',
      attending ? `👨‍💼 *Adultos:* ${adultsCount}` : '',
      attending ? `🧒 *Niños:* ${kidsCount}` : '',
      '',
      '¡Muchas gracias por la invitación! ✨',
    ].filter(Boolean).join('\n');

    const cleanNumber = hostWhatsApp.replace(/\D/g, '');
    const waUrl = cleanNumber.length >= 10
      ? `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodeURIComponent(textLines)}`
      : `https://api.whatsapp.com/send?text=${encodeURIComponent(textLines)}`;

    window.open(waUrl, '_blank');

    // Store locally
    const newRsvp: RsvpData = {
      id: Date.now().toString(),
      fullName: fullName.trim(),
      attending,
      adultsCount: attending ? adultsCount : 0,
      kidsCount: attending ? kidsCount : 0,
      guestsCount: attending ? totalPasses : 0,
      timestamp: new Date().toLocaleString('es-MX'),
    };

    const updated = [newRsvp, ...savedRsvps.filter(r => r.fullName !== newRsvp.fullName)];
    setSavedRsvps(updated);
    localStorage.setItem('lety_60_rsvps', JSON.stringify(updated));
    triggerCelebration();
  };

  const totalConfirmedGuests = savedRsvps
    .filter((r) => r.attending)
    .reduce((acc, curr) => acc + (curr.guestsCount || ((curr.adultsCount || 0) + (curr.kidsCount || 0)) || 1), 0);

  return (
    <section id="confirmacion" className="py-16 sm:py-24 px-4 relative">
      <div className="invitation-container max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="clay-pill px-5 py-2 inline-flex items-center gap-2 mb-3 text-pink-900 font-semibold text-xs tracking-widest uppercase"
          >
            <CheckCircle className="w-4 h-4 text-pink-600" />
            <span>Confirmación de Asistencia</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-pink-950 mb-3"
          >
            ¿Nos acompañas a celebrar?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 max-w-xl mx-auto text-base sm:text-lg font-medium"
          >
            Por favor confirma tu asistencia antes del <strong>15 de Noviembre de 2026</strong> para reservar tu lugar con el mejor servicio.
          </motion.p>
        </div>

        {/* Main RSVP Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="clay-card p-6 sm:p-12 relative overflow-hidden"
        >
          <div className="gold-corner-tr" />
          <div className="gold-corner-bl" />

          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-pink-950 mb-2">
                Nombre Completo <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ej. Familia González Hernández o María López"
                className="clay-input"
              />
            </div>

            {/* Attendance Toggle */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-pink-950 mb-3">
                ¿Confirmas tu asistencia?
              </label>
              <div className="grid grid-cols-2 gap-3 max-w-sm">
                <button
                  type="button"
                  onClick={() => setAttending(true)}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-bold text-sm transition-all ${
                    attending
                      ? 'clay-btn-gold text-white shadow-lg scale-[1.02]'
                      : 'clay-card-inset text-stone-600 hover:bg-pink-50'
                  }`}
                >
                  <CheckCircle className={`w-5 h-5 ${attending ? 'text-white' : 'text-emerald-500'}`} />
                  <span>¡Sí, voy!</span>
                </button>
                <button
                  type="button"
                  onClick={() => setAttending(false)}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-bold text-sm transition-all ${
                    !attending
                      ? 'bg-rose-500 text-white shadow-lg scale-[1.02]'
                      : 'clay-card-inset text-stone-600 hover:bg-rose-50'
                  }`}
                >
                  <XCircle className={`w-5 h-5 ${!attending ? 'text-rose-200' : 'text-rose-400'}`} />
                  <span>No podré ir</span>
                </button>
              </div>
            </div>

            {/* Attending-only: Adults and Kids Selects */}
            {attending && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4 pt-1"
              >
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-pink-950 mb-3">
                    Número de pases / personas a confirmar
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Select Adultos */}
                    <div>
                      <label htmlFor="select-adults" className="block text-xs font-semibold text-pink-900 mb-1.5 flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-pink-600" />
                        <span>Adultos</span>
                      </label>
                      <select
                        id="select-adults"
                        value={adultsCount}
                        onChange={(e) => setAdultsCount(Number(e.target.value))}
                        className="clay-input cursor-pointer font-bold text-pink-950 bg-white/90"
                      >
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Adulto' : 'Adultos'}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Select Niños */}
                    <div>
                      <label htmlFor="select-kids" className="block text-xs font-semibold text-pink-900 mb-1.5 flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-pink-600" />
                        <span>Niños</span>
                      </label>
                      <select
                        id="select-kids"
                        value={kidsCount}
                        onChange={(e) => setKidsCount(Number(e.target.value))}
                        className="clay-input cursor-pointer font-bold text-pink-950 bg-white/90"
                      >
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Niño' : 'Niños'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Resumen dinámico de pases */}
                  <div className="mt-3 clay-card-inset p-3 rounded-2xl flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-semibold text-pink-900 bg-pink-100/50 border border-pink-200/50">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-pink-600" />
                      <span>Total de pases seleccionados:</span>
                    </span>
                    <span className="font-extrabold text-pink-700 bg-white/90 px-3.5 py-1 rounded-full shadow-xs">
                      {adultsCount + kidsCount} {adultsCount + kidsCount === 1 ? 'persona' : 'personas'} ({adultsCount} {adultsCount === 1 ? 'adulto' : 'adultos'}, {kidsCount} {kidsCount === 1 ? 'niño' : 'niños'})
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Single WhatsApp Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleSendViaWhatsApp}
                className="clay-btn clay-btn-whatsapp w-full py-4 text-base shadow-xl text-lg font-bold"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Confirmar Asistencia por WhatsApp</span>
              </button>
              <p className="text-center text-xs text-stone-500 mt-3">
                Al presionar, se abrirá WhatsApp con tu confirmación lista para enviar 💬
              </p>
            </div>
          </div>

          {/* Summary footer */}
          <div className="mt-8 pt-6 border-t border-pink-200/50 flex flex-wrap items-center gap-3 text-xs text-stone-500">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-pink-900">
                Confirmados registrados en esta web:
              </span>
              <span className="bg-pink-100 text-pink-900 font-bold px-2 py-0.5 rounded-full">
                {totalConfirmedGuests} personas ({savedRsvps.length} registros)
              </span>
              {savedRsvps.length > 0 && (
                <button
                  onClick={() => setShowGuestListModal(true)}
                  className="text-pink-700 underline font-medium hover:text-pink-900"
                >
                  Ver lista
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Guest List Modal */}
      {showGuestListModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="clay-card p-6 max-w-lg w-full max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <h3 className="font-bold text-lg text-pink-950 flex items-center gap-2">
                <Users className="w-5 h-5 text-pink-700" />
                <span>Lista de Confirmaciones</span>
              </h3>
              <button
                onClick={() => setShowGuestListModal(false)}
                className="text-stone-400 hover:text-stone-700 text-xl font-bold leading-none"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              {savedRsvps.map((r) => {
                const total = r.guestsCount ?? ((r.adultsCount ?? 0) + (r.kidsCount ?? 0));
                return (
                  <div key={r.id} className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                    <div className="flex justify-between items-start font-bold text-stone-900 mb-1">
                      <span>{r.fullName}</span>
                      <span className={`px-2 py-0.5 rounded-full ${r.attending ? 'bg-rose-100 text-rose-800' : 'bg-stone-100 text-stone-600'}`}>
                        {r.attending ? `${total} pases` : 'No asistirá'}
                      </span>
                    </div>
                    {r.attending && (
                      <div className="text-stone-600 font-medium">
                        Adultos: {r.adultsCount ?? total} · Niños: {r.kidsCount ?? 0}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t text-right">
              <button
                onClick={() => setShowGuestListModal(false)}
                className="clay-btn clay-btn-white text-xs py-2 px-4"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
