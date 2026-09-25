import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ImagePlus, FolderHeart, Sparkles, ExternalLink, Smartphone, UploadCloud, Heart } from 'lucide-react';

export const SharedAlbumSection: React.FC = () => {
  const driveFolderUrl = "https://drive.google.com/drive/folders/1WmAhoTkvCMCNRy9yScUX5q8De9dDNqtS?usp=sharing";

  return (
    <section id="album-fotos" className="py-16 sm:py-24 px-4 relative overflow-hidden">
      {/* Decorative ambient blurred blobs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-rose-100/40 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="invitation-container max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="clay-pill px-5 py-2 inline-flex items-center gap-2 mb-3 text-pink-900 font-semibold text-xs tracking-widest uppercase"
          >
            <Camera className="w-4 h-4 text-pink-600" />
            <span>Álbum de Recuerdos</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-pink-950 mb-3"
          >
            Comparte tus Fotos de la Fiesta
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 max-w-xl mx-auto text-base sm:text-lg font-medium"
          >
            ¡Ayúdanos a capturar cada sonrisa, brindis y baile de los 60 años de Lety!
          </motion.p>
        </div>

        {/* Main Clay Card for the Shared Album */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="clay-card p-6 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="gold-corner-tr" />
          <div className="gold-corner-bl" />

          {/* Central Camera Icon with Heart Badge */}
          <div className="relative inline-block mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-pink-200 via-rose-100 to-pink-50 flex items-center justify-center text-pink-700 shadow-lg border border-pink-200/80 mx-auto">
              <FolderHeart className="w-10 h-10 sm:w-12 sm:h-12 text-pink-700 animate-pulse" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-md border-2 border-white">
              <Camera className="w-4 h-4" />
            </div>
          </div>

          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-pink-950 mb-3">
            Álbum Digital en Google Drive
          </h3>

          <p className="text-stone-700 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Hemos creado una <strong className="font-semibold text-pink-950">carpeta pública en Google Drive</strong> para que durante la misa y la fiesta subas directamente las fotos y videos que tomes desde tu celular. ¡Queremos atesorar todos los momentos vividos a través de tus ojos!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 max-w-md mx-auto">
            <a
              href={driveFolderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn clay-btn-gold w-full py-4 text-sm sm:text-base font-bold shadow-xl flex items-center justify-center gap-2.5 group"
            >
              <ImagePlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Subir Fotos al Álbum</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>

            <a
              href={driveFolderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn clay-btn-white w-full py-4 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 text-pink-900 border border-pink-200"
            >
              <Sparkles className="w-4 h-4 text-pink-600" />
              <span>Ver Fotos de Todos</span>
            </a>
          </div>

          {/* 3 Step Quick Guide for Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left border-t border-pink-200/60 pt-8">
            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-pink-100/80 shadow-xs flex flex-col gap-2">
              <div className="w-9 h-9 rounded-xl bg-pink-100 flex items-center justify-center text-pink-700 font-bold text-sm shrink-0">
                <Smartphone className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-pink-950 text-sm">1. Toma tus fotos</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Toma fotos y videos durante la misa, la comida o la pista de baile.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-pink-100/80 shadow-xs flex flex-col gap-2">
              <div className="w-9 h-9 rounded-xl bg-pink-100 flex items-center justify-center text-pink-700 font-bold text-sm shrink-0">
                <UploadCloud className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-pink-950 text-sm">2. Abre la carpeta</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Presiona el botón de arriba para abrir la carpeta compartida en Google Drive.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-pink-100/80 shadow-xs flex flex-col gap-2">
              <div className="w-9 h-9 rounded-xl bg-pink-100 flex items-center justify-center text-pink-700 font-bold text-sm shrink-0">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              </div>
              <h4 className="font-bold text-pink-950 text-sm">3. ¡Agrega tus recuerdos!</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Toca el botón "+" y selecciona las fotos de tu galería para compartirlas.
              </p>
            </div>
          </div>

          {/* Bottom assurance badge */}
          <div className="mt-6 inline-flex items-center gap-2 text-xs text-pink-900/80 bg-pink-50/80 px-4 py-2 rounded-full border border-pink-200/50">
            <Sparkles className="w-3.5 h-3.5 text-pink-500 shrink-0" />
            <span>Carpeta pública y accesible desde cualquier celular Android o iPhone ✨</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
