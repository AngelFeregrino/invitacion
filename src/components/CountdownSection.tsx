import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CalendarPlus, Clock, Download } from 'lucide-react';
import { createGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownSection: React.FC = () => {
  // Target: Saturday, December 5, 2026, 15:00:00 (CDMX / Local)
  const targetDate = new Date('2026-12-05T15:00:00').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ];

  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="invitation-container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="clay-card p-6 sm:p-10 text-center relative overflow-hidden"
        >
          {/* Subtle gold decoration top */}
          <div className="flex items-center justify-center gap-2 text-amber-700 font-semibold text-xs uppercase tracking-widest mb-2">
            <Clock className="w-4 h-4 text-amber-600 animate-pulse" />
            <span>Falta muy poco para celebrar</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-amber-950 mb-2">
            Cuenta Regresiva
          </h2>

          <p className="text-sm sm:text-base text-stone-600 max-w-md mx-auto mb-8 font-medium">
            Cada segundo cuenta para reunirnos y festejar este gran acontecimiento.
          </p>

          {/* Claymorphism Countdown Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto mb-8">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="clay-card-inset p-4 sm:p-5 flex flex-col items-center justify-center rounded-2xl"
              >
                <div className="font-serif-luxury text-3xl sm:text-5xl font-extrabold text-amber-900 leading-none">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-700/80 mt-2">
                  {unit.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Calendar Sync Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={createGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn clay-btn-white text-xs sm:text-sm py-2.5 px-5"
            >
              <CalendarPlus className="w-4 h-4 text-amber-700" />
              <span>Guardar en Google Calendar</span>
            </a>

            <button
              onClick={downloadIcsFile}
              className="clay-btn clay-btn-white text-xs sm:text-sm py-2.5 px-5"
              title="Descargar archivo para Apple Calendar, Outlook o iCal"
            >
              <Download className="w-4 h-4 text-amber-700" />
              <span>Descargar iCal / Apple (.ics)</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
