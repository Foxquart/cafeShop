import React from 'react';
import { motion } from 'framer-motion';
import { INSTAGRAM_POSTS } from '../data/restaurantData';
import { Instagram, Heart, Sparkles } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  return (
    <section className="py-24 bg-[#0E0F0F] text-[#F6F2EA] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.35em] text-[#7C8A58] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VISUAL JOURNAL</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F6F2EA] font-light">
              Follow Our <span className="italic text-[#7C8A58]">Ember Story</span>
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 sm:mt-0 inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#7C8A58] hover:text-[#F6F2EA] transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>@emberandoak</span>
          </a>
        </div>

        {/* 6 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <motion.a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative h-48 sm:h-56 rounded-2xl overflow-hidden group cursor-pointer border border-white/10 img-reveal-container"
            >
              <img src={post.image} alt="Instagram feed photo" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#0E0F0F]/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between text-xs">
                <p className="text-[#F6F2EA] font-light line-clamp-3 leading-relaxed">
                  {post.caption}
                </p>
                <div className="flex items-center space-x-1 text-[#7C8A58] font-mono">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>{post.likes}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
