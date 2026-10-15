import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { generate3DIconSVG } from '../utils/assets';

interface AboutSectionProps {
  onOpenContact?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const aiIcon = generate3DIconSVG('ai');
  const dataIcon = generate3DIconSVG('data');
  const pythonIcon = generate3DIconSVG('python');
  const fullstackIcon = generate3DIconSVG('fullstack');

  const paragraphText =
    "I'm Nilesh Supadu Mali, an Artificial Intelligence and Data Science engineering student passionate about building intelligent solutions, machine learning systems, and modern full-stack applications. I enjoy transforming ideas into practical technology through Data Science, Machine Learning, AI, and Full Stack Development.";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-4 sm:px-8 md:px-10 py-16 sm:py-24 overflow-hidden select-none"
    >
      {/* 4 Decorative 3D Images in Corners - Hidden or subtle on mobile to prevent blocking text */}
      {/* Top-Left: AI themed 3D Icon */}
      <FadeIn
        delay={0.1}
        x={-50}
        y={0}
        duration={0.9}
        className="absolute top-[3%] left-[1%] sm:left-[2%] md:left-[4%] w-[60px] sm:w-[110px] md:w-[180px] pointer-events-none z-0 opacity-20 sm:opacity-60 md:opacity-100"
      >
        <img src={aiIcon} alt="AI Neural Network 3D Icon" className="w-full h-auto drop-shadow-[0_10px_30px_rgba(139,92,246,0.3)] animate-pulse" />
      </FadeIn>

      {/* Bottom-Left: Data Science 3D Object */}
      <FadeIn
        delay={0.25}
        x={-50}
        y={0}
        duration={0.9}
        className="absolute bottom-[5%] left-[2%] sm:left-[5%] md:left-[8%] w-[55px] sm:w-[100px] md:w-[160px] pointer-events-none z-0 opacity-20 sm:opacity-60 md:opacity-100"
      >
        <img src={dataIcon} alt="Data Science 3D Object" className="w-full h-auto drop-shadow-[0_10px_30px_rgba(59,130,246,0.3)]" />
      </FadeIn>

      {/* Top-Right: Python themed 3D Icon */}
      <FadeIn
        delay={0.15}
        x={50}
        y={0}
        duration={0.9}
        className="absolute top-[3%] right-[1%] sm:right-[2%] md:right-[4%] w-[60px] sm:w-[110px] md:w-[180px] pointer-events-none z-0 opacity-20 sm:opacity-60 md:opacity-100"
      >
        <img src={pythonIcon} alt="Python Programming 3D Icon" className="w-full h-auto drop-shadow-[0_10px_30px_rgba(245,158,11,0.3)]" />
      </FadeIn>

      {/* Bottom-Right: Full-stack themed 3D Group */}
      <FadeIn
        delay={0.3}
        x={50}
        y={0}
        duration={0.9}
        className="absolute bottom-[5%] right-[2%] sm:right-[5%] md:right-[8%] w-[65px] sm:w-[115px] md:w-[180px] pointer-events-none z-0 opacity-20 sm:opacity-60 md:opacity-100"
      >
        <img src={fullstackIcon} alt="Full-stack Database 3D Group" className="w-full h-auto drop-shadow-[0_10px_30px_rgba(16,185,129,0.3)]" />
      </FadeIn>

      {/* Main Content Box */}
      <div className="z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-2 sm:px-4">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 150px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading and text */}
        <div className="h-8 sm:h-12 md:h-16" />

        {/* Scroll-driven character opacity animated text */}
        <AnimatedText
          text={paragraphText}
          className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] mx-auto text-sm sm:text-base md:text-xl"
        />

        {/* Gap between text block and button */}
        <div className="h-10 sm:h-16 md:h-20" />

        {/* Contact Button */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton label="Contact Me" onClick={onOpenContact} href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
};
