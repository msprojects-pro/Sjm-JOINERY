import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, ChevronUp, ShieldAlert } from 'lucide-react';
import Logo from './Logo';
import { BUSINESS_INFO } from '../data';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About SJM', href: '#about' },
  { name: 'Our Services', href: '#services' },
  { name: 'Project Gallery', href: '#gallery' },
  { name: 'Client Testimonials', href: '#testimonials' },
  { name: 'Get In Touch', href: '#contact' },
];

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
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
    <footer className="bg-neutral-950 text-white pt-20 pb-10 border-t border-neutral-900 overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        {/* Subtle woodgrain-like background geometric ring pattern */}
        <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] rounded-full border-[2px] border-white" />
        <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] rounded-full border-[1.5px] border-white" />
        <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 w-[400px] h-[400px] rounded-full border-[1px] border-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Segment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
          
          {/* Col 1: Brand details */}
          <div className="lg:col-span-5 space-y-6">
            <Logo size="md" light={true} />
            <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-sm mt-4">
              Time-served joiner crafting high-quality bespoke furniture, kitchens, media walls, staircases, and premium home renovations in Hull & East Yorkshire.
            </p>
            {/* Instagram link button */}
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-850 rounded-md text-xs font-mono uppercase tracking-widest text-neutral-300 hover:text-white transition-all duration-200"
              >
                <Instagram className="w-4 h-4 text-neutral-400" />
                <span>@{BUSINESS_INFO.instagram}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-[10px] uppercase font-bold tracking-widest text-neutral-400 border-b border-neutral-900 pb-2">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Coordinates */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="font-mono text-[10px] uppercase font-bold tracking-widest text-neutral-400 border-b border-neutral-900 pb-2">
              BUSINESS HOURS & AREA
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3.5 text-sm text-neutral-400">
                <Clock className="w-4.5 h-4.5 text-neutral-600 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs text-white uppercase tracking-wider font-mono block">Opening Times</span>
                  <p className="text-xs">{BUSINESS_INFO.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-sm text-neutral-400">
                <MapPin className="w-4.5 h-4.5 text-neutral-600 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs text-white uppercase tracking-wider font-mono block">Service Region</span>
                  <p className="text-xs">Hull, Beverley, Cottingham, Swanland, Anlaby, Brough & greater East Yorkshire</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-sm text-neutral-400">
                <Phone className="w-4.5 h-4.5 text-neutral-600 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs text-white uppercase tracking-wider font-mono block">Direct Enquiries</span>
                  <p className="text-xs font-mono">{BUSINESS_INFO.phoneDisplay} (07944 350735)</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Segment */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-neutral-500 text-xs font-mono font-light">
          <div>
            <p>© {new Date().getFullYear()} SJM Joinery. All rights reserved.</p>
            <p className="text-[10px] text-neutral-600 mt-1">
              Time-Served Bespoke Woodworking & Home Improvements in East Yorkshire.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-neutral-600">
              <ShieldAlert className="w-4 h-4 text-neutral-700" />
              <span className="text-[10px] uppercase">Fully Insured (£5m PLI)</span>
            </div>
            
            {/* Scroll To Top Button */}
            <button
              onClick={handleScrollToTop}
              className="p-3 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-full text-neutral-400 hover:text-white transition-all duration-200"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
