import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Award, Compass, Flame } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-start pt-28 sm:pt-36 lg:pt-32 pb-20 overflow-hidden">
      {/* Background Hero Image with Slow Ken Burns Zoom & Layered Atmospheric Lighting */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Cinematic Photography with Shallow Depth of Field */}
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2400&auto=format&fit=crop"
          alt="Chef plating at Ember & Oak hearth"
          className="w-full h-full object-cover object-center scale-100 animate-kenburns filter brightness-[0.42] contrast-[1.12] saturate-[0.9]"
        />

        {/* Layer 1: Top Soft Dark Gradient for Nav Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0F0F]/90 via-[#0E0F0F]/30 to-transparent" />

        {/* Layer 2: Center Warm Radial Olive Glow */}
        <div className="absolute top-1/3 left-1/6 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#7C8A58]/12 rounded-full blur-3xl pointer-events-none" />

        {/* Layer 3: Bottom Deep Black Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F0F] via-[#0E0F0F]/75 to-transparent" />

        {/* Layer 4: Vignette & Subtle Film Grain Overlay */}
        <div className="absolute inset-0 vignette-overlay bg-grain pointer-events-none" />
      </div>

      {/* Main Asymmetrical Left-Aligned Editorial Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl lg:max-w-2xl lg:w-[44vw] flex flex-col space-y-6 sm:space-y-8"
        >
          {/* Top Brand Meta Tag */}
          <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#A7B08A]">
            <span className="w-6 sm:w-8 h-[1px] bg-[#7C8A58]" />
            <span>EST. 2021 · 3 MICHELIN STARS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C8A58]" />
            <span className="text-[#F6F2EA]/80">COPENHAGEN &amp; TOKYO</span>
          </div>

          {/* Marketing Luxury Headline (Separate from Brand Logo) */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-[#F6F2EA] leading-[1.02] tracking-tight">
            Where Fire Meets <br className="hidden sm:block" />
            <span className="text-[#7C8A58] italic font-normal">Precision</span>
          </h1>

          {/* Short Story Paragraph (Concise, Max 3 Lines, Muted Color) */}
          <p className="text-xs sm:text-base text-[#B9B6AF] font-light leading-relaxed tracking-wide max-w-lg">
            An intimate culinary sanctuary blending raw Scandinavian fire with Japanese modernism. Where ancient oak wood smoke elevates wild foraged coastal ingredients.
          </p>

          {/* CTA Action Row */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            {/* Primary Understated Pill CTA */}
            <button
              onClick={onOpenReservation}
              className="group relative inline-flex items-center justify-center space-x-3 px-8 sm:px-10 py-4 bg-[#7C8A58]/15 hover:bg-[#7C8A58] border border-[#7C8A58]/50 hover:border-[#7C8A58] text-[#F6F2EA] hover:text-[#0E0F0F] rounded-full font-medium text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] transition-all duration-500 shadow-lg hover:shadow-[0_0_35px_rgba(124,138,88,0.35)] w-full sm:w-auto"
            >
              <span>Reserve Your Evening</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>

            {/* Secondary Text Link CTA */}
            <a
              href="#tasting-menu"
              className="group inline-flex items-center justify-center sm:justify-start space-x-2 text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#F6F2EA] hover:text-[#7C8A58] editorial-link transition-colors py-2.5 sm:py-3"
            >
              <span>Explore Winter Menu</span>
              <ChevronRight className="w-4 h-4 text-[#7C8A58] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Refined Inline Accolade Badges */}
          <div className="pt-8 sm:pt-10 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-8 text-[11px] sm:text-xs text-[#B9B6AF] font-light">
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-[#7C8A58]" />
              <span className="text-[#F6F2EA]">★★★ Michelin Guide 2026</span>
            </div>
            <div className="flex items-center space-x-2">
              <Compass className="w-4 h-4 text-[#7C8A58]" />
              <span>No. 4 World's 50 Best</span>
            </div>
            <div className="flex items-center space-x-2 hidden sm:flex">
              <Flame className="w-4 h-4 text-[#7C8A58]" />
              <span>100% Wood-Fire &amp; Foraged</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Minimal Bottom Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center space-y-2 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#B9B6AF]">Scroll to Explore</span>
        <div className="w-4 h-7 border border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-1.5 bg-[#7C8A58] rounded-full"
          />
        </div>
      </div>
    </section>
  );
};
