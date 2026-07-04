/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Sections & Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

// Static Data
import { BUSINESS_INFO } from './data';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState('General Enquiry');

  // Trigger quote request modal with optional service category pre-selected
  const handleOpenQuoteModal = (serviceType?: string) => {
    if (serviceType) {
      setSelectedServiceType(serviceType);
    } else {
      setSelectedServiceType('General Enquiry');
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-950 selection:text-white">
      {/* Sticky Top Header Navigation */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Structural Layout */}
      <main>
        {/* Hero Banner Showcase */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* About Woodwork & Local Coverage */}
        <About />

        {/* Custom Specifications & Services */}
        <Services onOpenQuoteModal={(service) => handleOpenQuoteModal(service)} />

        {/* Handcrafted Project Portfolio Lightbox */}
        <Gallery />

        {/* Client Testimonials & Social Trust */}
        <Testimonials />

        {/* Detailed Form & Coverage Check Map */}
        <Contact />
      </main>

      {/* Persistent Bottom Footer */}
      <Footer />

      {/* Floating Call Now Button on Mobile Screens */}
      <div className="fixed bottom-6 right-6 z-30 sm:hidden flex flex-col gap-2">
        <motion.a
          href={`tel:${BUSINESS_INFO.phone}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', delay: 1 }}
          className="bg-neutral-950 text-white p-4 rounded-full shadow-2xl flex items-center justify-center border border-neutral-800"
          aria-label="Call SJM Joinery"
        >
          <Phone className="w-6 h-6 animate-pulse" />
        </motion.a>
        
        {/* Floating Fast-Quote Button for extreme ease-of-use on mobile */}
        <motion.button
          onClick={() => handleOpenQuoteModal()}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', delay: 1.2 }}
          className="bg-white text-neutral-950 p-4 rounded-full shadow-2xl flex items-center justify-center border border-neutral-200"
          aria-label="Get a Free Quote"
        >
          <Calendar className="w-6 h-6 text-neutral-950" />
        </motion.button>
      </div>

      {/* Centered Master Quote Inquiry Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialServiceType={selectedServiceType}
      />
    </div>
  );
}
