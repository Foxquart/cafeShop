import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BEVERAGES, Beverage } from '../data/restaurantData';
import { Sparkles, Wine, GlassWater, ChevronRight, ChevronLeft } from 'lucide-react';

export const WineCocktails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'wine' | 'sake' | 'cocktail'>('all');

  const filteredBeverages = activeTab === 'all'
    ? BEVERAGES
    : BEVERAGES.filter(b => b.type === activeTab);

  return (
    <section id="beverages" className="py-32 bg-[#0E0F0F] text-[#F6F2EA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-12">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.35em] text-[#7C8A58] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CHAPTER V · THE SOMMELIER RESERVE</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#F6F2EA] font-light">
              Wine &amp; <span className="italic font-normal text-[#7C8A58]">Smoked Elixirs</span>
            </h2>
          </div>

          {/* Beverage Filters */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Cellar' },
              { id: 'wine', label: 'Vintage Wines' },
              { id: 'sake', label: 'Kyoto Saké' },
              { id: 'cocktail', label: 'Hearth Cocktails' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#7C8A58] text-[#0E0F0F]'
                    : 'bg-[#202224] text-[#B9B6AF] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Beverage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredBeverages.map((bev, index) => (
            <motion.div
              key={bev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-[#7C8A58]/50 transition-all duration-500 group flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative h-60 w-full overflow-hidden img-reveal-container">
                <img
                  src={bev.image}
                  alt={bev.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161819] via-transparent to-transparent opacity-80" />

                <div className="absolute top-4 right-4 px-3 py-1 bg-[#7C8A58] text-[#0E0F0F] text-xs font-mono font-medium rounded-full">
                  {bev.price}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#7C8A58]">
                    {bev.vintageOrOrigin}
                  </span>
                  <h3 className="font-serif text-xl text-[#F6F2EA] group-hover:text-[#7C8A58] transition-colors">
                    {bev.name}
                  </h3>
                  <p className="text-xs text-[#B9B6AF] font-light leading-relaxed">
                    {bev.notes}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-1">
                  <div className="text-[10px] uppercase tracking-wider text-[#A7B08A]">
                    Profile Notes:
                  </div>
                  <div className="text-xs text-[#F6F2EA] italic">
                    {bev.tastingProfile}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtitle Footer Note */}
        <div className="mt-16 p-8 glass-panel rounded-2xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="font-serif text-xl text-[#F6F2EA]">Subterranean Natural Wine Vault</div>
            <div className="text-xs text-[#B9B6AF]">Our sommelier team maintains over 1,400 rare, organic, and biodynamic vintages across Europe and Japan.</div>
          </div>
          <a
            href="#story"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#7C8A58] hover:text-white transition-colors"
          >
            <span>Inquire Private Cellar Tour</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
