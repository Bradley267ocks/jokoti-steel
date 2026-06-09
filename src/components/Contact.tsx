import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        alert(result.message);
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again or call us directly.');
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-blue-600 uppercase tracking-widest mb-4">Contact Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Your Free Quotation Today</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to protect your vehicle or upgrade your property? Fill out the form below or reach out directly via call or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-blue-600 text-white p-8 rounded-3xl space-y-8 shadow-xl">
              <h4 className="text-2xl font-bold mb-6">Contact Details</h4>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm opacity-70 mb-1">Call Us</p>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-xl font-bold hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm opacity-70 mb-1">Email Us</p>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-lg font-bold hover:underline break-all">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm opacity-70 mb-1">Our Location</p>
                  <p className="text-lg font-bold leading-tight">
                    {COMPANY_INFO.location}
                  </p>
                </div>
              </div>

              <div className="pt-8 flex gap-4">
                 <a 
                   href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\s+/g, '')}`} 
                   target="_blank" 
                   rel="noreferrer"
                   className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-bold transition-all"
                 >
                   <MessageSquare size={20} />
                   WhatsApp
                 </a>
              </div>
            </div>

            {/* Simple Map Placeholder */}
            <div className="bg-gray-100 h-64 rounded-3xl overflow-hidden relative group">
               <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                  <p className="text-center px-4">Pretoria North, Akasia Service Area</p>
               </div>
               <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-all" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 col-span-1">
                <label className="text-sm font-bold text-gray-700 font-sans">Full Name</label>
                <input 
                  name="name"
                  type="text" 
                  required
                  placeholder="John Doe" 
                  className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 rounded-xl px-4 py-4 transition-all"
                />
              </div>
              <div className="space-y-2 col-span-1">
                <label className="text-sm font-bold text-gray-700 font-sans">Phone Number</label>
                <input 
                  name="phone"
                  type="tel" 
                  required
                  placeholder="061 823 0129" 
                  className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 rounded-xl px-4 py-4 transition-all"
                />
              </div>
              <div className="space-y-2 col-span-2">
                <label className="text-sm font-bold text-gray-700 font-sans">Email Address</label>
                <input 
                  name="email"
                  type="email" 
                  required
                  placeholder="john@example.com" 
                  className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 rounded-xl px-4 py-4 transition-all"
                />
              </div>
              <div className="space-y-2 col-span-2">
                <label className="text-sm font-bold text-gray-700 font-sans">Service Required</label>
                <select 
                  name="service"
                  className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 rounded-xl px-4 py-4 transition-all appearance-none cursor-pointer"
                >
                  <option>Steel Carports</option>
                  <option>Shadeports</option>
                  <option>Roofing Solutions</option>
                  <option>Painting Services</option>
                </select>
              </div>
              <div className="space-y-2 col-span-2">
                <label className="text-sm font-bold text-gray-700 font-sans">Your Message</label>
                <textarea 
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your project..." 
                  className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 rounded-xl px-4 py-4 transition-all"
                ></textarea>
              </div>
              <div className="col-span-2 pt-4">
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-lg shadow-blue-600/20"
                >
                  <Send size={20} />
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
