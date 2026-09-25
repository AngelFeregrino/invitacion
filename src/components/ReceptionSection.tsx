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
  PartyPopper,
  Church
} from 'lucide-react';

export const ReceptionSection: React.FC = () => {
  const [copiedSalon, setCopiedSalon] = useState(false);
  const [copiedIglesia, setCopiedIglesia] = useState(false);
  const [activeMap, setActiveMap] = useState<'salon' | 'iglesia'>('salon');

  const salonMapsUrl = "https://maps.app.goo.gl/TGQhyLfuj1c8MRQWA";
  const churchMapsUrl = "https://maps.app.goo.gl/6LK7BxBz1ih4DeG98";

  const handleCopySalon = () => {
    navigator.clipboard.writeText(`Salón y Jardín Anturios: ${salonMapsUrl}`);
    setCopiedSalon(true);
    setTimeout(() => setCopiedSalon(false), 2500);
  };

  const handleCopyChurch = () => {
    navigator.clipboard.writeText(`Parroquia de San José El Sagrario (Portal Reforma 104, Col. Centro, Toluca): ${churchMapsUrl}`);
    setCopiedIglesia(true);
    setTimeout(() => setCopiedIglesia(false), 2500);
  };

  const itinerary = [
    {
      time: "12:00 hrs",
      title: "Misa de Acción de Gracias",
      desc: "Parroquia de San José · El Sagrario · Portal Reforma 104, Col. Centro, C.P. 50000, Toluca, México.",
      icon: Church,
      mapLink: churchMapsUrl,
      mapLabel: "Abrir mapa de la Parroquia",
      onViewMapTab: () => setActiveMap('iglesia'),
    },
    {
      time: "15:00 hrs",
      title: "Recepción & Cóctel de Bienvenida",
      desc: "Llegada al jardín, bebidas refrescantes y convivencia con amigos y familia.",
      icon: Wine,
      mapLink: salonMapsUrl,
      mapLabel: "Abrir mapa del Salón",
      onViewMapTab: () => setActiveMap('salon'),
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
            className="clay-pill px-5 py-2 inline-flex items-center gap-2 mb-3 text-pink-900 font-semibold text-xs tracking-widest uppercase"
          >
            <MapPin className="w-4 h-4 text-pink-600" />
            <span>Lugares & Horarios</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-pink-950 mb-3"
          >
            Misa & Recepción del Evento
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 max-w-xl mx-auto text-base sm:text-lg font-medium"
          >
            Dos lugares muy especiales preparados con mucho cariño para compartir este día inolvidable.
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
              src={`${import.meta.env.BASE_URL}images/salon.jpeg`}
              alt="Salón y Jardín Anturios"
              className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
              <span className="text-pink-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-1">
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

          {/* Location Action Bar: Salón & Acceso Directo a la Parroquia */}
          <div className="p-6 sm:p-8 bg-[#FFF5F8]/90 flex flex-col gap-4 border-t border-pink-200/50">
            {/* Salón Info and Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-800 shrink-0 shadow-inner">
                  <Wine className="w-6 h-6 text-pink-700" />
                </div>
                <div>
                  <div className="font-bold text-pink-950 text-base sm:text-lg">Salón y Jardín Anturios</div>
                  <div className="text-xs sm:text-sm text-stone-600">Recepción & Fiesta · Sábado 5 de Diciembre · 15:00 hrs</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={salonMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-btn clay-btn-gold text-xs sm:text-sm py-2.5 px-5 flex-1 sm:flex-initial"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Google Maps Salón</span>
                </a>

                <a
                  href={`https://waze.com/ul?q=${encodeURIComponent("Salón y Jardín Anturios")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-btn clay-btn-white text-xs sm:text-sm py-2.5 px-4"
                  title="Abrir en Waze"
                >
                  <ExternalLink className="w-4 h-4 text-pink-700" />
                  <span>Waze</span>
                </a>

                <button
                  onClick={handleCopySalon}
                  className="clay-btn clay-btn-white text-xs sm:text-sm py-2.5 px-4"
                  title="Copiar enlace del salón"
                >
                  {copiedSalon ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-pink-700" />}
                  <span>{copiedSalon ? '¡Copiado!' : 'Copiar'}</span>
                </button>
              </div>
            </div>

            {/* Quick access strip for the Church */}
            <div className="pt-4 border-t border-pink-200/50 flex flex-wrap items-center justify-between gap-3 bg-white/70 p-3.5 rounded-2xl">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-pink-100 flex items-center justify-center text-pink-700 shrink-0">
                  <Church className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-pink-950 block">Misa de Acción de Gracias (12:00 hrs)</span>
                  <span className="text-[11px] text-stone-500">Parroquia de San José · El Sagrario, Portal Reforma 104, Toluca Centro</span>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={churchMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-btn clay-btn-white text-xs py-2 px-4 flex-1 sm:flex-initial text-pink-800 font-bold border-pink-300"
                >
                  <Navigation className="w-3.5 h-3.5 text-pink-600" />
                  <span>Google Maps Iglesia ⛪</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two Columns: Itinerary + Interactive Map Embed */}
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
              <Clock className="w-5 h-5 text-pink-700" />
              <h3 className="font-serif-luxury text-2xl font-bold text-pink-950">
                Itinerario de la Celebración
              </h3>
            </div>

            <div className="space-y-6 relative before:absolute before:top-3 before:bottom-3 before:left-5 before:w-0.5 before:bg-pink-200">
              {itinerary.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="relative flex items-start gap-4 pl-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 text-pink-800 flex items-center justify-center shrink-0 z-10 shadow-md border-2 border-white">
                      <IconComponent className="w-4 h-4 text-pink-800" />
                    </div>
                    <div className="flex-1 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-pink-100/80 shadow-sm">
                      <div className="inline-block px-2.5 py-0.5 rounded-full bg-pink-100/80 text-pink-900 font-bold text-xs mb-1">
                        {item.time}
                      </div>
                      <h4 className="font-bold text-pink-950 text-base mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-600 mb-2">
                        {item.desc}
                      </p>

                      {/* Direct Map Shortcut inside itinerary card */}
                      {item.mapLink && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          <a
                            href={item.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-pink-50 text-pink-800 border border-pink-200 hover:bg-pink-100 hover:border-pink-300 transition-all shadow-xs"
                          >
                            <Navigation className="w-3.5 h-3.5 text-pink-600" />
                            <span>{item.mapLabel}</span>
                          </a>

                          {item.onViewMapTab && (
                            <button
                              type="button"
                              onClick={() => {
                                item.onViewMapTab?.();
                                const el = document.getElementById('mapa-interactivo');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                              }}
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[11px] font-semibold text-stone-500 hover:text-pink-800 transition-colors"
                            >
                              <span>Ver en recuadro ↓</span>
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Interactive Map Embed with Location Switcher */}
          <motion.div
            id="mapa-interactivo"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 clay-card p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-pink-700" />
                  <h3 className="font-serif-luxury text-2xl font-bold text-pink-950">
                    Ubicación en el Mapa
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 mb-4">
                Selecciona la ubicación que deseas consultar en el mapa o abrir en tu aplicación de navegación favorita:
              </p>

              {/* Selector Tabs: Salón vs Parroquia */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setActiveMap('salon')}
                  className={`py-2.5 px-3 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                    activeMap === 'salon'
                      ? 'clay-btn-gold text-white shadow-md'
                      : 'clay-card-inset text-pink-950 hover:bg-pink-100/60'
                  }`}
                >
                  <Wine className="w-4 h-4 shrink-0" />
                  <span className="truncate">1. Salón y Jardín</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveMap('iglesia')}
                  className={`py-2.5 px-3 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                    activeMap === 'iglesia'
                      ? 'clay-btn-gold text-white shadow-md'
                      : 'clay-card-inset text-pink-950 hover:bg-pink-100/60'
                  }`}
                >
                  <Church className="w-4 h-4 shrink-0" />
                  <span className="truncate">2. Parroquia (Misa)</span>
                </button>
              </div>

              {/* Info badge for active location */}
              <div className="bg-pink-50/90 border border-pink-200/80 rounded-2xl p-3.5 mb-4 text-xs">
                {activeMap === 'salon' ? (
                  <div>
                    <div className="font-bold text-pink-950 text-sm flex items-center gap-1.5 mb-0.5">
                      <Wine className="w-4 h-4 text-pink-700" />
                      <span>Salón y Jardín Anturios · 15:00 hrs</span>
                    </div>
                    <p className="text-stone-600">Recepción, comida, brindis y fiesta de celebración.</p>
                  </div>
                ) : (
                  <div>
                    <div className="font-bold text-pink-950 text-sm flex items-center gap-1.5 mb-0.5">
                      <Church className="w-4 h-4 text-pink-700" />
                      <span>Parroquia de San José El Sagrario · 12:00 hrs</span>
                    </div>
                    <p className="text-stone-600">Portal Reforma 104, Col. Centro, C.P. 50000, Toluca, México.</p>
                  </div>
                )}
              </div>

              {/* Map Iframe Container */}
              <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden shadow-inner border border-pink-200/80 relative mb-4 bg-stone-100">
                {activeMap === 'salon' ? (
                  <iframe
                    key="map-salon"
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
                ) : (
                  <iframe
                    key="map-iglesia"
                    title="Mapa Parroquia de San José El Sagrario Toluca"
                    src="https://maps.google.com/maps?q=Parroquia%20de%20San%20Jos%C3%A9%20el%20Sagrario%20Portal%20Reforma%20104%20Toluca&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                )}
              </div>
            </div>

            {/* Action Bar for active map */}
            <div className="bg-pink-50/80 p-4 rounded-2xl border border-pink-200/60 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-pink-950 font-medium">
                {activeMap === 'salon'
                  ? '¿Vienes al salón? Abre el GPS para seguir la ruta.'
                  : '¿Vas a la misa? Abre las indicaciones de la iglesia.'}
              </span>

              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={activeMap === 'salon' ? salonMapsUrl : churchMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-btn clay-btn-gold text-xs py-2 px-4 shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Abrir Google Maps</span>
                </a>

                <a
                  href={`https://waze.com/ul?q=${encodeURIComponent(
                    activeMap === 'salon'
                      ? 'Salón y Jardín Anturios'
                      : 'Parroquia de San José El Sagrario Toluca'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-btn clay-btn-white text-xs py-2 px-3 shrink-0"
                  title="Abrir en Waze"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-pink-700" />
                  <span>Waze</span>
                </a>

                <button
                  type="button"
                  onClick={activeMap === 'salon' ? handleCopySalon : handleCopyChurch}
                  className="clay-btn clay-btn-white text-xs py-2 px-3 shrink-0"
                  title="Copiar enlace"
                >
                  {(activeMap === 'salon' ? copiedSalon : copiedIglesia) ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-pink-700" />
                  )}
                  <span>{(activeMap === 'salon' ? copiedSalon : copiedIglesia) ? '¡Copiado!' : 'Copiar'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Heartfelt Note on Reception */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 clay-card-rose p-6 sm:p-8 text-center max-w-3xl mx-auto"
        >
          <PartyPopper className="w-8 h-8 text-pink-700 mx-auto mb-2" />
          <h4 className="font-serif-luxury text-xl sm:text-2xl font-bold text-pink-950 mb-2">
            ¡Con toda la actitud de divertirse!
          </h4>
          <p className="text-pink-900/90 text-sm sm:text-base leading-relaxed">
            Muchas gracias por su cariño y atención. Esperamos contar con su invaluable presencia para cantar, brindar, reír y llenar este día de momentos mágicos junto a Lety.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
