import React from 'react';
import { motion } from 'framer-motion';
import { PRESS_REVIEWS } from '../data/restaurantData';
import { Sparkles, Quote, Star } from 'lucide-react';

export const TestimonialsPress: React.FC = () => {
  return (
    <section id="press" className="py-32 bg-[#0E0F0F] text-[#F6F2EA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.35em] text-[#7C8A58]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CHAPTER VII · CRITICAL ACCLAIM</span>
          </div>
          <h2 className="font-serif text-5xl sm:text-6xl font-light text-[#F6F2EA]">
            International <span className="italic text-[#7C8A58]">Press &amp; Praise</span>
          </h2>
          <p className="text-sm text-[#B9B6AF] font-light">
            Reflections from the world's most discerning gastronomy critics and publications.
          </p>
        </div>

        {/* 2x2 Editorial Press Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRESS_REVIEWS.map((press, index) => (
            <motion.div
              key={press.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-[#7C8A58]/50 transition-all duration-500 flex flex-col justify-between space-y-8 relative group"
            >
              <div className="space-y-6">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm tracking-widest text-[#7C8A58] font-bold">
                    {press.logo}
                  </span>
                  <span className="px-3 py-1 bg-[#202224] text-[11px] text-[#A7B08A] rounded-full border border-white/5 font-serif">
                    {press.rating}
                  </span>
                </div>

                {/* Quote */}
                <Quote className="w-8 h-8 text-[#7C8A58]/30" />
                <p className="font-serif text-2xl sm:text-3xl text-[#F6F2EA] font-light leading-relaxed">
                  "{press.quote}"
                </p>
              </div>

              {/* Footer Row */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#B9B6AF]">
                <div>
                  <span className="text-[#F6F2EA] font-medium block">{press.critic}</span>
                  <span className="text-[10px] uppercase tracking-wider">{press.source}</span>
                </div>
                <span className="font-mono text-[#7C8A58]">{press.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
