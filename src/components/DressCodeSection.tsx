import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

export const DressCodeSection: React.FC = () => {
  const suggestedColors = [
    { name: 'Champagne / Oro', hex: '#E5C07B' },
    { name: 'Esmeralda', hex: '#2C5E43' },
    { name: 'Azul Noche', hex: '#1E293B' },
    { name: 'Rosa Palo', hex: '#DDA7A5' },
    { name: 'Vino Tinto', hex: '#722F37' },
    { name: 'Tierra / Arena', hex: '#B8977E' },
  ];

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
            <Crown className="w-6 h-6 text-amber-700" />
          </div>

          <div className="text-xs uppercase tracking-widest text-amber-800 font-bold mb-1">
            Etiqueta del Evento
          </div>

          <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-amber-950 mb-3">
            Código de Vestimenta
          </h3>

          <div className="inline-block clay-pill px-6 py-2 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-950 font-bold text-base sm:text-lg mb-4 border border-amber-300">
            Formal / Elegante
          </div>

          <p className="text-stone-600 max-w-lg mx-auto text-sm sm:text-base leading-relaxed mb-6 font-medium">
            Viste tus mejores galas para una tarde y noche llena de glamour, celebración y fotografías memorables.
          </p>

          {/* Color Palette Suggestion */}
          <div className="pt-4 border-t border-amber-200/50">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-900/80 block mb-4">
              Paleta sugerida de tonos y armonías
            </span>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {suggestedColors.map((color) => (
                <div key={color.name} className="flex flex-col items-center gap-1.5 group">
                  <div
                    className="w-9 h-9 sm:w-11 sm:h-11 rounded-full shadow-md border-2 border-white transform transition-transform group-hover:scale-110"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-[11px] font-medium text-stone-600">{color.name}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-stone-500 italic mt-5">
              * Nota: Agradecemos reservar los tonos blanco puro / marfil exclusivo para la festejada.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
