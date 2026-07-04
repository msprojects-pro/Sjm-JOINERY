import React from 'react';
import { Star, MessageSquare, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-neutral-50 text-neutral-900 scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-3">
            04 / CLIENT REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-neutral-950 mb-4">
            Trusted by East Yorkshire Homeowners
          </h2>
          <p className="text-neutral-600 font-light max-w-2xl mx-auto">
            Read first-hand accounts of SJM Joinery’s craftsmanship, punctuality, and pristine site finishes from local clients.
          </p>
          <div className="h-1 w-20 bg-neutral-950 rounded mx-auto mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial) => {
            return (
              <div
                key={testimonial.id}
                className="bg-white border border-neutral-200/80 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group hover:border-neutral-950"
              >
                {/* Large Background Quote Symbol for elegant decoration */}
                <div className="absolute top-6 right-8 text-neutral-100 select-none pointer-events-none group-hover:text-neutral-200/80 transition-colors">
                  <Quote className="w-14 h-14 stroke-[1.5]" />
                </div>

                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-neutral-950 stroke-neutral-950" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <blockquote className="text-neutral-700 font-light text-base leading-relaxed mb-6 italic relative z-10">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                {/* Author Info & Location */}
                <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-neutral-950 text-sm">
                      {testimonial.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-neutral-500 text-[10px] uppercase font-mono mt-0.5">
                      <MapPin className="w-3 h-3 text-neutral-400" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>

                  <span className="bg-neutral-50 font-mono text-[9px] uppercase tracking-widest text-neutral-800 border border-neutral-200/60 px-2.5 py-1 rounded">
                    {testimonial.projectType}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Certification Block */}
        <div className="mt-16 bg-neutral-950 text-white rounded-lg p-8 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between border border-neutral-900 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-2">Have a specific bespoke woodwork idea?</h3>
            <p className="text-sm text-neutral-400 font-light max-w-xl">
              We provide free site visits and digital estimates for residents throughout Hull, Beverley, Swanland, and greater East Yorkshire.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a
              href="#contact"
              className="inline-block bg-white hover:bg-neutral-150 text-neutral-950 font-display font-semibold tracking-wider uppercase text-xs px-8 py-4 rounded shadow transition-all duration-200 active:scale-95"
            >
              Get Started Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
