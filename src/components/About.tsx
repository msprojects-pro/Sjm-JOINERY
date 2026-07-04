import React from 'react';
import { Check, ShieldCheck, Award, ThumbsUp, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data';

export default function About() {
  const stats = [
    { value: '15+', label: 'Years Experience', desc: 'Time-served craftsmanship' },
    { value: '100%', label: 'Bespoke Design', desc: 'Made to your exact specs' },
    { value: 'Hull & EY', label: 'Local Service', desc: 'Serving Beverley, Swanland & more' },
  ];

  const highlights = [
    'Time-served specialist joiner with impeccable standards.',
    'Bespoke, individual approach to every home furniture or remodeling project.',
    'Sourcing premium, sustainable British and European timber grades.',
    'Full CAD/Layout planning for bespoke cabinetry and kitchens.',
    'Clean, tidy working practices to respect your home during installation.',
    'Highly competitive pricing with transparent, upfront fixed-cost quotes.',
  ];

  return (
    <section id="about" className="py-24 bg-white text-neutral-900 scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-3">
            01 / MASTER CRAFTSMANSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-neutral-950 mb-6">
            Bespoke Joinery & Carpentry Covering Hull & East Yorkshire
          </h2>
          <div className="h-1 w-20 bg-neutral-950 rounded" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Story & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg text-neutral-700 font-light leading-relaxed">
              At <strong className="font-semibold text-neutral-950">SJM Joinery</strong>, we believe that wood is more than just a structural element—it is the soul of a home. Guided by deep, time-served expertise, we specialise in designing, building, and installing bespoke furniture and high-end residential interior timber projects.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Based in Hull and serving the surrounding East Yorkshire villages (including Beverley, Cottingham, Swanland, and Anlaby), we work closely with homeowners, property developers, and architects to deliver joinery that blends traditional craftsmanship with clean, modern utility.
            </p>

            <div className="pt-6">
              <h3 className="font-display font-semibold text-neutral-950 text-lg mb-4">
                Why Homeowners Choose SJM Joinery:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-0.5 rounded-full bg-neutral-100 mt-1">
                      <Check className="w-4 h-4 text-neutral-950" />
                    </div>
                    <span className="text-sm text-neutral-600 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Accents & Stat Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-neutral-50 border border-neutral-100 p-8 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-5 translate-x-1/4 -translate-y-1/4 select-none pointer-events-none">
                <svg width="240" height="240" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>

              <span className="text-neutral-500 font-mono text-[10px] uppercase tracking-widest block mb-1">
                OUR PROMISE
              </span>
              <h4 className="font-display font-bold text-neutral-950 text-xl mb-4">
                Reliable, Insured & Built to Last
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                We manage each project with total transparency. We arrive on time, keep you updated daily, and maintain a dust-controlled environment so you can live comfortably during your renovation.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white p-3 rounded border border-neutral-100">
                  <ShieldCheck className="w-5 h-5 text-neutral-600" />
                  <div>
                    <h5 className="font-mono text-xs font-semibold text-neutral-950 uppercase tracking-wider">£5m Public Liability Insurance</h5>
                    <p className="text-[10px] text-neutral-500">Fully covered for any home or commercial site work</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-3 rounded border border-neutral-100">
                  <Award className="w-5 h-5 text-neutral-600" />
                  <div>
                    <h5 className="font-mono text-xs font-semibold text-neutral-950 uppercase tracking-wider">Bespoke Guarantee</h5>
                    <p className="text-[10px] text-neutral-500">We stand by the strength of every joint and drawer runner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white border border-neutral-200/80 p-4 rounded text-center">
                  <div className="font-display font-extrabold text-2xl text-neutral-950 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-neutral-900 font-semibold mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[9px] text-neutral-500 mt-0.5 leading-none">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
