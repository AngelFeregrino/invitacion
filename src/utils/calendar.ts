// Calendar invitation helper: Google Calendar & Apple/Outlook iCal (.ics)

export const createGoogleCalendarUrl = () => {
  const title = encodeURIComponent("🎉 Mis 60 Años - Celebración de Lety Feregrino");
  const details = encodeURIComponent(
    "¡Acompáñame a celebrar 60 años de vida, bendiciones y alegría! Su presencia será el mejor regalo. Salón y Jardín Anturios."
  );
  const location = encodeURIComponent("Salón y Jardín Anturios, México");
  // 2026-12-05 15:00:00 to 2026-12-06 02:00:00
  const dates = "20261205T210000Z/20261206T080000Z";
  
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
};

export const downloadIcsFile = () => {
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Lety Feregrino//Invitacion 60 Anos//ES
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:🎉 Mis 60 Años - Celebración de Lety Feregrino
DESCRIPTION:¡Acompáñame a celebrar 60 años de vida, bendiciones y alegría! Su presencia será el mejor regalo.
LOCATION:Salón y Jardín Anturios
DTSTART:20261205T150000
DTEND:20261206T020000
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-PT24H
ACTION:DISPLAY
DESCRIPTION:Recordatorio: ¡Mañana es el cumpleaños de Lety Feregrino!
END:VALARM
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Mis_60_Anos_Lety_Feregrino.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
