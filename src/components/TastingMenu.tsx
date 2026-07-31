import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TASTING_MENU, Course } from '../data/restaurantData';
import { Sparkles, ChevronDown, Wine, Leaf, Download, Calendar } from 'lucide-react';

interface TastingMenuProps {
  onOpenReservation: () => void;
}

export const TastingMenu: React.FC<TastingMenuProps> = ({ onOpenReservation }) => {
  const [expandedCourse, setExpandedCourse] = useState<string | null>('I');
  const [pairingType, setPairingType] = useState<'wine' | 'na'>('wine');

  const toggleCourse = (num: string) => {
    setExpandedCourse(expandedCourse === num ? null : num);
  };

  return (
    <section id="tasting-menu" className="py-20 sm:py-32 bg-[#161819] text-[#F6F2EA] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.35em] text-[#7C8A58]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CHAPTER IV · WINTER HARVEST &amp; EMBER</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#F6F2EA]">
            9-Course <span className="italic text-[#7C8A58]">Tasting Menu</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#B9B6AF] font-light leading-relaxed">
            A 3-hour immersive gastronomy ritual celebrating winter wood-fire cooking, wild Scandinavian forage, and Japanese marine elegance.
          </p>

          {/* Pricing & Pairing Selector */}
          <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <div className="px-5 py-2 bg-[#202224] rounded-full border border-white/10 text-xs font-mono text-[#F6F2EA]">
              Tasting Experience: <span className="text-[#7C8A58] font-bold">$380 / guest</span>
            </div>

            <div className="flex bg-[#202224] p-1 rounded-full border border-white/10 text-[11px] sm:text-xs">
              <button
                onClick={() => setPairingType('wine')}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full transition-all ${
                  pairingType === 'wine'
                    ? 'bg-[#7C8A58] text-[#0E0F0F] font-medium'
                    : 'text-[#B9B6AF] hover:text-white'
                }`}
              >
                Grand Cru Pairing (+$260)
              </button>
              <button
                onClick={() => setPairingType('na')}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full transition-all ${
                  pairingType === 'na'
                    ? 'bg-[#7C8A58] text-[#0E0F0F] font-medium'
                    : 'text-[#B9B6AF] hover:text-white'
                }`}
              >
                Botanical Elixir (+$140)
              </button>
            </div>
          </div>
        </div>

        {/* Course Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {TASTING_MENU.map((course) => {
            const isExpanded = expandedCourse === course.number;

            return (
              <div
                key={course.number}
                className={`glass-panel rounded-2xl transition-all duration-500 overflow-hidden border ${
                  isExpanded ? 'border-[#7C8A58]/60 shadow-xl' : 'border-white/5 hover:border-white/20'
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => toggleCourse(course.number)}
                  className="w-full p-4 sm:p-8 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <span className="font-serif text-xl sm:text-3xl text-[#7C8A58] font-light min-w-[32px] sm:min-w-[40px]">
                      {course.number}
                    </span>
                    <div>
                      <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#A7B08A]">
                        {course.category}
                      </div>
                      <h3 className="font-serif text-lg sm:text-2xl text-[#F6F2EA] group-hover:text-[#7C8A58] transition-colors">
                        {course.name}
                      </h3>
                      <p className="text-xs text-[#B9B6AF] font-light hidden sm:block">
                        {course.subTitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <span className="text-xs font-mono text-[#7C8A58] hidden md:inline-block">
                      {isExpanded ? 'Collapse' : 'Expand Course'}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-[#7C8A58] transition-transform duration-500 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 sm:px-8 pb-6 sm:pb-8 pt-2 border-t border-white/5"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                        {/* Course Image */}
                        <div className="md:col-span-5 h-48 sm:h-56 rounded-xl overflow-hidden img-reveal-container border border-white/10">
                          <img
                            src={course.image}
                            alt={course.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Description & Pairing */}
                        <div className="md:col-span-7 space-y-3 sm:space-y-4">
                          <p className="text-xs sm:text-base text-[#F6F2EA] font-light leading-relaxed">
                            {course.description}
                          </p>

                          {/* Ingredients */}
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                            <span className="text-[11px] sm:text-xs text-[#A7B08A]">Key Elements:</span>
                            {course.keyIngredients.map((ing, i) => (
                              <span
                                key={i}
                                className="px-2 sm:px-2.5 py-0.5 bg-[#202224] text-[10px] sm:text-[11px] text-[#B9B6AF] rounded-md border border-white/5"
                              >
                                {ing}
                              </span>
                            ))}
                          </div>

                          {/* Pairing Box */}
                          <div className="p-3.5 sm:p-4 bg-[#202224]/80 rounded-xl border border-white/5 flex items-center space-x-3">
                            <Wine className="w-4 h-4 sm:w-5 sm:h-5 text-[#7C8A58] flex-shrink-0" />
                            <div className="text-[11px] sm:text-xs">
                              <span className="text-[#7C8A58] font-medium uppercase tracking-wider block">
                                {pairingType === 'wine' ? 'Sommelier Wine Match' : 'Botanical Elixir Match'}
                              </span>
                              <span className="text-[#F6F2EA] italic">{course.pairingNote}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="text-xs text-[#B9B6AF] font-light flex items-center space-x-2 text-center md:text-left">
            <Leaf className="w-4 h-4 text-[#7C8A58] flex-shrink-0 hidden sm:inline-block" />
            <span>Full Pescatarian, Vegetarian &amp; Gluten-Free Menus available upon request.</span>
          </div>

          <div className="flex space-x-3 sm:space-x-4 w-full sm:w-auto justify-center">
            <button
              onClick={() => alert("Ember & Oak Winter Tasting Menu PDF generated for printing.")}
              className="px-4 sm:px-5 py-2.5 rounded-full border border-white/10 hover:border-[#7C8A58] text-[10px] sm:text-xs uppercase tracking-widest text-[#B9B6AF] hover:text-[#F6F2EA] transition-all flex items-center space-x-2"
            >
              <Download className="w-3.5 h-3.5 text-[#7C8A58]" />
              <span>PDF Menu</span>
            </button>

            <button
              onClick={onOpenReservation}
              className="px-5 sm:px-6 py-2.5 rounded-full bg-[#7C8A58] hover:bg-[#F6F2EA] text-[#0E0F0F] text-[10px] sm:text-xs uppercase tracking-widest font-medium transition-all flex items-center space-x-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Table</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
