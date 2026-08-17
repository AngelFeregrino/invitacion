export interface RsvpData {
  id: string;
  fullName: string;
  attending: boolean;
  guestsCount: number;
  guestNames: string;
  phone: string;
  message: string;
  songSuggestion: string;
  timestamp: string;
}

export interface EventDetails {
  honoree: string;
  age: number;
  date: string;
  dateISO: string;
  venueName: string;
  venueAddress: string;
  mapsUrl: string;
  wazeUrl: string;
  whatsappHostNumber: string; // e.g. "5215512345678"
}
