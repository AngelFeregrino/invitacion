import { useState } from 'react';
import { EnvelopeIntro } from './components/EnvelopeIntro';
import { HeroSection } from './components/HeroSection';
import { CountdownSection } from './components/CountdownSection';
import { HeartfeltMessage } from './components/HeartfeltMessage';
import { ReceptionSection } from './components/ReceptionSection';
import { DressCodeSection } from './components/DressCodeSection';
import { GiftsSection } from './components/GiftsSection';
import { RsvpSection } from './components/RsvpSection';
import { GallerySection } from './components/GallerySection';
import { FinalMessageSection } from './components/FinalMessageSection';
import { FloatingMusicPlayer } from './components/FloatingMusicPlayer';
import { FloatingParticles } from './components/FloatingParticles';

export function App() {
  const [musicStarted, setMusicStarted] = useState(false);

  const handleEnvelopeOpen = () => {
    setMusicStarted(true);
  };

  const scrollToRsvp = () => {
    const el = document.getElementById('confirmacion');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToReception = () => {
    const el = document.getElementById('recepcion');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-stone-800 selection:bg-amber-200 selection:text-amber-950">
      {/* Background Floating Gold Sparkles Canvas */}
      <FloatingParticles />

      {/* Interactive Envelope Wax Seal Intro on First Load */}
      <EnvelopeIntro onOpen={handleEnvelopeOpen} />

      {/* Floating Audio Player Control */}
      <FloatingMusicPlayer autoPlayStarted={musicStarted} />

      {/* Main Invitation Web Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection
          onScrollToRsvp={scrollToRsvp}
          onScrollToReception={scrollToReception}
        />

        {/* Live Countdown to Dec 5, 2026 */}
        <CountdownSection />

        {/* Heartfelt Letter & Portrait from Lety */}
        <HeartfeltMessage />

        {/* Venue & Itinerary: Salón y Jardín Anturios */}
        <ReceptionSection />

        {/* Dress Code Guidelines */}
        <DressCodeSection />

        {/* Gallery & Moments */}
        <GallerySection />

        {/* Gifts & Envelopes */}
        <GiftsSection />

        {/* Interactive RSVP Form & WhatsApp Connector */}
        <RsvpSection />

        {/* Emotional Farewell & Sharing */}
        <FinalMessageSection onScrollToRsvp={scrollToRsvp} />
      </main>
    </div>
  );
}

export default App;
