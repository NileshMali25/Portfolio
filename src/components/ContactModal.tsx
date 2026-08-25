import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mail, Phone, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', message: '' });
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          {/* Backdrop click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-[#121318] border border-[#252830] rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-10 text-[#D7E2EA]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#1F232D] text-[#D7E2EA] hover:text-white hover:bg-[#B600A8] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center gap-4">
                <CheckCircle className="w-16 h-16 text-[#10B981] animate-bounce" />
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-[#94A3B8] text-sm max-w-md">
                  Thank you for reaching out, Nilesh will get back to you shortly at <span className="text-[#38BDF8]">{formData.email}</span>.
                </p>
              </div>
            ) : (
              <div>
                <span className="text-xs font-mono text-[#B600A8] uppercase tracking-widest block mb-1">
                  Connect With Nilesh
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-6">
                  Send A Message
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#94A3B8] mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0C0C0C] border border-[#252830] text-white focus:outline-none focus:border-[#38BDF8] text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#94A3B8] mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0C0C0C] border border-[#252830] text-white focus:outline-none focus:border-[#38BDF8] text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#94A3B8] mb-1">Project Details / Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell Nilesh about your project or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0C0C0C] border border-[#252830] text-white focus:outline-none focus:border-[#38BDF8] text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full py-3.5 rounded-full text-white font-medium uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                    style={{
                      background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      outline: '2px solid white',
                      outlineOffset: '-3px',
                    }}
                  >
                    <span>Submit Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                {/* Direct Contact Options */}
                <div className="mt-6 pt-6 border-t border-[#252830] flex flex-wrap items-center justify-between text-xs text-[#94A3B8] gap-3">
                  <a href="mailto:nilu12969@gmail.com" className="flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors">
                    <Mail className="w-3.5 h-3.5" /> nilu12969@gmail.com
                  </a>
                  <a href="tel:+919356315793" className="flex items-center gap-1.5 hover:text-[#EC4899] transition-colors">
                    <Phone className="w-3.5 h-3.5" /> +91-9356315793
                  </a>
                  <div className="flex items-center gap-3">
                    <a href="https://github.com/NileshMali25" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a href="https://www.linkedin.com/in/nilesh-mali-a592a8327" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
