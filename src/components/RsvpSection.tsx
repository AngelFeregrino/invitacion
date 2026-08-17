import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  CheckCircle, 
  Users, 
  Phone, 
  Music, 
  Ticket, 
  Settings, 
  XCircle,
  MessageCircle
} from 'lucide-react';
import type { RsvpData } from '../types/rsvp';
import { DigitalPassModal } from './DigitalPassModal';

export const RsvpSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [attending, setAttending] = useState<boolean>(true);
  const [guestsCount, setGuestsCount] = useState<number>(2);
  const [guestNames, setGuestNames] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [songSuggestion, setSongSuggestion] = useState('');
  
  // Host WhatsApp number (can be edited by user or set to a default Mexico phone)
  const [hostWhatsApp, setHostWhatsApp] = useState<string>(() => {
    return localStorage.getItem('rsvp_host_whatsapp') || '7121330734';
  });
  const [showConfigNumber, setShowConfigNumber] = useState(false);

  // Digital pass modal state
  const [showPassModal, setShowPassModal] = useState(false);
  const [currentRsvp, setCurrentRsvp] = useState<RsvpData | null>(null);

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

  useEffect(() => {
    localStorage.setItem('rsvp_host_whatsapp', hostWhatsApp);
  }, [hostWhatsApp]);

  const triggerCelebration = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#2C5E43', '#E5C07B', '#F18C8E'],
    });
  };

  const handleSaveAndGenerateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      alert('Por favor ingresa tu nombre completo.');
      return;
    }

    const newRsvp: RsvpData = {
      id: Date.now().toString(),
      fullName: fullName.trim(),
      attending,
      guestsCount: attending ? guestsCount : 0,
      guestNames: guestNames.trim(),
      phone: phone.trim(),
      message: message.trim(),
      songSuggestion: songSuggestion.trim(),
      timestamp: new Date().toLocaleString('es-MX'),
    };

    const updated = [newRsvp, ...savedRsvps];
    setSavedRsvps(updated);
    localStorage.setItem('lety_60_rsvps', JSON.stringify(updated));

    setCurrentRsvp(newRsvp);
    triggerCelebration();
    setShowPassModal(true);
  };

  const handleSendViaWhatsApp = () => {
    if (!fullName.trim()) {
      alert('Por favor escribe tu nombre antes de enviar la confirmación por WhatsApp.');
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
      attending ? `🎟️ *Cantidad de Pases:* ${guestsCount} persona(s)` : '',
      attending && guestNames.trim() ? `👥 *Acompañantes:* ${guestNames.trim()}` : '',
      phone.trim() ? `📱 *Teléfono:* ${phone.trim()}` : '',
      songSuggestion.trim() ? `🎵 *Canción para la fiesta:* ${songSuggestion.trim()}` : '',
      message.trim() ? `\n💌 *Mensaje para Lety:*\n"${message.trim()}"` : '',
      '',
      '¡Muchas gracias por la invitación! ✨',
    ].filter(Boolean).join('\n');

    const cleanNumber = hostWhatsApp.replace(/\D/g, '');
    const waUrl = cleanNumber.length >= 10
      ? `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodeURIComponent(textLines)}`
      : `https://api.whatsapp.com/send?text=${encodeURIComponent(textLines)}`;

    window.open(waUrl, '_blank');

    // Also store locally & create digital pass
    const newRsvp: RsvpData = {
      id: Date.now().toString(),
      fullName: fullName.trim(),
      attending,
      guestsCount: attending ? guestsCount : 0,
      guestNames: guestNames.trim(),
      phone: phone.trim(),
      message: message.trim(),
      songSuggestion: songSuggestion.trim(),
      timestamp: new Date().toLocaleString('es-MX'),
    };

    const updated = [newRsvp, ...savedRsvps.filter(r => r.fullName !== newRsvp.fullName)];
    setSavedRsvps(updated);
    localStorage.setItem('lety_60_rsvps', JSON.stringify(updated));
    setCurrentRsvp(newRsvp);
    triggerCelebration();
  };

  const totalConfirmedGuests = savedRsvps
    .filter((r) => r.attending)
    .reduce((acc, curr) => acc + (curr.guestsCount || 1), 0);

  return (
    <section id="confirmacion" className="py-16 sm:py-24 px-4 relative">
      <div className="invitation-container max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="clay-pill px-5 py-2 inline-flex items-center gap-2 mb-3 text-amber-900 font-semibold text-xs tracking-widest uppercase"
          >
            <CheckCircle className="w-4 h-4 text-amber-600" />
            <span>Confirmación de Asistencia</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-amber-950 mb-3"
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

        {/* Main Claymorphic RSVP Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="clay-card p-6 sm:p-12 relative overflow-hidden"
        >
          <div className="gold-corner-tr" />
          <div className="gold-corner-bl" />

          <form onSubmit={handleSaveAndGenerateTicket} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-amber-950 mb-2">
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
              <label className="block text-xs uppercase tracking-wider font-bold text-amber-950 mb-2">
                ¿Confirmas tu asistencia?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setAttending(true)}
                  className={`p-4 rounded-2xl flex items-center justify-center gap-3 font-bold text-sm transition-all ${
                    attending
                      ? 'bg-gradient-to-r from-emerald-50 to-emerald-100 border-2 border-emerald-500 text-emerald-950 shadow-md scale-[1.02]'
                      : 'bg-stone-50 border border-stone-200 text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  <CheckCircle className={`w-5 h-5 ${attending ? 'text-emerald-600' : 'text-stone-400'}`} />
                  <span>¡Sí, con mucho gusto asistiré! 🎉</span>
                </button>

                <button
                  type="button"
                  onClick={() => setAttending(false)}
                  className={`p-4 rounded-2xl flex items-center justify-center gap-3 font-bold text-sm transition-all ${
                    !attending
                      ? 'bg-gradient-to-r from-rose-50 to-rose-100 border-2 border-rose-400 text-rose-950 shadow-md scale-[1.02]'
                      : 'bg-stone-50 border border-stone-200 text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  <XCircle className={`w-5 h-5 ${!attending ? 'text-rose-500' : 'text-stone-400'}`} />
                  <span>Lamentablemente no podré 💌</span>
                </button>
              </div>
            </div>

            {/* Guest count & names (Only shown if attending is true) */}
            {attending && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-6 pt-2"
              >
                {/* Number of passes */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-amber-950 mb-2">
                    Número de pases / personas a confirmar
                  </label>
                  <div className="flex flex-wrap items-center gap-2">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setGuestsCount(num)}
                        className={`w-12 h-12 rounded-2xl font-extrabold text-base transition-all flex items-center justify-center ${
                          guestsCount === num
                            ? 'clay-btn-gold scale-110 shadow-lg text-white'
                            : 'clay-card-inset text-amber-950 hover:bg-amber-100/50'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Companion names */}
                {guestsCount > 1 && (
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-amber-950 mb-2">
                      Nombres de tus acompañantes
                    </label>
                    <input
                      type="text"
                      value={guestNames}
                      onChange={(e) => setGuestNames(e.target.value)}
                      placeholder="Ej. Roberto y Sofía"
                      className="clay-input"
                    />
                  </div>
                )}
              </motion.div>
            )}

            {/* Phone Number */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-amber-950 mb-2">
                Teléfono de Contacto / WhatsApp (Opcional)
              </label>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ej. 55 1234 5678"
                  className="clay-input pl-10"
                />
                <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Song Suggestion */}
            {attending && (
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-amber-950 mb-2">
                  ¿Qué canción te gustaría bailar o escuchar en la fiesta? 🎵
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={songSuggestion}
                    onChange={(e) => setSongSuggestion(e.target.value)}
                    placeholder="Ej. Vivir Mi Vida - Marc Anthony"
                    className="clay-input pl-10"
                  />
                  <Music className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>
            )}

            {/* Message for Lety */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-amber-950 mb-2">
                Dedicatoria o Mensaje Especial para Lety 💌
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tus buenos deseos y felicitaciones..."
                className="clay-input resize-none"
              />
            </div>

            {/* Action Buttons: WhatsApp & Digital VIP Pass */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={handleSendViaWhatsApp}
                className="clay-btn clay-btn-whatsapp w-full sm:flex-1 py-4 text-base shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Confirmar por WhatsApp</span>
              </button>

              <button
                type="submit"
                className="clay-btn clay-btn-gold w-full sm:flex-1 py-4 text-base shadow-xl"
              >
                <Ticket className="w-5 h-5" />
                <span>Generar Pase Digital VIP</span>
              </button>
            </div>
          </form>

          {/* Quick host configuration & summary footer */}
          <div className="mt-8 pt-6 border-t border-amber-200/50 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-amber-900">
                Confirmados registrados en esta web:
              </span>
              <span className="bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-full">
                {totalConfirmedGuests} personas ({savedRsvps.length} registros)
              </span>
              {savedRsvps.length > 0 && (
                <button
                  onClick={() => setShowGuestListModal(true)}
                  className="text-amber-700 underline font-medium hover:text-amber-900"
                >
                  Ver lista
                </button>
              )}
            </div>

            <button
              onClick={() => setShowConfigNumber(!showConfigNumber)}
              className="flex items-center gap-1 text-stone-500 hover:text-amber-800 transition-colors"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Configurar WhatsApp de recepción</span>
            </button>
          </div>

          {/* Host WhatsApp number config drawer */}
          {showConfigNumber && (
            <div className="mt-4 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs">
              <label className="block font-bold text-amber-950 mb-1">
                Número de WhatsApp para recibir confirmaciones (con código de país, ej. 52155...):
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={hostWhatsApp}
                  onChange={(e) => setHostWhatsApp(e.target.value)}
                  placeholder="5215512345678"
                  className="clay-input text-xs py-2"
                />
                <button
                  onClick={() => setShowConfigNumber(false)}
                  className="clay-btn clay-btn-gold text-xs py-2 px-4 shrink-0"
                >
                  Guardar
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Guest List Summary Modal (for host) */}
      {showGuestListModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="clay-card p-6 max-w-lg w-full max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <h3 className="font-bold text-lg text-amber-950 flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-700" />
                <span>Lista de Confirmaciones</span>
              </h3>
              <button
                onClick={() => setShowGuestListModal(false)}
                className="text-stone-400 hover:text-stone-700"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              {savedRsvps.map((r) => (
                <div key={r.id} className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                  <div className="flex justify-between items-start font-bold text-stone-900 mb-1">
                    <span>{r.fullName}</span>
                    <span className={`px-2 py-0.5 rounded-full ${r.attending ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                      {r.attending ? `${r.guestsCount} pases` : 'No asistirá'}
                    </span>
                  </div>
                  {r.guestNames && <div className="text-stone-600">Acompañantes: {r.guestNames}</div>}
                  {r.phone && <div className="text-stone-500">Tel: {r.phone}</div>}
                  {r.songSuggestion && <div className="text-stone-500">Canción: {r.songSuggestion}</div>}
                  {r.message && <div className="italic text-stone-600 mt-1">"{r.message}"</div>}
                </div>
              ))}
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

      {/* Digital VIP Pass Modal */}
      <DigitalPassModal
        isOpen={showPassModal}
        onClose={() => setShowPassModal(false)}
        rsvpData={currentRsvp}
      />
    </section>
  );
};
