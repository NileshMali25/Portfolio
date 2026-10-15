import React from 'react';
import { FadeIn } from './FadeIn';
import { SERVICES_DATA } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[32px] sm:rounded-t-[48px] md:rounded-t-[60px] px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32 select-none relative z-0"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-10 sm:mb-16 md:mb-24"
            style={{ fontSize: 'clamp(2.2rem, 8vw, 140px)' }}
          >
            Skills &amp; Services
          </h2>
        </FadeIn>

        {/* 4 Service List Items */}
        <div className="w-full max-w-5xl flex flex-col divide-y divide-[#0C0C0C]/15 border-t border-b border-[#0C0C0C]/15">
          {SERVICES_DATA.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.1} y={30}>
              <div className="group py-6 sm:py-8 md:py-12 flex flex-col md:flex-row md:items-start justify-between gap-3 sm:gap-6 hover:bg-[#0C0C0C]/[0.02] px-2 sm:px-4 rounded-2xl transition-colors duration-300">
                {/* Number & Title */}
                <div className="flex items-baseline gap-4 sm:gap-6 md:w-1/2">
                  <span className="text-xl sm:text-2xl md:text-4xl font-light text-[#0C0C0C]/40 group-hover:text-[#B600A8] transition-colors duration-300 font-mono shrink-0">
                    {item.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#0C0C0C] group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="md:w-1/2 text-[#0C0C0C]/75 font-normal leading-relaxed text-sm sm:text-base md:text-lg">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
