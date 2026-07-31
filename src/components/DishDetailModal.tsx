import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dish } from '../data/restaurantData';
import { X, Sparkles, Wine, MapPin, Award } from 'lucide-react';

interface DishDetailModalProps {
  dish: Dish | null;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onOpenReservation,
}) => {
  if (!dish) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-[#0E0F0F]/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative max-w-4xl w-full glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-2xl my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-2.5 text-[#B9B6AF] hover:text-white rounded-full bg-[#0E0F0F]/80 backdrop-blur-md border border-white/10 hover:bg-[#7C8A58] hover:text-[#0E0F0F] transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Left Image Column */}
            <div className="md:col-span-6 relative h-80 md:h-auto min-h-[400px]">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161819] via-transparent to-transparent opacity-80" />

              {dish.japaneseName && (
                <div className="absolute bottom-6 left-6 px-4 py-1.5 bg-[#0E0F0F]/80 backdrop-blur-md text-[#7C8A58] font-serif text-lg rounded-lg border border-white/10">
                  {dish.japaneseName}
                </div>
              )}
            </div>

            {/* Right Details Column */}
            <div className="md:col-span-6 p-8 sm:p-10 space-y-6 bg-[#161819] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="uppercase tracking-[0.25em] text-[#7C8A58]">
                    {dish.category}
                  </span>
                  <span className="font-mono text-[#A7B08A]">{dish.price}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#F6F2EA] font-light">
                  {dish.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#B9B6AF] font-light leading-relaxed">
                  {dish.description}
                </p>

                {/* Origin */}
                <div className="flex items-center space-x-2 text-xs text-[#A7B08A]">
                  <MapPin className="w-4 h-4 text-[#7C8A58]" />
                  <span>Harvest Origin: {dish.origin}</span>
                </div>

                {/* Ingredients List */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="text-xs uppercase tracking-wider text-[#7C8A58]">
                    Featured Botanicals &amp; Elements:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {dish.ingredients.map((ing, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#202224] text-xs text-[#F6F2EA] rounded-full border border-white/5"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Wine Pairing */}
                <div className="p-4 bg-[#202224] rounded-xl border border-white/5 flex items-center space-x-3">
                  <Wine className="w-5 h-5 text-[#7C8A58]" />
                  <div className="text-xs">
                    <span className="text-[#7C8A58] block font-medium">Recommended Sommelier Match:</span>
                    <span className="text-[#F6F2EA] italic">{dish.pairing}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={onClose}
                  className="text-xs uppercase tracking-widest text-[#B9B6AF] hover:text-white"
                >
                  Close Story
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenReservation();
                  }}
                  className="px-6 py-3 bg-[#7C8A58] text-[#0E0F0F] rounded-full text-xs uppercase tracking-widest font-medium hover:bg-[#F6F2EA] transition-all"
                >
                  Book Table for Dish
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
