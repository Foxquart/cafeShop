import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#161819] text-[#F6F2EA] border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        {/* Top Newsletter & Brand Banner */}
        <div className="glass-panel p-10 sm:p-14 rounded-3xl border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#7C8A58]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE EMBER JOURNAL</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F6F2EA] font-light">
              Receive Private <span className="italic text-[#7C8A58]">Cellar Allocations</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#B9B6AF] font-light leading-relaxed">
              Subscribe to receive seasonal menu releases, secret sommelier allocations, and private chef invitations.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-4 bg-[#7C8A58]/20 border border-[#7C8A58]/40 rounded-2xl text-xs text-[#A7B08A] flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-[#7C8A58]" />
                <span>Thank you. You are now inscribed in The Ember Journal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  required
                  type="email"
                  placeholder="Enter your personal email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-5 py-4 bg-[#202224] border border-white/10 rounded-full text-xs text-[#F6F2EA] focus:border-[#7C8A58] focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#7C8A58] text-[#0E0F0F] text-xs uppercase tracking-widest font-medium rounded-full hover:bg-[#F6F2EA] transition-all flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4-Column Footer Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-8">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <span className="font-serif text-3xl font-light tracking-widest block text-[#F6F2EA]">
              EMBER <span className="text-[#7C8A58] italic">&amp;</span> OAK
            </span>
            <p className="text-xs text-[#B9B6AF] font-light leading-relaxed">
              Three Michelin Star fine dining experience fusing Scandinavian fire with Japanese mindfulness.
            </p>
            <div className="pt-2 text-xs font-mono text-[#7C8A58]">
              ★★★ Michelin Guide 2026
            </div>
          </div>

          {/* Col 2: Locations */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#7C8A58]">Sanctuary Locations</h4>
            <div className="space-y-4 text-xs text-[#B9B6AF] font-light">
              <div>
                <span className="text-[#F6F2EA] font-medium block">Copenhagen Sanctuary</span>
                <span>Kronprinsensgade 14, 1114 København, Denmark</span>
              </div>
              <div>
                <span className="text-[#F6F2EA] font-medium block">Tokyo Pavilion</span>
                <span>6-Chome Ginza, Chuo-ku, Tokyo 104-0061, Japan</span>
              </div>
            </div>
          </div>

          {/* Col 3: Hours & Policy */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#7C8A58]">Hours &amp; Dress Code</h4>
            <div className="space-y-2 text-xs text-[#B9B6AF] font-light">
              <div className="flex items-center space-x-2">
                <Clock className="w-3.5 h-3.5 text-[#7C8A58]" />
                <span>Wednesday – Sunday: 6:00 PM – 11:30 PM</span>
              </div>
              <div>
                <span className="text-[#F6F2EA] block">Dress Code Policy:</span>
                <span>Smart Elegant. We kindly request no sportswear or open shoes.</span>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Contact & Booking */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#7C8A58]">Private Inquiries</h4>
            <div className="space-y-2 text-xs text-[#B9B6AF]">
              <div>Concierge: +45 33 12 88 90</div>
              <div>Press &amp; Events: concierge@emberandoak.com</div>
            </div>
            <button
              onClick={onOpenReservation}
              className="w-full py-3 bg-[#202224] hover:bg-[#7C8A58] text-[#F6F2EA] hover:text-[#0E0F0F] text-xs uppercase tracking-widest font-medium rounded-full transition-all border border-white/10"
            >
              Reserve Table Online
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Attribution */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#B9B6AF] space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
            <span>© {new Date().getFullYear()} Ember &amp; Oak Hospitality Group. All rights reserved.</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="flex items-center space-x-1 text-[#A7B08A]">
              <span>Designed &amp; Developed with</span>
              <Heart className="w-3 h-3 text-[#7C8A58] fill-current animate-pulse" />
              <span>by{' '}
                <a
                  href="https://foxquart.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F6F2EA] font-semibold hover:text-[#7C8A58] underline decoration-[#7C8A58]/50 underline-offset-4 transition-colors"
                >
                  Foxquart Tech
                </a>
              </span>
            </span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Gastronomy</a>
            <a href="#" className="hover:text-white transition-colors">Press Kit</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
