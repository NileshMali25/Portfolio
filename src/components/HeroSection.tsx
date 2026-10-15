import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';
import { Code2, ArrowRight, Download, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSectionProps {
  onOpenContact?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] text-[#D7E2EA] px-4 sm:px-6 md:px-12 pt-4 sm:pt-6 pb-12 sm:pb-16 select-none">
      
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-40">
        <nav className="w-full flex items-center justify-between py-3 sm:py-4 border-b border-white/10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#B600A8] animate-pulse" />
            <span className="font-mono font-bold text-base sm:text-lg text-white uppercase tracking-widest">
              Nilesh Mali
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-medium uppercase tracking-wider text-[#D7E2EA]">
            <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }} className="hover:text-[#38BDF8] transition-colors">About</a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick('#skills'); }} className="hover:text-[#38BDF8] transition-colors">Skills</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('#projects'); }} className="hover:text-[#38BDF8] transition-colors">Projects</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} className="hover:text-[#38BDF8] transition-colors">Contact</a>
          </div>

          {/* Right Action & Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ContactButton
              label="Get In Touch"
              onClick={onOpenContact}
              href="#contact"
              className="!px-4 sm:!px-6 !py-2 sm:!py-2.5 !text-[11px] sm:!text-xs"
            />

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-[#1A1C23] border border-white/10 text-white hover:text-[#38BDF8] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-2 p-5 rounded-2xl bg-[#121318]/95 backdrop-blur-xl border border-[#252830] shadow-2xl flex flex-col gap-4 overflow-hidden z-50"
            >
              <div className="flex flex-col gap-3 font-mono text-xs uppercase tracking-widest text-[#D7E2EA]">
                <a
                  href="#about"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }}
                  className="py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#38BDF8] transition-colors flex items-center justify-between"
                >
                  <span>01. About Me</span>
                  <span className="text-white/30">&rarr;</span>
                </a>
                <a
                  href="#skills"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#skills'); }}
                  className="py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#38BDF8] transition-colors flex items-center justify-between"
                >
                  <span>02. Skills &amp; Stack</span>
                  <span className="text-white/30">&rarr;</span>
                </a>
                <a
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#projects'); }}
                  className="py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#38BDF8] transition-colors flex items-center justify-between"
                >
                  <span>03. Featured Projects</span>
                  <span className="text-white/30">&rarr;</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                  className="py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#38BDF8] transition-colors flex items-center justify-between"
                >
                  <span>04. Contact Nilesh</span>
                  <span className="text-white/30">&rarr;</span>
                </a>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <a
                  href="/nilesh_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-[#38BDF8] hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Resume (PDF)</span>
                </a>
                <span className="text-[10px] text-[#94A3B8] font-mono">Jalgaon, India</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </FadeIn>

      {/* Main Hero Content Area Grid */}
      <div className="w-full max-w-7xl mx-auto my-auto py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center z-10">
        
        {/* Left Column (Text, Tagline, CTA Buttons) */}
        <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6">
          
          <FadeIn delay={0.1} y={30}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1C23] border border-[#B600A8]/40 text-[#38BDF8] font-mono text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping shrink-0" />
              <span className="truncate">Available for AI &amp; Full Stack Development</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
              Hi, I'm <br />
              <span className="text-white">Nilesh Mali</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.25} y={30}>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-bold uppercase tracking-wide text-[#38BDF8]">
                AI &amp; Data Science Developer
              </h2>
              <h3 className="text-base sm:text-xl font-medium uppercase tracking-wider text-[#EC4899]">
                Full Stack Developer
              </h3>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} y={20}>
            <p className="text-sm sm:text-base md:text-lg text-[#D7E2EA]/80 font-light max-w-xl leading-relaxed">
              I build immersive, modern web solutions and machine learning systems that blend creativity, performance, and technology.
            </p>
          </FadeIn>

          {/* Action Buttons Row */}
          <FadeIn delay={0.35} y={20}>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); handleNavClick('#projects'); }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-white font-medium uppercase tracking-widest text-xs sm:text-sm transition-all hover:scale-105 shadow-[0_0_30px_rgba(182,0,168,0.4)] text-center cursor-pointer"
                style={{
                  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  outline: '2px solid white',
                  outlineOffset: '-3px',
                }}
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/nilesh_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors text-center cursor-pointer"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>

        </div>

        {/* Right Column (User's Mockup Image with perfect aspect ratio fit) */}
        <div className="lg:col-span-5 flex justify-center relative mt-4 lg:mt-0">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#B600A8]/30 blur-[80px] sm:blur-[100px] pointer-events-none" />

          <FadeIn delay={0.4} y={30} className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px]">
            <Magnet padding={80} strength={2} className="w-full">
              <div className="relative group w-full aspect-[1.58/1] rounded-[20px] sm:rounded-[24px] p-1 sm:p-1.5 bg-gradient-to-b from-[#B600A8] via-[#7621B0] to-[#38BDF8] shadow-[0_0_60px_rgba(182,0,168,0.4)] hover:shadow-[0_0_100px_rgba(56,189,248,0.7)] transition-all duration-700">
                <div className="relative w-full h-full rounded-[16px] sm:rounded-[18px] overflow-hidden bg-[#0C0C0C]">
                  <img
                    src="/nilesh_workspace.jpg"
                    alt="Nilesh Mali Workspace Mockup"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating Tech Code Badge */}
                <div className="absolute -bottom-2 right-2 sm:right-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-[#0C0C0C]/90 backdrop-blur-md border border-white/20 shadow-2xl flex items-center gap-1.5 sm:gap-2 font-mono text-[10px] sm:text-xs text-[#38BDF8]">
                  <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B600A8]" />
                  <span>&lt;/&gt; CODE. BUILD. DEPLOY.</span>
                </div>
              </div>
            </Magnet>
          </FadeIn>

        </div>

      </div>

    </section>
  );
};
