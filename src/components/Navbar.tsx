import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
  isAudioPlaying: boolean;
  toggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReservation,
  isAudioPlaying,
  toggleAudio
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Curated minimalist primary nav links (spacious & uncluttered)
  const primaryLinks = [
    { name: 'Philosophy', href: '#story' },
    { name: 'Creation Grid', href: '#dishes' },
    { name: 'Tasting Menu', href: '#tasting-menu' },
    { name: 'Sanctuary', href: '#gallery' },
  ];

  // Full drawer links for complete navigation
  const drawerLinks = [
    { name: '01. Philosophy & Story', href: '#story' },
    { name: '02. Signature Dishes', href: '#dishes' },
    { name: '03. Culinary Masters', href: '#chefs' },
    { name: '04. Seasonal Tasting Menu', href: '#tasting-menu' },
    { name: '05. Wine & Smoked Elixirs', href: '#beverages' },
    { name: '06. Dining Atmosphere', href: '#gallery' },
    { name: '07. Press & Accolades', href: '#press' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-nav py-3 sm:py-4'
            : 'bg-gradient-to-b from-[#0E0F0F]/95 via-[#0E0F0F]/50 to-transparent py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Mark (Generous Spacing) */}
          <a href="#" className="group flex items-center space-x-3 mr-8 xl:mr-16 flex-shrink-0">
            <span className="font-serif text-xl sm:text-2xl font-light tracking-[0.22em] text-[#F6F2EA] group-hover:text-[#7C8A58] transition-colors duration-300">
              EMBER <span className="text-[#7C8A58] italic font-normal">&amp;</span> OAK
            </span>
          </a>

          {/* Uncluttered Desktop Nav (4 Curated Links with High Spacing) */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {primaryLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] xl:text-[11px] uppercase tracking-[0.25em] text-[#B9B6AF] hover:text-[#F6F2EA] editorial-link transition-colors duration-300 font-light whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Bar (Quiet & Balanced) */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            {/* Audio Toggle */}
            <button
              onClick={toggleAudio}
              className="p-2 sm:p-2.5 rounded-full border border-white/10 text-[#B9B6AF] hover:text-[#F6F2EA] hover:border-[#7C8A58] transition-all duration-300 relative group flex-shrink-0"
              title={isAudioPlaying ? "Mute Ambient Ember Audio" : "Play Ambient Hearth Sound"}
            >
              {isAudioPlaying ? (
                <Volume2 className="w-3.5 h-3.5 text-[#7C8A58] animate-pulse" />
              ) : (
                <VolumeX className="w-3.5 h-3.5" />
              )}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-widest bg-[#161819] text-[#B9B6AF] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 hidden sm:block">
                {isAudioPlaying ? "Sound On" : "Sound Off"}
              </span>
            </button>

            {/* Understated Outlined Reserve Button */}
            <button
              onClick={onOpenReservation}
              className="relative group overflow-hidden px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-[#7C8A58]/50 hover:border-[#7C8A58] text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light text-[#F6F2EA] hover:text-[#0E0F0F] transition-all duration-500 flex-shrink-0"
            >
              <span className="absolute inset-0 w-full h-full bg-[#7C8A58] translate-y-full group-hover:translate-y-0 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1)" />
              <span className="relative z-10 flex items-center space-x-2">
                <Calendar className="w-3 h-3 text-[#7C8A58] group-hover:text-[#0E0F0F] transition-colors" />
                <span>Reserve</span>
              </span>
            </button>

            {/* Menu Drawer Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#B9B6AF] hover:text-[#F6F2EA] transition-colors flex items-center space-x-1.5"
              aria-label="Toggle Navigation Drawer"
            >
              <Menu className="w-5 h-5" />
              <span className="text-[10px] uppercase tracking-widest hidden xl:inline font-light">Index</span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Magazine Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0E0F0F]/98 backdrop-blur-3xl flex flex-col justify-between px-8 sm:px-16 py-16 overflow-y-auto">
          <div className="flex items-center justify-between border-b border-white/10 pb-8">
            <span className="font-serif text-2xl font-light tracking-[0.2em] text-[#F6F2EA]">
              EMBER <span className="text-[#7C8A58] italic">&amp;</span> OAK
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 text-[#B9B6AF] hover:text-white rounded-full bg-[#202224] border border-white/10 transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="my-auto py-12 space-y-8">
            <div className="text-xs uppercase tracking-[0.35em] text-[#7C8A58]">
              NAVIGATION INDEX · COPENHAGEN &amp; TOKYO
            </div>

            <nav className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {drawerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl sm:text-4xl text-[#F6F2EA] hover:text-[#7C8A58] transition-colors tracking-wide font-light flex items-center space-x-3 group"
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    {link.name}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#7C8A58] text-[#0E0F0F] font-medium uppercase tracking-[0.2em] text-xs rounded-full flex items-center justify-center space-x-2 shadow-xl hover:bg-[#F6F2EA] transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Tasting Experience</span>
            </button>

            <div className="text-[11px] uppercase tracking-widest text-[#B9B6AF] font-light">
              Michelin ★★★ · 14 Tables Per Service
            </div>
          </div>
        </div>
      )}
    </>
  );
};
