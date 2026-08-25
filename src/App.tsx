import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsExperienceSection } from './components/SkillsExperienceSection';
import { ContactFooter } from './components/ContactFooter';
import { ContactModal } from './components/ContactModal';

export const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-['Kanit',sans-serif] overflow-x-clip selection:bg-[#B600A8] selection:text-white">
      {/* 1. HERO SECTION */}
      <HeroSection onOpenContact={() => setIsContactOpen(true)} />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection onOpenContact={() => setIsContactOpen(true)} />

      {/* 4. SERVICES SECTION */}
      <ServicesSection />

      {/* 5. PROJECTS SECTION */}
      <ProjectsSection />

      {/* SKILLS, EXPERIENCE & EDUCATION SECTION */}
      <SkillsExperienceSection />

      {/* CONTACT & FOOTER */}
      <ContactFooter onOpenContact={() => setIsContactOpen(true)} />

      {/* INTERACTIVE CONTACT MODAL */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default App;
