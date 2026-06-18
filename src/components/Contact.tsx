import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import QuoteWizard from './QuoteWizard';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-base font-bold text-blue-600 uppercase tracking-widest mb-4">Get Started</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Get Your Free Quotation Today</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Experience Pretoria's most reliable steel structure services. Complete our quick wizard or reach out to us directly.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info - 4 columns */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-blue-600 text-white p-10 rounded-[2.5rem] space-y-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
              
              <h4 className="text-2xl font-bold mb-8 relative z-10">Direct Contact</h4>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider opacity-60 mb-1">Call Our Specialist</p>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-xl font-bold hover:text-blue-100 transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider opacity-60 mb-1">Send An Email</p>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-lg font-bold hover:text-blue-100 transition-colors break-all">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider opacity-60 mb-1">Visit Us In</p>
                    <p className="text-lg font-bold leading-tight">
                      {COMPANY_INFO.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 relative z-10">
                 <a 
                   href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\s+/g, '')}`} 
                   target="_blank" 
                   rel="noreferrer"
                   className="flex items-center justify-center gap-3 bg-white text-blue-600 hover:bg-blue-50 py-5 rounded-2xl font-bold transition-all shadow-lg"
                 >
                   <MessageSquare size={20} />
                   Chat on WhatsApp
                 </a>
              </div>
            </div>

            {/* Service Area Card */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative group overflow-hidden">
               <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <MapPin size={32} />
                  </div>
                  <h5 className="text-xl font-bold text-gray-900 mb-3">Service Coverage</h5>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We proudly serve the entire Gauteng province, with immediate same-day assessments available in <strong>Pretoria North, Akasia</strong>, and surrounding suburbs.
                  </p>
               </div>
            </div>
          </div>

          {/* Quote Wizard - 8 columns */}
          <div className="lg:col-span-8">
            <QuoteWizard />
          </div>
        </div>
      </div>
    </section>
  );
}
