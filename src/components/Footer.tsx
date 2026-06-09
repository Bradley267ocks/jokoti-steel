import React from 'react';
import { NAV_ITEMS, COMPANY_INFO } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#home" className="block outline-none">
              <span className="text-2xl font-bold tracking-tight text-white block">
                JOKOTI STEEL
              </span>
              <span className="text-xs font-medium tracking-widest uppercase text-blue-500">
                Carports & Shadeports
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light">
              Providing durable and affordable steel structures across Pretoria. Build for longevity, designed for reliability.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Service Areas</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-blue-400 transition-colors">Pretoria North</li>
              <li className="hover:text-blue-400 transition-colors">Akasia</li>
              <li className="hover:text-blue-400 transition-colors">Soshanguve</li>
              <li className="hover:text-blue-400 transition-colors">Centurion</li>
              <li className="hover:text-blue-400 transition-colors">Johannesburg North</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Navigation</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-blue-400 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Business Info</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>{COMPANY_INFO.phone}</li>
              <li className="break-all">{COMPANY_INFO.email}</li>
              <li>Akasia, Pretoria North</li>
              <li>Gauteng, South Africa</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 tracking-widest uppercase font-medium">
          <p>© {currentYear} Jokoti Steel Carports & Shadeports. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
