import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mail, Phone, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './SocialIcons';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const whatsappUrl = `https://wa.me/919356315793?text=${encodeURIComponent(
    formData.message
      ? `Hi Nilesh! My name is ${formData.name || 'Visitor'}${formData.email ? ` (${formData.email})` : ''}.\n\nMessage: ${formData.message}`
      : `Hi Nilesh! I saw your portfolio and would like to connect regarding an AI / Full Stack project.`
  )}`;

  const mailtoUrl = `mailto:nilu12969@gmail.com?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${formData.name || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/nilu12969@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || (data.message && data.message.includes('Activation'))) {
        setStatus('success');
      } else {
        throw new Error(data.message || 'Failed to dispatch email.');
      }
    } catch (err: any) {
      console.error('Contact Form Submission Error:', err);
      setStatus('error');
      setErrorMessage(
        err.message || 'Could not send automatically. Please reach out directly via WhatsApp or Email.'
      );
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({ name: '', email: '', message: '' });
    onClose();
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
              onClick={handleReset}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#1F232D] text-[#D7E2EA] hover:text-white hover:bg-[#B600A8] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {status === 'success' ? (
              <div className="py-8 flex flex-col items-center text-center gap-4">
                <CheckCircle className="w-16 h-16 text-[#10B981] animate-bounce" />
                <h3 className="text-2xl font-bold text-white">Email Sent Successfully!</h3>
                <p className="text-[#94A3B8] text-sm max-w-md">
                  Thank you for reaching out! Your message was dispatched directly to <span className="text-[#38BDF8]">nilu12969@gmail.com</span>. Nilesh will get back to you shortly.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 w-full justify-center">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-black font-semibold text-xs uppercase tracking-wider transition-all"
                  >
                    <WhatsappIcon className="w-4 h-4" />
                    <span>Instant WhatsApp Follow-up</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full bg-[#1F232D] hover:bg-white/10 text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : status === 'error' ? (
              <div className="py-6 flex flex-col items-center text-center gap-4">
                <AlertCircle className="w-14 h-14 text-[#EF4444]" />
                <h3 className="text-xl font-bold text-white">Automatic Dispatch Notice</h3>
                <p className="text-[#94A3B8] text-sm max-w-md">
                  {errorMessage}
                </p>

                <div className="flex flex-col gap-3 w-full max-w-sm mt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <WhatsappIcon className="w-4 h-4" />
                    <span>Send via WhatsApp (+91-9356315793)</span>
                  </a>

                  <a
                    href={mailtoUrl}
                    className="w-full py-3 rounded-full bg-[#38BDF8] hover:bg-[#0284C7] text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email Client</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="text-xs text-[#94A3B8] hover:text-white underline mt-1 cursor-pointer"
                  >
                    Back to form
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-xs font-mono text-[#B600A8] uppercase tracking-widest block mb-1">
                  Connect With Nilesh
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-2">
                  Send A Message
                </h3>
                <p className="text-xs text-[#94A3B8] mb-5">
                  Delivered straight to <span className="text-[#38BDF8]">nilu12969@gmail.com</span> or chat via WhatsApp.
                </p>

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
                      rows={3}
                      placeholder="Tell Nilesh about your project or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0C0C0C] border border-[#252830] text-white focus:outline-none focus:border-[#38BDF8] text-sm transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 mt-1">
                    {/* Send Email Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:flex-1 py-3.5 rounded-full text-white font-medium uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer disabled:opacity-50"
                      style={{
                        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                        outline: '2px solid white',
                        outlineOffset: '-3px',
                      }}
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Email</span>
                        </>
                      )}
                    </button>

                    {/* Instant WhatsApp Button */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-black border border-[#25D366]/40 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <WhatsappIcon className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </form>

                {/* Direct Contact Options */}
                <div className="mt-6 pt-5 border-t border-[#252830] flex flex-wrap items-center justify-between text-xs text-[#94A3B8] gap-3">
                  <a href="mailto:nilu12969@gmail.com" className="flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors">
                    <Mail className="w-3.5 h-3.5" /> nilu12969@gmail.com
                  </a>
                  <a href="tel:+919356315793" className="flex items-center gap-1.5 hover:text-[#EC4899] transition-colors">
                    <Phone className="w-3.5 h-3.5" /> +91-9356315793
                  </a>
                  <a href="https://wa.me/919356315793" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors">
                    <WhatsappIcon className="w-3.5 h-3.5" /> WhatsApp
                  </a>
                  <div className="flex items-center gap-3">
                    <a href="https://github.com/NileshMali25" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="GitHub">
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a href="https://www.linkedin.com/in/nilesh-mali-a592a8327" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="LinkedIn">
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
