import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertTriangle, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { ContactMessage } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Local Postcode Checker State
  const [postcode, setPostcode] = useState('');
  const [coverageResult, setCoverageResult] = useState<'success' | 'warning' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (validationError) setValidationError('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple Validation
    if (!formData.name.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setValidationError('Please provide either a phone number or email address so we can contact you.');
      return;
    }
    if (!formData.message.trim()) {
      setValidationError('Please write a brief message describing your woodworking project.');
      return;
    }

    setIsSubmitting(true);
    setValidationError('');

    // Simulate Server-side Proxy and Log
    setTimeout(() => {
      console.log('%c--- SJM Joinery Contact Form Submission ---', 'color: #00ff00; font-weight: bold;');
      console.log('Timestamp:', new Date().toISOString());
      console.log('Data Submitted:', formData);
      console.log('-------------------------------------------');

      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'General Enquiry',
        message: ''
      });
    }, 1200);
  };

  const checkPostcodeCoverage = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPostcode = postcode.trim().toUpperCase().replace(/\s/g, '');
    
    if (!cleanPostcode) return;

    // East Yorkshire postcodes usually start with HU (Hull) or YO (York)
    if (cleanPostcode.startsWith('HU')) {
      setCoverageResult('success');
    } else {
      setCoverageResult('warning');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white text-neutral-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-3">
            05 / CONTACT US
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-neutral-950 mb-6">
            Discuss Your Bespoke Joinery Project
          </h2>
          <div className="h-1 w-20 bg-neutral-950 rounded" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Coordinates & Information */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="font-display font-bold text-neutral-950 text-xl mb-4">Direct Contact Information</h3>
              <p className="text-sm text-neutral-600 font-light leading-relaxed mb-6">
                Ready to take the next step? Call us directly for immediate advice or fill out our online form. We aim to respond to all enquiries within 24 hours.
              </p>

              <div className="space-y-6">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-start gap-4 group text-neutral-700 hover:text-neutral-950 transition-colors"
                >
                  <div className="p-3 bg-neutral-50 group-hover:bg-neutral-950 group-hover:text-white rounded-lg transition-colors border border-neutral-150">
                    <Phone className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase text-neutral-900">Phone & WhatsApp</h4>
                    <p className="text-lg font-mono font-semibold mt-1">{BUSINESS_INFO.phoneDisplay}</p>
                    <span className="text-[10px] text-neutral-500 block">Tap to call directly from mobile</span>
                  </div>
                </a>

                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-start gap-4 group text-neutral-700 hover:text-neutral-950 transition-colors"
                >
                  <div className="p-3 bg-neutral-50 group-hover:bg-neutral-950 group-hover:text-white rounded-lg transition-colors border border-neutral-150">
                    <Mail className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase text-neutral-900">Email Address</h4>
                    <p className="text-base font-semibold mt-1">{BUSINESS_INFO.email}</p>
                    <span className="text-[10px] text-neutral-500 block">For project plans, sketches or specifications</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-neutral-700">
                  <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-150">
                    <MapPin className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase text-neutral-900">Our Coverage Zone</h4>
                    <p className="text-sm mt-1 font-medium">{BUSINESS_INFO.location}</p>
                    <span className="text-[10px] text-neutral-500 block">Hull, Beverley, Swanland, Cottingham & East Yorkshire villages</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-neutral-700">
                  <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-150">
                    <Clock className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase text-neutral-900">Working Hours</h4>
                    <p className="text-xs mt-1 text-neutral-600 font-mono leading-relaxed">{BUSINESS_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Postcode Coverage Checker */}
            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-150">
              <h4 className="font-display font-bold text-neutral-950 text-sm mb-2">Check If We Cover Your Area</h4>
              <p className="text-[11px] text-neutral-600 mb-4 font-light leading-relaxed">
                Enter your East Yorkshire postcode (e.g. HU10, HU14, HU17) to verify coverage.
              </p>
              <form onSubmit={checkPostcodeCoverage} className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. HU10"
                  value={postcode}
                  onChange={(e) => {
                    setPostcode(e.target.value);
                    setCoverageResult(null);
                  }}
                  className="bg-white border border-neutral-250 rounded px-3 py-2 text-xs font-mono uppercase tracking-widest max-w-[120px] focus:outline-none focus:border-neutral-950"
                  maxLength={8}
                />
                <button
                  type="submit"
                  className="bg-neutral-950 hover:bg-neutral-850 text-white font-mono text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded transition-colors"
                >
                  Verify
                </button>
              </form>

              {coverageResult === 'success' && (
                <div className="mt-3 flex items-center gap-2 text-green-700 bg-green-50 border border-green-100 p-2.5 rounded text-xs">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>We fully cover your location. Free home consultation available!</span>
                </div>
              )}
              {coverageResult === 'warning' && (
                <div className="mt-3 flex items-center gap-2 text-amber-700 bg-amber-50 border border-amber-100 p-2.5 rounded text-xs">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Postcode outside HU. Contact us to check if we can travel.</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Dynamic Form + Google Map */}
          <div className="lg:col-span-7 space-y-8">
            {/* Interactive Contact Form Box */}
            <div className="bg-neutral-50 border border-neutral-150 p-8 rounded-lg shadow-sm">
              <h3 className="font-display font-bold text-neutral-950 text-lg mb-6">Send an Online Enquiry</h3>

              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center p-3 bg-neutral-950 text-white rounded-full mb-4">
                    <CheckCircle2 className="w-10 h-10 stroke-[1.5]" />
                  </div>
                  <h4 className="font-display font-bold text-neutral-950 text-xl mb-2">Message Sent Successfully</h4>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed max-w-md mx-auto">
                    Thank you for contacting SJM Joinery. We have logged your details and will call or email you back shortly to discuss your custom woodwork requirements.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-6 border border-neutral-300 hover:border-neutral-950 text-neutral-900 text-xs font-mono font-semibold tracking-wider uppercase px-5 py-2.5 rounded transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  {validationError && (
                    <div className="bg-neutral-900 text-white p-3.5 rounded text-xs flex items-center gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-neutral-400 shrink-0" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-[10px] uppercase font-bold tracking-widest text-neutral-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. David Harrison"
                        className="w-full bg-white border border-neutral-250 rounded px-4 py-3 text-sm focus:outline-none focus:border-neutral-950 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] uppercase font-bold tracking-widest text-neutral-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 07944 350735"
                        className="w-full bg-white border border-neutral-250 rounded px-4 py-3 text-sm focus:outline-none focus:border-neutral-950 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-[10px] uppercase font-bold tracking-widest text-neutral-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. david@example.co.uk"
                        className="w-full bg-white border border-neutral-250 rounded px-4 py-3 text-sm focus:outline-none focus:border-neutral-950 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] uppercase font-bold tracking-widest text-neutral-700 mb-1.5">
                        Reason for Contact
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-neutral-250 rounded px-4 py-3 text-sm focus:outline-none focus:border-neutral-950 transition-colors"
                      >
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Bespoke Furniture">Bespoke Furniture</option>
                        <option value="Kitchen Renovation">Kitchen / Fitted Wardrobe</option>
                        <option value="Media Wall Setup">Media Wall & Panelwork</option>
                        <option value="Staircase Overhaul">Staircase & Balustrades</option>
                        <option value="Home Extension / Carpentry">Other Joinery Work</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase font-bold tracking-widest text-neutral-700 mb-1.5">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe dimensions, wood preference, location, or any specific visual designs you want..."
                      className="w-full bg-white border border-neutral-250 rounded px-4 py-3 text-sm focus:outline-none focus:border-neutral-950 transition-colors resize-y leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="w-full bg-neutral-950 hover:bg-neutral-800 disabled:bg-neutral-400 text-white font-display font-semibold tracking-wider uppercase text-xs py-4 rounded transition-all duration-200 flex items-center justify-center gap-2.5 hover:shadow"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Logging Submission...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Details</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
