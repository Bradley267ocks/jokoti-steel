import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../constants';

export default function About() {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-2xl z-0" />
              <img
                src="https://i.ibb.co/hJW429rm/Whats-App-Image-2026-06-08-at-18-20-01.jpg"
                alt="Our Workmanship"
                className="relative z-10 w-full rounded-2xl shadow-2xl grayscale-50 hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl z-20 hidden md:block">
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="text-sm font-medium uppercase tracking-widest opacity-80">Years Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-base font-bold text-blue-600 uppercase tracking-widest mb-4">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
              Pretoria's Trusted Steel Construction Specialists
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Jokoti Steel Carports & Shadeports is a trusted steel construction company based in Pretoria North, Akasia. We specialize in designing and installing high-quality steel carports, shadeports, roofing solutions, and professional painting services for residential, commercial, and industrial clients.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed font-light italic border-l-4 border-blue-600 pl-6">
              "Our focus is on delivering durable workmanship, affordable pricing, and excellent customer service. We build structures that last for generations."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {WHY_CHOOSE_US.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#contact"
                className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-xl font-bold transition-all"
              >
                Meet Our Team
              </a>
              <div className="hidden sm:block">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Call for questions</p>
                <p className="text-lg font-bold text-gray-900">{COMPANY_INFO.phone}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
