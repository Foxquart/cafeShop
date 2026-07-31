import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DISHES, Dish } from '../data/restaurantData';
import { Sparkles, Eye, Award, Flame } from 'lucide-react';

interface SignatureDishesProps {
  onSelectDish: (dish: Dish) => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ onSelectDish }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Signatures' },
    { id: 'nordic-fire', label: 'Nordic Fire' },
    { id: 'japanese-precision', label: 'Japanese Precision' },
    { id: 'ferment-forage', label: 'Ferment & Forage' },
  ];

  const filteredDishes = activeCategory === 'all'
    ? DISHES
    : DISHES.filter(dish => dish.category === activeCategory);

  return (
    <section id="dishes" className="py-20 sm:py-32 bg-[#161819] text-[#F6F2EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-white/10 pb-8 sm:pb-12">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.35em] text-[#7C8A58] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CHAPTER II · CULINARY ARTISTRY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F6F2EA] font-light">
              Signature <span className="italic font-normal text-[#7C8A58]">Creation Grid</span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#7C8A58] text-[#0E0F0F] shadow-lg shadow-[#7C8A58]/20'
                    : 'bg-[#202224] text-[#B9B6AF] hover:text-[#F6F2EA] hover:bg-[#202224]/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dishes Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredDishes.map((dish) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={dish.id}
                onClick={() => onSelectDish(dish)}
                className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-[#7C8A58]/50 transition-all duration-500 group cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden img-reveal-container">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161819] via-transparent to-transparent opacity-80" />

                  {/* Japanese Name Badge */}
                  {dish.japaneseName && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#0E0F0F]/80 backdrop-blur-md text-[#A7B08A] text-xs font-serif rounded-md border border-white/10">
                      {dish.japaneseName}
                    </div>
                  )}

                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#7C8A58] text-[#0E0F0F] text-xs font-mono font-medium rounded-full">
                    {dish.price}
                  </div>

                  {/* Hover Inspect Prompt */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#0E0F0F]/60 backdrop-blur-sm">
                    <span className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#7C8A58] text-[#0E0F0F] text-xs uppercase tracking-widest rounded-full font-medium shadow-xl">
                      <Eye className="w-4 h-4" />
                      <span>View Story &amp; Pairing</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-[#7C8A58]">
                      {dish.origin}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#F6F2EA] group-hover:text-[#7C8A58] transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-[#B9B6AF] font-light line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  {/* Tasting Note Badges */}
                  <div className="space-y-3 pt-3 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5">
                      {dish.tastingNotes.map((note, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 bg-[#202224] text-[10px] text-[#A7B08A] rounded-full border border-white/5"
                        >
                          {note}
                        </span>
                      ))}
                    </div>

                    {/* Wine Pairing Hint */}
                    <div className="text-[11px] text-[#B9B6AF] italic flex items-center space-x-1.5">
                      <span className="text-[#7C8A58]">Pairing:</span>
                      <span className="truncate">{dish.pairing}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
