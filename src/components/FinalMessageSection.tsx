import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Share2, Sparkles, Check, Send } from 'lucide-react';

interface FinalMessageSectionProps {
  onScrollToRsvp: () => void;
}

export const FinalMessageSection: React.FC<FinalMessageSectionProps> = ({
  onScrollToRsvp,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const triggerHeartConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#E5C07B', '#D4AF37', '#E0A96D', '#FF6B6B'],
    });
  };

  const handleShare = async () => {
    const shareData = {
      title: '✨ Invitación: Mis 60 Años - Lety Feregrino',
      text: '¡Acompáñame a celebrar 60 años de vida y bendiciones! Sábado 5 de Diciembre de 2026 en Salón y Jardín Anturios.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // Fallback to copy
        copyUrl();
      }
    } else {
      copyUrl();
    }
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(
      `✨ *Estás invitado(a) a Mis 60 Años - Lety Feregrino* 🎂\n📅 Sábado 5 de Diciembre de 2026\n📍 Salón y Jardín Anturios\n\nEntra aquí para ver todos los detalles y confirmar tu asistencia:\n${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section className="py-16 sm:py-24 px-4 text-center relative overflow-hidden">
      <div className="invitation-container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="clay-card-gold p-8 sm:p-14 relative overflow-hidden"
        >
          <div className="gold-corner-tr" />
          <div className="gold-corner-bl" />

          {/* Floating heart icon with pulse */}
          <div 
            onClick={triggerHeartConfetti}
            className="w-16 h-16 rounded-full bg-gradient-to-tr from-rose-400 to-amber-300 text-white flex items-center justify-center mx-auto mb-6 shadow-xl cursor-pointer transform hover:scale-110 active:scale-95 transition-all"
            title="Toca para enviar cariño"
          >
            <Heart className="w-8 h-8 fill-white" />
          </div>

          <div className="font-script text-3xl sm:text-4xl text-amber-800 font-bold mb-3">
            ¡Te esperamos!
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-amber-950 mb-6 leading-tight">
            Una celebración hecha con el corazón
          </h2>

          {/* Sincere closing quote (exact from user prompt) */}
          <div className="space-y-4 text-stone-700 font-serif-luxury text-xl sm:text-2xl leading-relaxed italic max-w-2xl mx-auto mb-8">
            <p>
              &ldquo;Te esperamos con mucho cariño y entusiasmo. Me llena de emoción poder compartir este momento tan especial contigo.&rdquo;
            </p>
            <p>
              &ldquo;Espero que disfrutes cada minuto y <strong className="text-amber-900 not-italic font-bold">por favor no faltes</strong>, porque sin tu compañía no sería igual de grandioso este momento de mi vida que Dios me ha permitido celebrar.&rdquo;
            </p>
          </div>

          {/* Lety's Signature */}
          <div className="flex flex-col items-center justify-center my-6">
            <span className="text-xs uppercase tracking-[0.25em] text-amber-900/80 font-bold mb-1">
              Con inmenso cariño
            </span>
            <div className="font-signature text-5xl sm:text-6xl text-amber-800">
              Lety
            </div>
          </div>

          {/* Ornamental divider */}
          <div className="ornament-divider w-48 my-6">
            <span>❦</span>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onScrollToRsvp}
              className="clay-btn clay-btn-gold text-sm sm:text-base px-8 py-3.5 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>Confirmar Asistencia</span>
            </button>

            <button
              onClick={shareOnWhatsApp}
              className="clay-btn clay-btn-whatsapp text-sm sm:text-base px-6 py-3.5 shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>Compartir por WhatsApp</span>
            </button>

            <button
              onClick={handleShare}
              className="clay-btn clay-btn-white text-sm sm:text-base px-6 py-3.5"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4 text-amber-700" />}
              <span>{copiedLink ? '¡Enlace Copiado!' : 'Compartir Invitación'}</span>
            </button>
          </div>
        </motion.div>

        {/* Footer Credits */}
        <div className="mt-12 text-center text-xs text-stone-500 font-medium">
          <p>Mis 60 Años • Lety Feregrino • Sábado 5 de Diciembre de 2026</p>
          <p className="mt-1 text-stone-400">Hecho con amor para celebrar la vida ✨</p>
        </div>
      </div>
    </section>
  );
};
