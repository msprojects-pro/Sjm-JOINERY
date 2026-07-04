import React from 'react';
import { Phone, Calendar, ArrowDown, Shield, Award, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.querySelector('#about');
    if (target) {
      const offset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-neutral-950 text-white overflow-hidden pt-20">
      {/* Background Image with Dark & Premium Color Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/sjm_hero_kitchen.jpg"
          alt="Premium Bespoke Kitchen Joinery"
          className="w-full h-full object-cover object-center opacity-45 scale-105 select-none pointer-events-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/70 to-neutral-950/80 z-10" />
      </div>

      {/* Decorative Grid Lines / Luxury Architectural Blueprint Grid (Subtle Accent) */}
      <div className="absolute inset-0 z-10 opacity-5 pointer-events-none">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex justify-between">
          <div className="w-[1px] h-full bg-white" />
          <div className="w-[1px] h-full bg-white hidden sm:block" />
          <div className="w-[1px] h-full bg-white hidden md:block" />
          <div className="w-[1px] h-full bg-white" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-16 flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Tag / Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-neutral-900/90 border border-neutral-800 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase text-neutral-300 mb-6 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-pulse" />
            <span>{BUSINESS_INFO.experience}</span>
            <span className="text-neutral-600">•</span>
            <MapPin className="w-3 h-3 text-neutral-400" />
            <span>{BUSINESS_INFO.location.split(',')[0]}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-light tracking-tight leading-none mb-6 max-w-4xl"
          >
            Bespoke Woodwork <br />
            <span className="font-semibold text-stroke font-display tracking-tight text-white drop-shadow">
              Crafted For Generations
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-neutral-300 font-light tracking-wide max-w-2xl mb-10 leading-relaxed"
          >
            Time-served joiner specialising in bespoke timber furniture, architectural stairs, fitted wardrobes, media walls, and home renovations in Hull & East Yorkshire.
          </motion.p>

          {/* Call To Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-16"
          >
            <button
              onClick={onOpenQuoteModal}
              id="hero-quote-btn"
              className="bg-white hover:bg-neutral-150 text-neutral-950 font-display font-semibold tracking-wider uppercase text-xs px-8 py-4 rounded shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-95 group"
            >
              <Calendar className="w-4 h-4 text-neutral-950 group-hover:scale-110 transition-transform" />
              <span>Get a Free Quote</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              id="hero-call-btn"
              className="bg-neutral-900/80 hover:bg-neutral-900 text-white font-display border border-neutral-800 hover:border-neutral-700 font-semibold tracking-wider uppercase text-xs px-8 py-4 rounded transition-all duration-200 flex items-center justify-center gap-2.5 backdrop-blur-sm active:scale-95"
            >
              <Phone className="w-4 h-4 text-neutral-400" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </motion.div>

          {/* Core Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 border-t border-neutral-900/80 pt-10 w-full max-w-3xl text-neutral-400"
          >
            <div className="flex flex-col items-center">
              <Shield className="w-5 h-5 text-neutral-500 mb-2" />
              <span className="text-white text-xs font-semibold uppercase tracking-wider font-mono">100% Fully Insured</span>
              <span className="text-[10px] text-neutral-500 mt-0.5">Complete peace of mind</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-5 h-5 text-neutral-500 mb-2" />
              <span className="text-white text-xs font-semibold uppercase tracking-wider font-mono">Time-Served Skill</span>
              <span className="text-[10px] text-neutral-500 mt-0.5">True craftsman standards</span>
            </div>
            <div className="flex flex-col items-center col-span-2 md:col-span-1 border-t border-neutral-900 md:border-t-0 pt-4 md:pt-0">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-white font-semibold text-sm">5.0</span>
                <span className="text-yellow-500">★★★★★</span>
              </div>
              <span className="text-white text-xs font-semibold uppercase tracking-wider font-mono">Highly Rated Reviews</span>
              <span className="text-[10px] text-neutral-500 mt-0.5">Trusted across East Yorkshire</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={handleExploreClick}
          className="flex flex-col items-center text-neutral-500 hover:text-white transition-colors gap-2 group cursor-pointer"
          aria-label="Scroll to About Section"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-mono font-light">Explore SJM</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
          </motion.div>
        </button>
      </div>
    </section>
  );
}
