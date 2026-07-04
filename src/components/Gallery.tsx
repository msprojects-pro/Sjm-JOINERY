import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImageIdx, setActiveImageIdx] = useState<number | null>(null);

  const categories = ['All', ...Array.from(new Set(GALLERY.map(item => item.category)))];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY
    : GALLERY.filter(item => item.category === selectedCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIdx !== null) {
      const nextIdx = (activeImageIdx + 1) % filteredItems.length;
      setActiveImageIdx(nextIdx);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIdx !== null) {
      const prevIdx = (activeImageIdx - 1 + filteredItems.length) % filteredItems.length;
      setActiveImageIdx(prevIdx);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white text-neutral-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-3">
              03 / WORK PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-neutral-950 mb-4">
              Our Completed Bespoke Works
            </h2>
            <p className="text-neutral-600 font-light text-sm sm:text-base">
              Explore photorealistic examples of our recent client installations across East Yorkshire. Move cursor over cards to view details.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-10 pb-2 border-b border-neutral-100">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider rounded-md transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-neutral-950 text-white'
                  : 'text-neutral-500 hover:text-neutral-950 hover:bg-neutral-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: GalleryItem, idx: number) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group relative bg-neutral-50 aspect-4/3 rounded-lg overflow-hidden border border-neutral-100 cursor-pointer shadow-sm hover:shadow-md"
                onClick={() => setActiveImageIdx(idx)}
              >
                {/* Photo */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Cover Overlay on Hover */}
                <div className="absolute inset-0 bg-neutral-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-between p-6 text-white">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="p-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-xs text-neutral-300 font-light line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-1.5 mt-3 text-neutral-400 font-mono text-[9px] uppercase tracking-widest">
                      <MapPin className="w-3 h-3 text-neutral-500" />
                      <span>East Yorkshire Installation</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeImageIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
              onClick={() => setActiveImageIdx(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImageIdx(null)}
                className="absolute top-4 right-4 z-50 p-2 text-neutral-400 hover:text-white bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 rounded-full transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-4 p-3 text-neutral-400 hover:text-white bg-neutral-900/40 hover:bg-neutral-900/80 border border-neutral-800/50 rounded-full transition-colors z-40"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 p-3 text-neutral-400 hover:text-white bg-neutral-900/40 hover:bg-neutral-900/80 border border-neutral-800/50 rounded-full transition-colors z-40"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Lightbox Card */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-neutral-900 border border-neutral-800 rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid grid-cols-1 md:grid-cols-12">
                  {/* Photo Frame */}
                  <div className="md:col-span-8 aspect-video md:aspect-auto md:h-[500px] bg-black flex items-center justify-center">
                    <img
                      src={filteredItems[activeImageIdx].imageUrl}
                      alt={filteredItems[activeImageIdx].title}
                      className="max-w-full max-h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Caption Frame */}
                  <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between text-white bg-neutral-900/90 h-full">
                    <div>
                      <div className="inline-block px-2.5 py-1 rounded-full bg-neutral-800 border border-neutral-700 font-mono text-[9px] uppercase tracking-widest text-neutral-300 mb-4">
                        {filteredItems[activeImageIdx].category}
                      </div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl mb-3 text-white">
                        {filteredItems[activeImageIdx].title}
                      </h3>
                      <p className="text-sm text-neutral-400 font-light leading-relaxed">
                        {filteredItems[activeImageIdx].description}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-neutral-800">
                      <div className="flex items-center gap-2 text-neutral-400 text-xs">
                        <MapPin className="w-4 h-4 text-neutral-500" />
                        <span className="font-mono uppercase tracking-wider text-[10px]">Hull & East Yorkshire</span>
                      </div>
                      <p className="text-[10px] text-neutral-500 mt-1">SJM Joinery Bespoke Commission</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
