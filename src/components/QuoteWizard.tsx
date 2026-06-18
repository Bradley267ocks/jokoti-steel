import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, Send, CheckCircle, Home, Building2, Factory, Ruler, MessageSquare, User, Phone, Mail } from 'lucide-react';
import { QuoteData } from '../types';

const steps = [
  { id: 1, title: 'Project Details' },
  { id: 2, title: 'Requirements' },
  { id: 3, title: 'Contact Info' },
];

export default function QuoteWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<QuoteData>({
    service: 'Steel Carports',
    propertyType: 'Residential',
    dimensions: '',
    requirements: '',
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const updateFormData = (field: keyof QuoteData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        setIsCompleted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      alert('Error connecting to server. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isCompleted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4 font-display">Quote Request Received!</h3>
        <p className="text-gray-600 mb-8 max-w-sm mx-auto leading-relaxed">
          Thank you, {formData.name.split(' ')[0]}. We've received your request for {formData.service} and will forward the details to our team immediately. Expect a call or email shortly.
        </p>
        <button 
          onClick={() => {
            setIsCompleted(false);
            setCurrentStep(1);
            setFormData({
              service: 'Steel Carports',
              propertyType: 'Residential',
              dimensions: '',
              requirements: '',
              name: '',
              phone: '',
              email: '',
            });
          }}
          className="text-blue-600 font-bold hover:underline"
        >
          Send another request
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gray-50 px-8 py-4 flex justify-between items-center border-b border-gray-100">
        <div className="flex gap-2">
          {steps.map((step) => (
            <div 
              key={step.id}
              className={`h-2 rounded-full transition-all duration-500 ${
                currentStep >= step.id ? 'w-8 bg-blue-600' : 'w-2 bg-gray-200'
              }`}
            />
          ))}
        </div>
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="p-8 md:p-10">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <label className="text-sm font-bold text-gray-700 font-sans block">Service of Interest</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Steel Carports', 'Shadeports', 'Roofing', 'Painting'].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => updateFormData('service', s)}
                      className={`py-3 px-4 rounded-xl text-sm font-medium transition-all text-center border ${
                        formData.service === s 
                          ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20' 
                          : 'bg-gray-50 border-gray-100 text-gray-600 hover:border-blue-200'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-gray-700 font-sans block">Property Type</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'Residential', icon: Home },
                    { id: 'Commercial', icon: Building2 },
                    { id: 'Industrial', icon: Factory },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => updateFormData('propertyType', p.id)}
                      className={`flex flex-col items-center gap-2 py-4 px-2 rounded-xl text-xs font-bold transition-all border ${
                        formData.propertyType === p.id 
                          ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20' 
                          : 'bg-gray-50 border-gray-100 text-gray-600 hover:border-blue-200'
                      }`}
                    >
                      <p.icon size={20} />
                      {p.id}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 font-sans">
                  <Ruler size={16} className="text-blue-500" />
                  Approximate Dimensions (if known)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 6m x 6m double carport"
                  value={formData.dimensions}
                  onChange={(e) => updateFormData('dimensions', e.target.value)}
                  className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 rounded-xl px-4 py-4 transition-all"
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 font-sans">
                  <MessageSquare size={16} className="text-blue-500" />
                  Specific Requirements or Preferences
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us more about your design preferences..."
                  value={formData.requirements}
                  onChange={(e) => updateFormData('requirements', e.target.value)}
                  className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 rounded-xl px-4 py-4 transition-all"
                ></textarea>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 font-sans">
                  <User size={16} className="text-blue-500" />
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 rounded-xl px-4 py-4 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 font-sans">
                  <Phone size={16} className="text-blue-500" />
                  Contact Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="061 823 0129"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 rounded-xl px-4 py-4 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 font-sans">
                  <Mail size={16} className="text-blue-500" />
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="w-full bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 rounded-xl px-4 py-4 transition-all"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between items-center mt-10 border-t border-gray-50 pt-8">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={18} />
              Back
            </button>
          ) : (
            <div />
          )}

          {currentStep < steps.length ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-blue-600/20"
            >
              Continue
              <ArrowRight size={18} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-blue-600/20 disabled:bg-blue-400"
            >
              {isSubmitting ? 'Sending...' : 'Get Free Quote'}
              <Send size={18} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
