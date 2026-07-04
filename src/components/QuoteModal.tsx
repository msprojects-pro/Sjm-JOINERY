import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, AlertTriangle, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { QuoteRequest } from '../types';
import { BUSINESS_INFO } from '../data';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceType?: string;
}

export default function QuoteModal({ isOpen, onClose, initialServiceType = 'General Enquiry' }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteRequest>({
    name: '',
    phone: '',
    email: '',
    serviceType: initialServiceType,
    details: '',
    location: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Update form if the initialServiceType prop shifts while open
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        serviceType: initialServiceType || 'General Enquiry'
      }));
      setSubmitSuccess(false);
      setValidationError('');
    }
  }, [isOpen, initialServiceType]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Lock background scrolling
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = ''; // Release lock
    };
  }, [isOpen, onClose]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (validationError) setValidationError('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic fields validation
    if (!formData.name.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setValidationError('Please enter your contact phone number.');
      return;
    }
    if (!formData.location.trim()) {
      setValidationError('Please provide your approximate location (e.g. Beverley, Hull).');
      return;
    }

    setIsSubmitting(true);
    setValidationError('');

    // Simulate Server submission
    setTimeout(() => {
      console.log('%c--- SJM Joinery Quote Request Received ---', 'color: #ffd700; font-weight: bold;');
      console.log('Timestamp:', new Date().toISOString());
      console.log('Quote Request Details:', formData);
      console.log('------------------------------------------');

      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: 'General Enquiry',
        details: '',
        location: ''
      });
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Dark Glass Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="bg-white border border-neutral-250 rounded-xl max-w-lg w-full overflow-hidden shadow-2xl relative z-10"
          >
            {/* Header */}
            <div className="bg-neutral-950 text-white p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-neutral-400" />
                <div>
                  <h3 className="font-display font-bold text-lg leading-none">Get a Free Joinery Estimate</h3>
                  <span className="text-[10px] text-neutral-400 font-mono tracking-wider uppercase mt-1 block">Hull & East Yorkshire</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-neutral-400 hover:text-white rounded-full transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {submitSuccess ? (
                <div className="text-center py-6">
                  <div className="inline-flex items-center justify-center p-3 bg-neutral-950 text-white rounded-full mb-4">
                    <CheckCircle2 className="w-10 h-10 stroke-[1.5]" />
                  </div>
                  <h4 className="font-display font-bold text-neutral-950 text-xl mb-2">Request Logged</h4>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed max-w-sm mx-auto mb-6">
                    Thank you! SJM Joinery will review your project requirements and call you at <strong className="font-semibold text-neutral-950">07944 350735</strong> or your specified email to arrange a fast, free site visit.
                  </p>
                  <button
                    onClick={onClose}
                    className="w-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-mono font-semibold tracking-wider uppercase py-3.5 rounded transition-colors"
                  >
                    Return to Website
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {validationError && (
                    <div className="bg-neutral-900 text-white p-3 rounded text-xs flex items-center gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-neutral-400 shrink-0" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  <div>
                    <label className="block font-mono text-[9px] uppercase font-bold tracking-widest text-neutral-600 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Harrison"
                      className="w-full bg-neutral-50 border border-neutral-200 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-neutral-950 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[9px] uppercase font-bold tracking-widest text-neutral-600 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 07944 350735"
                        className="w-full bg-neutral-50 border border-neutral-200 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-neutral-950 transition-colors font-mono"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[9px] uppercase font-bold tracking-widest text-neutral-600 mb-1">
                        Your Location *
                      </label>
                      <input
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="e.g. Beverley, HU17"
                        className="w-full bg-neutral-50 border border-neutral-200 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-neutral-950 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[9px] uppercase font-bold tracking-widest text-neutral-600 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@gmail.com"
                      className="w-full bg-neutral-50 border border-neutral-200 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-neutral-950 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[9px] uppercase font-bold tracking-widest text-neutral-600 mb-1">
                      Joinery Service Needed
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-neutral-950 transition-colors"
                    >
                      <option value="General Enquiry">General Joinery Advice</option>
                      <option value="Bespoke Furniture & Joinery">Bespoke Furniture & Joinery</option>
                      <option value="Kitchens & Built-in Wardrobes">Kitchens & Built-in Wardrobes</option>
                      <option value="Media Walls & Feature Walls">Media Walls & Feature Walls</option>
                      <option value="Staircases & Banisters">Staircases & Banisters</option>
                      <option value="Doors, Windows & Panelling">Doors, Windows & Panelling</option>
                      <option value="Custom Storage Solutions">Custom Storage Solutions</option>
                      <option value="Home Improvements & Renovations">Home Improvements & Renovations</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-[9px] uppercase font-bold tracking-widest text-neutral-600 mb-1">
                      Project Details & Dimensions (Optional)
                    </label>
                    <textarea
                      name="details"
                      rows={3}
                      value={formData.details}
                      onChange={handleInputChange}
                      placeholder="e.g. Under-stairs storage unit with 3 pull-out oak drawers. Width approx 1.8m."
                      className="w-full bg-neutral-50 border border-neutral-200 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-neutral-950 transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-neutral-950 hover:bg-neutral-800 disabled:bg-neutral-400 text-white font-display font-semibold tracking-wider uppercase text-xs py-3.5 rounded transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Request Estimate</span>
                        </>
                      )}
                    </button>
                    <span className="text-[9px] text-neutral-500 font-light mt-2.5 block text-center leading-normal">
                      🛡️ All quote requests are 100% free with no obligation to proceed.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
