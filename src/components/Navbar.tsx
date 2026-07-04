import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import { BUSINESS_INFO } from '../data';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection based on section visibility
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 90; // Approx height of sticky navbar
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const useLightText = !(isScrolled || isOpen);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || isOpen
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Group */}
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center">
              <Logo size="sm" light={useLightText} />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-sm font-medium tracking-wide transition-colors relative py-2 ${
                      isActive 
                        ? useLightText ? 'text-white font-semibold' : 'text-neutral-950 font-semibold'
                        : useLightText ? 'text-neutral-300 hover:text-white' : 'text-neutral-500 hover:text-neutral-900'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${useLightText ? 'bg-white' : 'bg-neutral-950'}`}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Actions (Phone & Quote) */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className={`flex items-center gap-2 px-3 py-2 text-sm font-mono transition-colors border border-transparent rounded-md ${
                  useLightText
                    ? 'text-neutral-300 hover:text-white hover:border-white/20'
                    : 'text-neutral-600 hover:text-neutral-950 hover:border-neutral-200'
                }`}
              >
                <Phone className="w-4 h-4 text-neutral-400" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <button
                onClick={onOpenQuoteModal}
                id="navbar-quote-btn"
                className={`text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded transition-all duration-200 flex items-center gap-2 ${
                  useLightText
                    ? 'bg-white text-neutral-950 hover:bg-neutral-100 hover:shadow-lg hover:shadow-white/5'
                    : 'bg-neutral-950 hover:bg-neutral-800 text-white hover:shadow-md'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Get a Free Quote</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className={`p-2 transition-colors sm:hidden ${
                  useLightText ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-950'
                }`}
                aria-label="Call SJM Joinery"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 focus:outline-none transition-colors ${
                  useLightText ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-950'
                }`}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden bg-white border-b border-neutral-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`block py-3 px-4 rounded-md text-base font-medium tracking-wide transition-colors ${
                        isActive
                          ? 'bg-neutral-50 text-neutral-950 font-semibold border-l-2 border-neutral-950'
                          : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
                <div className="pt-4 pb-2 border-t border-neutral-100 px-4 flex flex-col gap-3">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="flex items-center gap-3 text-neutral-600 hover:text-neutral-950 transition-colors py-2 font-mono"
                  >
                    <Phone className="w-4 h-4 text-neutral-400" />
                    <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onOpenQuoteModal();
                    }}
                    id="mobile-quote-btn"
                    className="w-full bg-neutral-950 hover:bg-neutral-800 text-white text-sm font-semibold tracking-wider uppercase py-3 rounded transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Request a Free Quote</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
