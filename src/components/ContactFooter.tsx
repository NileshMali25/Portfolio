import React from 'react';
import { FadeIn } from './FadeIn';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './SocialIcons';
import { motion } from 'framer-motion';

interface ContactFooterProps {
  onOpenContact?: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenContact }) => {
  return (
    <footer
      id="contact"
      className="w-full bg-[#07080A] text-[#D7E2EA] px-5 sm:px-8 md:px-10 pt-20 pb-12 border-t border-[#1F232D] select-none"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        
        {/* Top CTA Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-[#1F232D] pb-16">
          <div>
            <FadeIn delay={0} y={30}>
              <span className="text-sm font-mono uppercase tracking-widest text-[#B600A8] block mb-2">
                Get In Touch
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white">
                Let's Build Something Intelligent Together
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} y={30}>
            <motion.a
              href="mailto:nilu12969@gmail.com"
              onClick={(e) => {
                if (onOpenContact) {
                  e.preventDefault();
                  onOpenContact();
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-medium uppercase tracking-widest text-sm sm:text-base cursor-pointer shadow-[0_10px_30px_rgba(182,0,168,0.3)]"
              style={{
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                outline: '2px solid white',
                outlineOffset: '-3px',
              }}
            >
              <span>Send Message</span>
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </FadeIn>
        </div>

        {/* Contact Info & Socials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Email */}
          <FadeIn delay={0.1} y={20}>
            <a
              href="mailto:nilu12969@gmail.com"
              className="flex items-start gap-4 p-6 rounded-2xl bg-[#0C0D12] border border-[#1F232D] hover:border-[#38BDF8]/50 transition-colors group h-full"
            >
              <div className="p-3 rounded-xl bg-[#38BDF8]/10 text-[#38BDF8] group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-[#94A3B8] block">Email</span>
                <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors break-all">
                  nilu12969@gmail.com
                </span>
              </div>
            </a>
          </FadeIn>

          {/* WhatsApp Direct */}
          <FadeIn delay={0.15} y={20}>
            <a
              href="https://wa.me/919356315793?text=Hi%20Nilesh!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 rounded-2xl bg-[#0C0D12] border border-[#1F232D] hover:border-[#25D366]/50 transition-colors group h-full"
            >
              <div className="p-3 rounded-xl bg-[#25D366]/10 text-[#25D366] group-hover:scale-110 transition-transform">
                <WhatsappIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-[#94A3B8] block">WhatsApp</span>
                <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#25D366] transition-colors">
                  +91-9356315793
                </span>
              </div>
            </a>
          </FadeIn>

          {/* Phone */}
          <FadeIn delay={0.2} y={20}>
            <a
              href="tel:+919356315793"
              className="flex items-start gap-4 p-6 rounded-2xl bg-[#0C0D12] border border-[#1F232D] hover:border-[#EC4899]/50 transition-colors group h-full"
            >
              <div className="p-3 rounded-xl bg-[#EC4899]/10 text-[#EC4899] group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-[#94A3B8] block">Phone</span>
                <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#EC4899] transition-colors">
                  +91-9356315793
                </span>
              </div>
            </a>
          </FadeIn>

          {/* Location */}
          <FadeIn delay={0.25} y={20}>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#0C0D12] border border-[#1F232D] h-full">
              <div className="p-3 rounded-xl bg-[#10B981]/10 text-[#10B981]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-[#94A3B8] block">Location</span>
                <span className="text-sm sm:text-base font-bold text-white">
                  Jalgaon, Maharashtra
                </span>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Social Links & Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-[#1F232D]/50 text-sm text-[#94A3B8]">
          <p>© {new Date().getFullYear()} Nilesh Supadu Mali. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              href="https://github.com/NileshMali25"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#121318] border border-[#252830] text-white hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/nilesh-mali-a592a8327"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#121318] border border-[#252830] text-white hover:text-[#0A66C2] hover:border-[#0A66C2]/50 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://wa.me/919356315793"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#121318] border border-[#252830] text-white hover:text-[#25D366] hover:border-[#25D366]/50 transition-all"
            >
              <WhatsappIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </motion.a>
          </div>
        </div>

      </div>
    </footer>
  );
};
