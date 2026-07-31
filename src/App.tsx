import React, { useState, useEffect, useRef } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StoryPhilosophy } from './components/StoryPhilosophy';
import { SignatureDishes } from './components/SignatureDishes';
import { MeetChef } from './components/MeetChef';
import { TastingMenu } from './components/TastingMenu';
import { WineCocktails } from './components/WineCocktails';
import { AtmosphereGallery } from './components/AtmosphereGallery';
import { TestimonialsPress } from './components/TestimonialsPress';
import { AwardsRecognition } from './components/AwardsRecognition';
import { InstagramFeed } from './components/InstagramFeed';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { DishDetailModal } from './components/DishDetailModal';
import { Dish } from './data/restaurantData';

export function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Web Audio API Ambient Fire Ember Generator
  const audioCtxRef = useRef<AudioContext | null>(null);
  const noiseNodeRef = useRef<AudioBufferSourceNode | null>(null);

  const toggleAudio = () => {
    if (isAudioPlaying) {
      if (audioCtxRef.current) {
        audioCtxRef.current.suspend();
      }
      setIsAudioPlaying(false);
    } else {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        // Generate smooth pink/red noise for warm fireplace hum
        const bufferSize = ctx.sampleRate * 2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          data[i] = (lastOut + 0.02 * white) / 1.02;
          lastOut = data[i];
          data[i] *= 0.15; // Soft volume
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(400, ctx.currentTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.08, ctx.currentTime);

        noise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        noise.start();
        noiseNodeRef.current = noise;
      } else {
        audioCtxRef.current.resume();
      }
      setIsAudioPlaying(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0E0F0F] text-[#F6F2EA] bg-grain font-sans selection:bg-[#7C8A58] selection:text-[#0E0F0F]">
      {/* Three.js Background Particle Canvas */}
      <BackgroundCanvas />

      {/* Navigation */}
      <Navbar
        onOpenReservation={() => setIsReservationOpen(true)}
        isAudioPlaying={isAudioPlaying}
        toggleAudio={toggleAudio}
      />

      {/* 12 Sections */}
      <main className="relative z-10 space-y-0">
        <Hero onOpenReservation={() => setIsReservationOpen(true)} />
        <div className="gold-separator" />
        
        <StoryPhilosophy />
        <div className="gold-separator" />
        
        <SignatureDishes onSelectDish={(dish) => setSelectedDish(dish)} />
        <div className="gold-separator" />
        
        <MeetChef />
        <div className="gold-separator" />
        
        <TastingMenu onOpenReservation={() => setIsReservationOpen(true)} />
        <div className="gold-separator" />
        
        <WineCocktails />
        <div className="gold-separator" />
        
        <AtmosphereGallery />
        <div className="gold-separator" />
        
        <TestimonialsPress />
        <div className="gold-separator" />
        
        <AwardsRecognition />
        <div className="gold-separator" />
        
        <InstagramFeed />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Dish Detail Modal */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />
    </div>
  );
}

export default App;
