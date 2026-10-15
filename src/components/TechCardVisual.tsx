import React from 'react';

interface TechCardVisualProps {
  title: string;
  subtitle: string;
  gradientStart: string;
  gradientEnd: string;
  iconPath: string;
}

export const TechCardVisual: React.FC<TechCardVisualProps> = ({
  title,
  subtitle,
  gradientStart,
  gradientEnd,
  iconPath
}) => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[#121318] p-6 flex flex-col justify-between select-none">
      {/* Background Gradient & Blur Orb */}
      <div
        className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: gradientStart }}
      />
      <div
        className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: gradientEnd }}
      />

      {/* Grid Pattern Lines */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Top Header Row */}
      <div className="relative z-10 flex items-center justify-between">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10"
          style={{ background: '#1A1C23', color: gradientStart }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d={iconPath} />
          </svg>
        </div>
        <span
          className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase border"
          style={{
            background: `${gradientStart}20`,
            color: '#D7E2EA',
            borderColor: `${gradientStart}50`
          }}
        >
          PRO
        </span>
      </div>

      {/* Title & Subtitle */}
      <div className="relative z-10 mt-3 sm:mt-4">
        <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-[#94A3B8] font-normal mt-1">
          {subtitle}
        </p>
      </div>

      {/* Interactive Progress Line */}
      <div className="relative z-10 w-full mt-4">
        <div className="w-full h-1 bg-[#262934] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: '55%',
              background: `linear-gradient(90deg, ${gradientStart}, ${gradientEnd})`
            }}
          />
        </div>
      </div>
    </div>
  );
};
