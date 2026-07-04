import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenQuoteModal: (serviceType?: string) => void;
}

// Map of icon names to Lucide icons
const IconMap: Record<string, React.ComponentType<any>> = {
  Hammer: Icons.Hammer,
  Layout: Icons.Layout,
  Tv: Icons.Tv,
  TrendingUp: Icons.TrendingUp,
  DoorClosed: Icons.DoorClosed,
  Grid: Icons.Grid,
  Home: Icons.Home,
};

export default function Services({ onOpenQuoteModal }: ServicesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 bg-neutral-50 text-neutral-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-3">
              02 / OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-neutral-950 mb-4">
              Bespoke Services Configured To Your Space
            </h2>
            <p className="text-neutral-600 font-light">
              We cover all aspects of internal and external second-fix joinery, from custom timber furniture to comprehensive property remodelling.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-2 border-b border-neutral-950 pb-1 text-sm font-display font-semibold uppercase tracking-wider text-neutral-950 hover:text-neutral-600 hover:border-neutral-600 transition-all duration-200"
            >
              <span>Consultation Booking</span>
              <Icons.ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service: ServiceItem) => {
            const IconComponent = IconMap[service.iconName] || Icons.Hammer;
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                layout
                className="bg-white border border-neutral-200/80 rounded-lg p-6 flex flex-col justify-between transition-all duration-300 hover:border-neutral-950 hover:shadow-lg group"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-neutral-50 rounded-lg text-neutral-950 group-hover:bg-neutral-950 group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <span className="text-neutral-300 font-mono text-xs group-hover:text-neutral-400 font-bold transition-colors">
                      {service.id.substring(0, 3).toUpperCase()}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-neutral-950 text-xl mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-neutral-600 mb-6 font-light leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Expansion Details */}
                <div className="space-y-4">
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden border-t border-neutral-100 pt-4"
                      >
                        <p className="text-xs text-neutral-500 mb-4 leading-relaxed font-light">
                          {service.description}
                        </p>
                        <h4 className="font-mono text-[10px] uppercase font-bold tracking-widest text-neutral-900 mb-2">
                          WHAT WE COVER:
                        </h4>
                        <ul className="space-y-2">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-neutral-600">
                              <Icons.Check className="w-3.5 h-3.5 text-neutral-400 mt-0.5 shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-50">
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 hover:text-neutral-950 flex items-center gap-1 transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Specs' : 'View Specs'}</span>
                      <Icons.ChevronRight className={`w-3 h-3 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>

                    <button
                      onClick={() => onOpenQuoteModal(service.title)}
                      className="bg-neutral-50 group-hover:bg-neutral-950 group-hover:text-white hover:bg-neutral-950 hover:text-white text-neutral-900 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded transition-all duration-300"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
