import React from 'react';
import { motion } from 'motion/react';
import { GALLERY } from '../constants';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-base font-bold text-blue-400 uppercase tracking-widest mb-4">Our Projects</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Showcasing Our Work</h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-400 max-w-sm mb-4">
              Explore our recently completed steel carports, shadeports, and roofing installations across Pretoria.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <div className="w-10 h-1 bg-blue-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-8 font-light">Have a specific project in mind? Let's discuss your requirements.</p>
          <a
            href="#contact"
            className="inline-block border border-blue-500/30 hover:bg-blue-600/10 text-blue-400 hover:text-blue-300 px-10 py-4 rounded-xl font-bold transition-all"
          >
            Discuss Project
          </a>
        </div>
      </div>
    </section>
  );
}
