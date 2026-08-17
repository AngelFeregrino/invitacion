import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const moments = [
    {
      img: '/images/toast.jpg',
      title: 'Brindis de Celebración',
      caption: 'Por 60 años de vida, risas y bendiciones',
    },
    {
      img: '/images/lety_portrait.jpg',
      title: 'Dicha & Gratitud',
      caption: 'Celebrando cada vuelta al sol con amor',
    },
    {
      img: '/images/venue.jpg',
      title: 'Jardín & Velada Mágica',
      caption: 'El escenario perfecto para reencontrarnos',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="invitation-container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="clay-pill px-5 py-2 inline-flex items-center gap-2 mb-3 text-amber-900 font-semibold text-xs tracking-widest uppercase"
          >
            <Camera className="w-4 h-4 text-amber-600" />
            <span>Memorias & Alegría</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-amber-950 mb-3"
          >
            Celebrando la Vida
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 max-w-xl mx-auto text-base sm:text-lg font-medium"
          >
            Cada instante compartido se convierte en un recuerdo que dura para siempre.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {moments.map((moment, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="clay-card overflow-hidden group rounded-3xl"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={moment.img}
                  alt={moment.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{moment.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-200 font-light">
                    {moment.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
