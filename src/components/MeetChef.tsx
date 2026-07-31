import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CHEFS } from '../data/restaurantData';
import { Sparkles, Quote, Award } from 'lucide-react';

export const MeetChef: React.FC = () => {
  const [activeChefIndex, setActiveChefIndex] = useState<number>(0);
  const currentChef = CHEFS[activeChefIndex];

  return (
    <section id="chefs" className="py-32 bg-[#0E0F0F] text-[#F6F2EA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-12">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.35em] text-[#7C8A58] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CHAPTER III · CULINARY MASTERS</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#F6F2EA] font-light">
              Architects of <span className="italic font-normal text-[#7C8A58]">Ember &amp; Oak</span>
            </h2>
          </div>

          {/* Chef Switcher Buttons */}
          <div className="mt-6 md:mt-0 flex space-x-4">
            {CHEFS.map((chef, idx) => (
              <button
                key={chef.name}
                onClick={() => setActiveChefIndex(idx)}
                className={`px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeChefIndex === idx
                    ? 'bg-[#7C8A58] text-[#0E0F0F] font-medium'
                    : 'bg-[#202224] text-[#B9B6AF] hover:text-[#F6F2EA]'
                }`}
              >
                {chef.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Chef Spotlight Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Chef Image Stack */}
          <motion.div
            key={currentChef.name}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 img-reveal-container">
              <img
                src={currentChef.image}
                alt={currentChef.name}
                className="w-full h-[580px] object-cover filter brightness-90 contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F0F] via-transparent to-transparent opacity-70" />

              <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-xl border border-white/10">
                <div className="text-xs uppercase tracking-widest text-[#7C8A58]">
                  {currentChef.origin}
                </div>
                <div className="font-serif text-xl text-[#F6F2EA]">
                  {currentChef.name}
                </div>
                <div className="text-xs text-[#B9B6AF]">
                  {currentChef.title}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chef Bio & Quote */}
          <motion.div
            key={`bio-${currentChef.name}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8 lg:pl-8"
          >
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-[#7C8A58]">
                {currentChef.title}
              </span>
              <h3 className="font-serif text-4xl sm:text-5xl text-[#F6F2EA] font-light">
                {currentChef.name}
              </h3>
              <p className="text-sm text-[#A7B08A] font-mono">
                {currentChef.origin}
              </p>
            </div>

            {/* Quote Block */}
            <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-[#7C8A58] border-white/5 space-y-4 relative">
              <Quote className="w-8 h-8 text-[#7C8A58]/30 absolute top-4 right-4" />
              <p className="font-serif text-2xl italic text-[#F6F2EA] leading-relaxed">
                "{currentChef.quote}"
              </p>
            </div>

            {/* Chef Background Details */}
            <div className="space-y-4 text-sm text-[#B9B6AF] font-light leading-relaxed">
              <p>{currentChef.background}</p>
              <p>
                Under their joint leadership, Ember &amp; Oak has redefined modern luxury dining by honoring raw wood fire cooking and Japanese seasonal mindfulness without unnecessary embellishment.
              </p>
            </div>

            {/* Accolade Badges */}
            <div className="pt-4 border-t border-white/10 flex items-center space-x-8 text-xs text-[#A7B08A]">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-[#7C8A58]" />
                <span>Michelin Chef Award</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-[#7C8A58]" />
                <span>20+ Years Excellence</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
