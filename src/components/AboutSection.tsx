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
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* 4 Decorative 3D Images in Corners */}
      {/* Top-Left: AI themed 3D Icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-0"
      >
        <img src={aiIcon} alt="AI Neural Network 3D Icon" className="w-full h-auto drop-shadow-[0_10px_30px_rgba(139,92,246,0.3)] animate-pulse" />
      </FadeIn>

      {/* Bottom-Left: Data Science 3D Object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none z-0"
      >
        <img src={dataIcon} alt="Data Science 3D Object" className="w-full h-auto drop-shadow-[0_10px_30px_rgba(59,130,246,0.3)]" />
      </FadeIn>

      {/* Top-Right: Python themed 3D Icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-0"
      >
        <img src={pythonIcon} alt="Python Programming 3D Icon" className="w-full h-auto drop-shadow-[0_10px_30px_rgba(245,158,11,0.3)]" />
      </FadeIn>

      {/* Bottom-Right: Full-stack themed 3D Group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none z-0"
      >
        <img src={fullstackIcon} alt="Full-stack Database 3D Group" className="w-full h-auto drop-shadow-[0_10px_30px_rgba(16,185,129,0.3)]" />
      </FadeIn>

      {/* Main Content Box */}
      <div className="z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading and text */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Scroll-driven character opacity animated text */}
        <AnimatedText
          text={paragraphText}
          className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] mx-auto text-[clamp(1rem,2vw,1.35rem)]"
        />

        {/* Gap between text block and button */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact Button */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton label="Contact Me" onClick={onOpenContact} href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
};
