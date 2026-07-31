import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Trees, ShieldCheck, Sparkles, Feather } from 'lucide-react';

export const StoryPhilosophy: React.FC = () => {
  const stats = [
    { label: 'Michelin Stars', value: '★★★', sub: 'Awarded 2026' },
    { label: 'Intimate Seating', value: '14', sub: 'Tables Per Service' },
    { label: 'Wild Foraged', value: '100%', sub: 'Local & Organic' },
    { label: 'Sommelier Cellar', value: '1,400+', sub: 'Rare Vintages' }
  ];

  const pillars = [
    {
      icon: Flame,
      number: '01',
      title: 'Primal Fire & Oak Embers',
      description: 'We do not cook over gas or electricity. Every dish touches natural heat generated from sustainably harvested Danish white oak and Japanese Binchotan charcoal.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop'
    },
    {
      icon: Trees,
      number: '02',
      title: 'Nordic Foraging Ethics',
      description: 'Our team spends dawn hours foraging wild juniper, spruce tips, Arctic berries, and pine needle ash along the coastal woodlands of Zealand.',
      image: 'https://images.unsplash.com/photo-1511497584788-876761c119ef?q=80&w=800&auto=format&fit=crop'
    },
    {
      icon: Feather,
      number: '03',
      title: 'Japanese Shokunin Restraint',
      description: 'Influenced by Kyoto Kaiseki traditions, we strip away culinary ornament to let single pristine ingredients reveal their deepest umami resonance.',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section id="story" className="relative py-20 sm:py-32 bg-[#0E0F0F] text-[#F6F2EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.35em] text-[#7C8A58] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CHAPTER I · OUR PHILOSOPHY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F6F2EA] font-light leading-tight">
              The Harmony of <br />
              <span className="italic font-normal text-[#7C8A58]">Fire and Forest</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-xs sm:text-sm text-[#B9B6AF] font-light leading-relaxed">
            Ember &amp; Oak was born from a shared reverence between Copenhagen's coastal wilderness and Kyoto's timeless culinary mindfulness.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 sm:pt-16 items-center">
          {/* Left Magazine Imagery Stack */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 img-reveal-container">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
                alt="Chef plating dish at hearth"
                className="w-full h-80 sm:h-[420px] lg:h-[500px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 glass-panel rounded-xl border border-white/10">
                <p className="font-serif text-sm sm:text-lg italic text-[#F6F2EA]">
                  "When wood smoke meets ocean sea urchin, time halts. That brief stillness is where luxury lives."
                </p>
                <div className="mt-2 sm:mt-3 text-[10px] sm:text-xs uppercase tracking-widest text-[#7C8A58]">
                  — Chef Astrid Lindholm
                </div>
              </div>
            </div>

            {/* Overlapping Secondary Image */}
            <div className="hidden md:block absolute -bottom-6 -right-6 z-20 w-48 h-48 lg:w-60 lg:h-60 rounded-2xl overflow-hidden border-4 border-[#0E0F0F] shadow-2xl img-reveal-container">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"
                alt="Pine needle smoked quail egg"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Narrative Copy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-6 lg:pl-6 mt-4 lg:mt-0"
          >
            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F6F2EA] font-light">
                Crafted in Solitude. Served with Intimacy.
              </h3>
              <p className="text-xs sm:text-base text-[#B9B6AF] font-light leading-relaxed">
                In our kitchen, time is measured not by clocks, but by the quiet burn of white oak logs and the aging of fermented plum reductions. Every menu is sculpted around what the morning harvest provides.
              </p>
              <p className="text-xs sm:text-base text-[#B9B6AF] font-light leading-relaxed">
                We accommodate only 14 tables each evening to ensure every guest receives absolute focus, warmth, and culinary choreography.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-white/10">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-serif text-2xl sm:text-3xl font-light text-[#7C8A58]">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#F6F2EA] font-medium">{stat.label}</div>
                  <div className="text-[9px] sm:text-[10px] text-[#B9B6AF]">{stat.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 3 Philosophy Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-16 sm:pt-24">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-[#7C8A58]/40 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#7C8A58] tracking-widest">{pillar.number}</span>
                    <IconComponent className="w-5 h-5 text-[#7C8A58] group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#F6F2EA] group-hover:text-[#7C8A58] transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#B9B6AF] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-[10px] uppercase tracking-[0.25em] text-[#7C8A58] flex items-center space-x-2">
                  <span>Japandi Heritage</span>
                  <span className="w-4 h-[1px] bg-[#7C8A58]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
