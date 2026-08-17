import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Heart, Sparkles } from 'lucide-react';

export const HeartfeltMessage: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 px-4 relative">
      <div className="invitation-container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="clay-card p-6 sm:p-12 relative overflow-hidden"
        >
          {/* Decorative subtle background gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />

          {/* Golden corner accents */}
          <div className="gold-corner-tr" />
          <div className="gold-corner-bl" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Portrait Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-5 flex flex-col items-center"
            >
              <div className="relative group">
                {/* Clay Frame around photo */}
                <div className="p-3 bg-gradient-to-b from-[#FFFDF9] to-[#F1E8DC] rounded-3xl shadow-xl border border-amber-200/80">
                  <img
                    src="/images/lety_portrait.jpg"
                    alt="Lety Feregrino - Festejada"
                    className="w-56 h-72 sm:w-64 sm:h-80 object-cover rounded-2xl shadow-inner transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                {/* Badge on Photo */}
                <div className="absolute -bottom-3 -right-2 clay-pill px-4 py-1.5 bg-white/95 text-amber-950 font-bold text-xs flex items-center gap-1.5 shadow-md border border-amber-300">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>60 Años de Vida</span>
                </div>
              </div>
            </motion.div>

            {/* Letter Content */}
            <div className="md:col-span-7 flex flex-col text-left">
              <div className="flex items-center gap-2 mb-3">
                <Quote className="w-8 h-8 text-amber-600/70 rotate-180" />
                <span className="text-xs uppercase tracking-[0.25em] text-amber-800 font-bold">
                  Palabras de la festejada
                </span>
              </div>

              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-amber-950 mb-4 leading-snug">
                Un mensaje desde el corazón
              </h3>

              {/* Exact Heartfelt Letter (Polished and respectful) */}
              <div className="space-y-4 text-stone-700 font-serif-luxury text-lg sm:text-xl leading-relaxed italic">
                <p>
                  &ldquo;Con mucha alegría en mi corazón, quiero compartir este día tan importante en mi vida con las personas más queridas para mí.&rdquo;
                </p>
                <p>
                  &ldquo;Hoy, al dar gracias a Dios por permitirme llegar a mis <strong className="text-amber-900 not-italic font-bold">60 años</strong> llenos de bendiciones, deseo que me acompañen para celebrar juntos este momento tan especial.&rdquo;
                </p>
                <p>
                  &ldquo;Su presencia será el mejor regalo, pues cada uno de ustedes forma parte fundamental de mi historia y de mi felicidad.&rdquo;
                </p>
              </div>

              {/* Signature Block */}
              <div className="mt-8 pt-4 border-t border-amber-200/60 flex flex-col items-end">
                <div className="flex items-center gap-1 text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  <span>Con todo mi cariño</span>
                </div>
                <div className="font-signature text-4xl sm:text-5xl text-amber-800 font-normal">
                  Lety Feregrino
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
