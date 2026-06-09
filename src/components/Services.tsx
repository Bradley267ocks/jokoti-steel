import React from 'react';
import { motion } from 'motion/react';
import { Car, Sun, Home, Paintbrush } from 'lucide-react';
import { SERVICES } from '../constants';

const icons = {
  Car: Car,
  Sun: Sun,
  Home: Home,
  Paintbrush: Paintbrush,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-base font-bold text-blue-600 uppercase tracking-widest mb-4">Our Expertise</h2>
            <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Steel & Shade Solutions</p>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
                <a 
                  href="#contact" 
                  className="mt-6 inline-flex items-center text-blue-600 font-bold text-sm hover:gap-2 transition-all"
                >
                  Request Quote <span>→</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
