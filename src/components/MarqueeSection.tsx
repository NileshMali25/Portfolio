import React, { useEffect, useRef, useState } from 'react';
import { MARQUEE_ROW_1, MARQUEE_ROW_2 } from '../data/portfolioData';
import { TechCardVisual } from './TechCardVisual';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(calculatedOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Tripled rows for seamless width
  const row1Items = [...MARQUEE_ROW_1, ...MARQUEE_ROW_1, ...MARQUEE_ROW_1];
  const row2Items = [...MARQUEE_ROW_2, ...MARQUEE_ROW_2, ...MARQUEE_ROW_2];

  const row1Transform = `translateX(${scrollOffset - 200}px)`;
  const row2Transform = `translateX(${-(scrollOffset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-3 w-max"
          style={{
            transform: row1Transform,
            willChange: 'transform',
            transition: 'transform 0.1s ease-out'
          }}
        >
          {row1Items.map((item, index) => (
            <div
              key={`row1-${item.id}-${index}`}
              className="w-[300px] h-[190px] sm:w-[380px] sm:h-[240px] md:w-[420px] md:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#121318] border border-[#252830]/50 hover:border-[#B600A8]/80 hover:shadow-[0_0_30px_rgba(182,0,168,0.2)] transition-all duration-300"
            >
              <TechCardVisual
                title={item.title}
                subtitle={item.subtitle}
                gradientStart={item.gradientStart}
                gradientEnd={item.gradientEnd}
                iconPath={item.iconPath}
              />
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-3 w-max"
          style={{
            transform: row2Transform,
            willChange: 'transform',
            transition: 'transform 0.1s ease-out'
          }}
        >
          {row2Items.map((item, index) => (
            <div
              key={`row2-${item.id}-${index}`}
              className="w-[300px] h-[190px] sm:w-[380px] sm:h-[240px] md:w-[420px] md:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#121318] border border-[#252830]/50 hover:border-[#38BDF8]/80 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-300"
            >
              <TechCardVisual
                title={item.title}
                subtitle={item.subtitle}
                gradientStart={item.gradientStart}
                gradientEnd={item.gradientEnd}
                iconPath={item.iconPath}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
