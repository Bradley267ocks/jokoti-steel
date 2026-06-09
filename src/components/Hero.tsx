import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/modern_steel_carport_1781019791518.png"
          alt="Modern Steel Carport"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Expert Steel Construction
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Strong Steel Structures <span className="text-blue-400">Built To Last</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
              Professional Steel Carports, Shadeports, Roofing & Painting Services in Pretoria North and Surrounding Areas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-xl shadow-blue-900/20"
              >
                Get Free Quote
                <ArrowRight size={20} />
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-bold transition-all"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
