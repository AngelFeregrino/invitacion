import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  ExternalLink, 
  Navigation, 
  Copy, 
  Check, 
  Clock, 
  Sparkles, 
  Utensils, 
  Wine, 
  PartyPopper 
} from 'lucide-react';

export const ReceptionSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const mapsUrl = "https://maps.app.goo.gl/TGQhyLfuj1c8MRQWA";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`Salón y Jardín Anturios: ${mapsUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const itinerary = [
    {
      time: "15:00 hrs",
      title: "Recepción & Cóctel de Bienvenida",
      desc: "Llegada al jardín, bebidas refrescantes y convivencia con amigos y familia.",
      icon: Wine,
    },
    {
      time: "16:30 hrs",
      title: "Banquete de Gala & Brindis",
      desc: "Deliciosa comida en honor a la festejada y brindis por sus 60 años de vida.",
      icon: Utensils,
    },
    {
      time: "18:30 hrs",
      title: "Momentos Emotivos & Recuerdos",
      desc: "Palabras especiales, semblanza fotográfica y agradecimiento.",
      icon: Sparkles,
    },
    {
      time: "19:30 hrs",
      title: "Fiesta, Música en Vivo & Baile",
      desc: "¡Apertura de la pista de baile con toda la actitud para divertirse!",
      icon: PartyPopper,
    },
  ];

  return (
    <section id="recepcion" className="py-16 sm:py-24 px-4">
      <div className="invitation-container max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="clay-pill px-5 py-2 inline-flex items-center gap-2 mb-3 text-amber-900 font-semibold text-xs tracking-widest uppercase"
          >
            <MapPin className="w-4 h-4 text-amber-600" />
            <span>Lugar & Horarios</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-amber-950 mb-3"
          >
            Recepción del Evento
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 max-w-xl mx-auto text-base sm:text-lg font-medium"
          >
            Un hermoso espacio preparado con mucho amor para disfrutar cada instante.
          </motion.p>
        </div>

        {/* Venue Highlight Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="clay-card overflow-hidden mb-12"
        >
          <div className="relative h-64 sm:h-96 w-full overflow-hidden">
            <img
              src="/images/venue.jpg"
              alt="Salón y Jardín Anturios"
              className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
              <span className="text-amber-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-1">
                Lugar de Celebración
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-5xl font-bold mb-2">
                Salón y Jardín Anturios
              </h3>
              <p className="text-stone-200 text-sm sm:text-base max-w-2xl font-light">
                Un entorno natural y sofisticado diseñado para vivir una celebración inolvidable.
              </p>
            </div>
          </div>

          {/* Location Action Bar */}
          <div className="p-6 sm:p-8 bg-[#FAF6F0]/80 flex flex-wrap items-center justify-between gap-4 border-t border-amber-200/50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800 shrink-0 shadow-inner">
                <MapPin className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <div className="font-bold text-amber-950 text-base sm:text-lg">Salón y Jardín Anturios</div>
                <div className="text-xs sm:text-sm text-stone-600">Sábado 5 de Diciembre, 2026 • 15:00 hrs</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="clay-btn clay-btn-gold text-xs sm:text-sm py-2.5 px-5 flex-1 sm:flex-initial"
              >
                <Navigation className="w-4 h-4" />
                <span>Abrir en Google Maps</span>
              </a>

              <a
                href={`https://waze.com/ul?q=${encodeURIComponent("Salón y Jardín Anturios")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="clay-btn clay-btn-white text-xs sm:text-sm py-2.5 px-4"
                title="Abrir en Waze"
              >
                <ExternalLink className="w-4 h-4 text-amber-700" />
                <span>Waze</span>
              </a>

              <button
                onClick={handleCopyAddress}
                className="clay-btn clay-btn-white text-xs sm:text-sm py-2.5 px-4"
                title="Copiar enlace de ubicación"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-amber-700" />}
                <span>{copied ? '¡Copiado!' : 'Copiar'}</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Two Columns: Itinerary + Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Itinerary Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 clay-card p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-amber-700" />
              <h3 className="font-serif-luxury text-2xl font-bold text-amber-950">
                Itinerario de la Celebración
              </h3>
            </div>

            <div className="space-y-6 relative before:absolute before:top-3 before:bottom-3 before:left-5 before:w-0.5 before:bg-amber-200">
              {itinerary.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="relative flex items-start gap-4 pl-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 text-amber-800 flex items-center justify-center shrink-0 z-10 shadow-md border-2 border-white">
                      <IconComponent className="w-4 h-4 text-amber-800" />
                    </div>
                    <div className="flex-1 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-amber-100/80 shadow-sm">
                      <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-100/80 text-amber-900 font-bold text-xs mb-1">
                        {item.time}
                      </div>
                      <h4 className="font-bold text-amber-950 text-base mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Interactive Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 clay-card p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Navigation className="w-5 h-5 text-amber-700" />
                <h3 className="font-serif-luxury text-2xl font-bold text-amber-950">
                  Ubicación en el Mapa
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 mb-4">
                Haz clic en el mapa para navegar o presiona el botón inferior para abrir las indicaciones paso a paso en tu GPS.
              </p>

              {/* Map Iframe Container */}
              <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden shadow-inner border border-amber-200/80 relative mb-4 bg-stone-100">
                <iframe
                  title="Mapa Salón y Jardín Anturios"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.662283995874!2d-99.1824968!3d19.4264627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzM1LjMiTiA5OcKwMTAnNTcuMCJX!5e0!3m2!1ses!2smx!4v1650000000000!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200/60 flex items-center justify-between">
              <span className="text-xs text-amber-950 font-medium">
                ¿Vienes en auto? Contamos con servicio de estacionamiento y valet.
              </span>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="clay-btn clay-btn-gold text-xs py-2 px-4 shrink-0"
              >
                Abrir GPS
              </a>
            </div>
          </motion.div>
        </div>

        {/* Heartfelt Note on Reception */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 clay-card-emerald p-6 sm:p-8 text-center max-w-3xl mx-auto"
        >
          <PartyPopper className="w-8 h-8 text-emerald-800 mx-auto mb-2" />
          <h4 className="font-serif-luxury text-xl sm:text-2xl font-bold text-emerald-950 mb-2">
            ¡Con toda la actitud de divertirse!
          </h4>
          <p className="text-emerald-900/90 text-sm sm:text-base leading-relaxed">
            Muchas gracias por su cariño y atención. Esperamos contar con su invaluable presencia para cantar, brindar, reír y llenar este día de momentos mágicos junto a Lety.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
