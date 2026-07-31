import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';
import { Sparkles, Maximize2, X, ChevronRight, ChevronLeft } from 'lucide-react';

export const AtmosphereGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => setSelectedItem(item);
  const closeLightbox = () => setSelectedItem(null);

  return (
    <section id="gallery" className="py-32 bg-[#161819] text-[#F6F2EA] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-12">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.35em] text-[#7C8A58] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CHAPTER VI · ARCHITECTURAL SANCTUARY</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#F6F2EA] font-light">
              Dining <span className="italic font-normal text-[#7C8A58]">Atmosphere</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-sm text-[#B9B6AF] font-light">
            Designed in collaboration with Kengo Kuma &amp; Associates. Charred Yakisugi timber, brushed copper, raw slate, and soft linen drapery.
          </p>
        </div>

        {/* Masonry Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              onClick={() => openLightbox(item)}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-[#7C8A58]/50 transition-all duration-500 group cursor-pointer"
            >
              <div className="relative h-80 w-full overflow-hidden img-reveal-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F0F] via-transparent to-transparent opacity-80" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#0E0F0F]/80 backdrop-blur-md text-[#7C8A58] text-[10px] uppercase tracking-widest rounded-md border border-white/10 font-mono">
                  {item.category}
                </div>

                {/* Zoom Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#0E0F0F]/50 backdrop-blur-xs">
                  <div className="p-4 bg-[#7C8A58] text-[#0E0F0F] rounded-full shadow-2xl">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-serif text-2xl text-[#F6F2EA] group-hover:text-[#7C8A58] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs text-[#B9B6AF] font-light truncate">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0E0F0F]/95 backdrop-blur-2xl flex items-center justify-center p-6"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-8 right-8 p-3 text-[#B9B6AF] hover:text-white glass-panel rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className="max-w-4xl w-full glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[480px] w-full">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 space-y-3 bg-[#161819]">
                <div className="text-xs uppercase tracking-widest text-[#7C8A58]">
                  {selectedItem.category} · {selectedItem.subtitle}
                </div>
                <h3 className="font-serif text-3xl text-[#F6F2EA]">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-[#B9B6AF] font-light leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
