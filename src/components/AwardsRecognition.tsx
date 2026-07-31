import React from 'react';
import { motion } from 'framer-motion';
import { AWARDS } from '../data/restaurantData';
import { Award, Sparkles, ShieldCheck, Trophy, Wine } from 'lucide-react';

export const AwardsRecognition: React.FC = () => {
  return (
    <section className="py-24 bg-[#161819] text-[#F6F2EA] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-12">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.35em] text-[#7C8A58] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CHAPTER VIII · HONORS &amp; MILESTONES</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#F6F2EA] font-light">
              Awards &amp; <span className="italic text-[#7C8A58]">Recognition</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-serif text-xl text-[#A7B08A]">
            Consistent Excellence Since 2021
          </div>
        </div>

        {/* Awards Horizontal/Vertical Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AWARDS.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#7C8A58]/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl text-[#7C8A58] font-bold">{award.year}</span>
                  <Trophy className="w-5 h-5 text-[#7C8A58]" />
                </div>
                <h3 className="font-serif text-xl text-[#F6F2EA]">
                  {award.title}
                </h3>
                <p className="text-xs text-[#B9B6AF] font-light leading-relaxed">
                  {award.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 text-[10px] uppercase tracking-widest text-[#A7B08A]">
                {award.organization}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
