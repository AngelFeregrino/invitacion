import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Mail, Heart, Copy, Check } from 'lucide-react';

export const GiftsSection: React.FC = () => {
  const [copiedAccount, setCopiedAccount] = useState(false);
  const clabeAccount = "012 180 015 678 901 234";

  const handleCopyClabe = () => {
    navigator.clipboard.writeText(clabeAccount.replace(/\s/g, ''));
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2500);
  };

  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="invitation-container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="clay-card p-6 sm:p-10 text-center"
        >
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-3 shadow-inner">
            <Gift className="w-6 h-6 text-amber-700" />
          </div>

          <div className="text-xs uppercase tracking-widest text-amber-800 font-bold mb-1">
            Muestra de Afecto
          </div>

          <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-amber-950 mb-3">
            Mesa de Regalos & Buenos Deseos
          </h3>

          <p className="text-stone-700 max-w-xl mx-auto text-base sm:text-lg italic font-serif-luxury mb-8">
            &ldquo;Tu presencia y tus abrazos son nuestro regalo más preciado. Si además deseas hacerme un presente, contaremos con un buzón de sobres para bendiciones en la recepción.&rdquo;
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Lluvia de Sobres */}
            <div className="clay-card-inset p-6 flex flex-col items-center justify-between text-center rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-amber-200/60 flex items-center justify-center text-amber-900 mb-3">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-amber-950 text-base mb-1">Lluvia de Sobres</h4>
              <p className="text-xs sm:text-sm text-stone-600 mb-2">
                Habrá un baúl especial de sobres y cartas con dedicatorias el día del evento.
              </p>
              <span className="text-[11px] font-semibold text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
                Recepción Salón Anturios
              </span>
            </div>

            {/* Transferencia Opcional */}
            <div className="clay-card-inset p-6 flex flex-col items-center justify-between text-center rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-amber-200/60 flex items-center justify-center text-amber-900 mb-3">
                <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
              </div>
              <h4 className="font-bold text-amber-950 text-base mb-1">Buzón Digital / Obsequio</h4>
              <p className="text-xs sm:text-sm text-stone-600 mb-2">
                Si prefieres realizar un detalle mediante transferencia digital:
              </p>
              <button
                onClick={handleCopyClabe}
                className="clay-btn clay-btn-white text-xs py-2 px-3 flex items-center gap-1.5"
                title="Copiar CLABE"
              >
                {copiedAccount ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-amber-700" />}
                <span className="font-mono">{copiedAccount ? '¡CLABE Copiada!' : 'Copiar CLABE'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
