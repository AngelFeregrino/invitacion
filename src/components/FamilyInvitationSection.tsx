import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Flower2 } from 'lucide-react';

export const FamilyInvitationSection: React.FC = () => {
  const familyImages = [
    {
      src: '/images/fam1.jpeg',
      alt: 'Familia Feregrino - Recuerdo familiar 1',
    },
    {
      src: '/images/fam2.jpeg',
      alt: 'Familia Feregrino - Recuerdo familiar 2',
    },
    {
      src: '/images/fam3.jpeg',
      alt: 'Familia Feregrino - Recuerdo familiar 3',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 relative overflow-hidden">
      {/* Soft floral background decoration */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-100/40 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="invitation-container max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="clay-pill px-5 py-2 inline-flex items-center gap-2 mb-3 font-semibold text-xs tracking-widest uppercase"
            style={{ color: '#be185d' }}
          >
            <Flower2 className="w-4 h-4" style={{ color: '#db2777' }} />
            <span>Invitación Familiar</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold mb-4"
            style={{ color: '#831843' }}
          >
            Con mucho cariño te invitamos
          </motion.h2>

          {/* Family Names Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="clay-card p-6 sm:p-10 max-w-3xl mx-auto mb-10"
            style={{ background: 'linear-gradient(135deg, #fff0f6 0%, #fce7f3 100%)', border: '1.5px solid rgba(236,72,153,0.2)' }}
          >
            <div className="flex justify-center mb-4">
              <Heart className="w-8 h-8 fill-current" style={{ color: '#ec4899' }} />
            </div>
            <p className="font-serif-luxury text-lg sm:text-2xl leading-relaxed text-center" style={{ color: '#4a1942' }}>
              <span className="font-bold" style={{ color: '#be185d' }}>Arturo Martínez</span>
              {', '}
              <span className="font-bold" style={{ color: '#be185d' }}>Arturo Feregrino</span>
              {', '}
              <span className="font-bold" style={{ color: '#be185d' }}>José Feregrino</span>
              {' y '}
              <span className="font-bold" style={{ color: '#be185d' }}>Ángel Feregrino</span>
            </p>
            <div className="my-4 flex items-center justify-center gap-3">
              <div className="h-px flex-1 max-w-[80px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(236,72,153,0.4), transparent)' }} />
              <Flower2 className="w-5 h-5" style={{ color: '#ec4899' }} />
              <div className="h-px flex-1 max-w-[80px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(236,72,153,0.4), transparent)' }} />
            </div>
            <p className="font-serif-luxury text-lg sm:text-2xl leading-relaxed text-center italic" style={{ color: '#4a1942' }}>
              te invitan a celebrar los
              {' '}
              <span className="font-bold not-italic text-2xl sm:text-3xl" style={{ color: '#be185d' }}>60 años</span>
              {' de '}
              <span className="font-script text-3xl sm:text-4xl font-bold not-italic" style={{ color: '#9d174d' }}>Lety</span>
            </p>
          </motion.div>
        </div>

        {/* Family Photo Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-7">
          {familyImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group overflow-hidden rounded-3xl shadow-xl relative"
              style={{ border: '2px solid rgba(236,72,153,0.25)' }}
            >
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(131,24,67,0.5) 0%, rgba(131,24,67,0.1) 40%, transparent 100%)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="font-serif-luxury italic text-lg sm:text-xl" style={{ color: '#9d174d' }}>
            &ldquo;La familia es el tesoro más grande que la vida nos regala.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <Flower2 className="w-4 h-4" style={{ color: '#ec4899' }} />
            <Flower2 className="w-5 h-5" style={{ color: '#db2777' }} />
            <Flower2 className="w-4 h-4" style={{ color: '#ec4899' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
