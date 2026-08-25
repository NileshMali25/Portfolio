// Helper utility to generate rich, futuristic 3D SVG base64 data URLs for tech assets, 3D icons, hero portrait, and project screenshots

const toBase64SVG = (svgString: string): string => {
  try {
    if (typeof window !== 'undefined' && typeof window.btoa === 'function') {
      return `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svgString)))}`;
    }
    return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
  } catch (e) {
    return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
  }
};

export const generateTechCardSVG = (
  title: string,
  subtitle: string,
  gradientStart: string,
  gradientEnd: string,
  iconSvg: string
): string => {
  const safeId = title.replace(/[^a-zA-Z0-9]/g, '_');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="420" height="270" viewBox="0 0 420 270" fill="none">
    <rect width="420" height="270" rx="16" fill="#121318"/>
    <rect width="420" height="270" rx="16" fill="url(#grad_${safeId})" fill-opacity="0.15"/>
    <rect x="0.5" y="0.5" width="419" height="269" rx="15.5" stroke="url(#border_${safeId})" stroke-opacity="0.3"/>
    
    <!-- Background Tech Grid -->
    <path d="M0 40H420M0 90H420M0 140H420M0 190H420M0 240H420" stroke="#FFFFFF" stroke-opacity="0.04" stroke-width="1"/>
    <path d="M70 0V270M140 0V270M210 0V270M280 0V270M350 0V270" stroke="#FFFFFF" stroke-opacity="0.04" stroke-width="1"/>
    
    <!-- Glowing Orb -->
    <circle cx="340" cy="70" r="90" fill="${gradientStart}" fill-opacity="0.25" filter="blur(40px)"/>
    <circle cx="80" cy="200" r="70" fill="${gradientEnd}" fill-opacity="0.2" filter="blur(40px)"/>
    
    <!-- Icon Container -->
    <g transform="translate(36, 36)">
      <rect width="56" height="56" rx="14" fill="#1A1C23" stroke="${gradientStart}" stroke-opacity="0.5"/>
      <g transform="translate(14, 14)" fill="none" stroke="${gradientEnd}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        ${iconSvg}
      </g>
    </g>

    <!-- Badge -->
    <rect x="300" y="40" width="84" height="24" rx="12" fill="${gradientStart}" fill-opacity="0.2" stroke="${gradientStart}" stroke-opacity="0.4"/>
    <text x="342" y="56" fill="#D7E2EA" font-family="Kanit, sans-serif" font-size="11" font-weight="600" text-anchor="middle" letter-spacing="1">PRO</text>
    
    <!-- Text Content -->
    <text x="36" y="145" fill="#FFFFFF" font-family="Kanit, sans-serif" font-size="22" font-weight="700">${title}</text>
    <text x="36" y="175" fill="#94A3B8" font-family="Kanit, sans-serif" font-size="14" font-weight="400">${subtitle}</text>

    <!-- Interactive Line Visual -->
    <path d="M36 215 H384" stroke="#262934" stroke-width="2" stroke-linecap="round"/>
    <path d="M36 215 H180" stroke="url(#grad_${safeId})" stroke-width="3" stroke-linecap="round"/>
    <circle cx="180" cy="215" r="4" fill="${gradientEnd}"/>
    
    <defs>
      <linearGradient id="grad_${safeId}" x1="0" y1="0" x2="420" y2="270" gradientUnits="userSpaceOnUse">
        <stop stop-color="${gradientStart}"/>
        <stop offset="1" stop-color="${gradientEnd}"/>
      </linearGradient>
      <linearGradient id="border_${safeId}" x1="0" y1="0" x2="420" y2="270" gradientUnits="userSpaceOnUse">
        <stop stop-color="${gradientStart}"/>
        <stop offset="1" stop-color="#334155"/>
      </linearGradient>
    </defs>
  </svg>`;
  return toBase64SVG(svg);
};

// 3D Visual Floating Shapes for About Section Corners
export const generate3DIconSVG = (type: 'ai' | 'data' | 'python' | 'fullstack'): string => {
  let innerVisual = '';
  let color1 = '#7C3AED';
  let color2 = '#06B6D4';

  if (type === 'ai') {
    color1 = '#8B5CF6'; color2 = '#EC4899';
    innerVisual = `
      <circle cx="100" cy="100" r="45" fill="none" stroke="url(#g_ai)" stroke-width="3" stroke-dasharray="6 6"/>
      <circle cx="100" cy="100" r="25" fill="url(#g_ai)" fill-opacity="0.3"/>
      <circle cx="75" cy="85" r="7" fill="#F472B6"/>
      <circle cx="125" cy="85" r="7" fill="#A78BFA"/>
      <circle cx="100" cy="130" r="7" fill="#38BDF8"/>
      <line x1="75" y1="85" x2="125" y2="85" stroke="#FFFFFF" stroke-opacity="0.6"/>
      <line x1="75" y1="85" x2="100" y2="130" stroke="#FFFFFF" stroke-opacity="0.6"/>
      <line x1="125" y1="85" x2="100" y2="130" stroke="#FFFFFF" stroke-opacity="0.6"/>
    `;
  } else if (type === 'data') {
    color1 = '#3B82F6'; color2 = '#10B981';
    innerVisual = `
      <ellipse cx="100" cy="65" rx="40" ry="16" fill="url(#g_ai)"/>
      <path d="M60 65 V105 C60 115 140 115 140 105 V65" fill="url(#g_ai)" fill-opacity="0.6" stroke="#60A5FA" stroke-width="2"/>
      <path d="M60 105 V145 C60 155 140 155 140 145 V105" fill="url(#g_ai)" fill-opacity="0.8" stroke="#34D399" stroke-width="2"/>
    `;
  } else if (type === 'python') {
    color1 = '#F59E0B'; color2 = '#3B82F6';
    innerVisual = `
      <polygon points="100,45 145,70 145,120 100,145 55,120 55,70" fill="url(#g_ai)" fill-opacity="0.4" stroke="#FBBF24" stroke-width="3"/>
      <path d="M100 45 V145 M145 70 L55 120 M55 70 L145 120" stroke="#60A5FA" stroke-width="1.5" stroke-opacity="0.7"/>
      <circle cx="85" cy="75" r="5" fill="#FBBF24"/>
      <circle cx="115" cy="115" r="5" fill="#60A5FA"/>
    `;
  } else {
    color1 = '#10B981'; color2 = '#6366F1';
    innerVisual = `
      <rect x="50" y="55" width="100" height="24" rx="6" fill="url(#g_ai)" stroke="#818CF8" stroke-width="2"/>
      <rect x="50" y="90" width="100" height="24" rx="6" fill="url(#g_ai)" fill-opacity="0.7" stroke="#34D399" stroke-width="2"/>
      <rect x="50" y="125" width="100" height="24" rx="6" fill="url(#g_ai)" fill-opacity="0.4" stroke="#F472B6" stroke-width="2"/>
    `;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
    <defs>
      <linearGradient id="g_ai" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
        <stop stop-color="${color1}"/>
        <stop offset="1" stop-color="${color2}"/>
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="70" fill="url(#g_ai)" fill-opacity="0.15"/>
    ${innerVisual}
  </svg>`;
  return toBase64SVG(svg);
};

// Rich Visual Generator for Project Screenshots
export const generateProjectImageSVG = (
  title: string,
  subtitle: string,
  variant: 'dashboard' | 'map' | 'mobile' | 'code' | 'analytics'
): string => {
  let bodyContent = '';
  if (variant === 'dashboard') {
    bodyContent = `
      <rect x="20" y="20" width="180" height="100" rx="10" fill="#1E293B"/>
      <rect x="215" y="20" width="185" height="100" rx="10" fill="#1E293B"/>
      <path d="M40 80 Q 80 40 120 70 T 180 30" stroke="#38BDF8" stroke-width="3" fill="none"/>
      <path d="M235 75 L 275 45 L 315 65 L 355 35" stroke="#EC4899" stroke-width="3" fill="none"/>
      <rect x="20" y="135" width="380" height="100" rx="10" fill="#0F172A" stroke="#334155"/>
      <line x1="40" y1="165" x2="380" y2="165" stroke="#334155" stroke-width="1"/>
      <line x1="40" y1="195" x2="380" y2="195" stroke="#334155" stroke-width="1"/>
    `;
  } else if (variant === 'map') {
    bodyContent = `
      <rect x="20" y="20" width="380" height="215" rx="12" fill="#020617"/>
      <path d="M30 60 Q 150 140 250 80 T 390 180" stroke="#0284C7" stroke-width="4" fill="none"/>
      <circle cx="150" cy="110" r="12" fill="#EF4444" fill-opacity="0.4"/>
      <circle cx="150" cy="110" r="5" fill="#EF4444"/>
      <circle cx="280" cy="90" r="16" fill="#F59E0B" fill-opacity="0.4"/>
      <circle cx="280" cy="90" r="6" fill="#F59E0B"/>
    `;
  } else if (variant === 'mobile') {
    bodyContent = `
      <rect x="130" y="10" width="160" height="235" rx="20" fill="#0F172A" stroke="#38BDF8" stroke-width="2"/>
      <rect x="150" y="30" width="120" height="35" rx="8" fill="#1E293B"/>
      <rect x="150" y="75" width="120" height="60" rx="8" fill="#B600A8" fill-opacity="0.3" stroke="#B600A8"/>
      <rect x="150" y="145" width="120" height="30" rx="15" fill="#38BDF8"/>
    `;
  } else if (variant === 'analytics') {
    bodyContent = `
      <circle cx="120" cy="125" r="70" stroke="#38BDF8" stroke-width="18" fill="none" stroke-dasharray="280 100"/>
      <circle cx="120" cy="125" r="70" stroke="#EC4899" stroke-width="18" fill="none" stroke-dasharray="100 300" stroke-dashoffset="-220"/>
      <rect x="220" y="50" width="170" height="25" rx="6" fill="#1E293B"/>
      <rect x="220" y="90" width="170" height="25" rx="6" fill="#1E293B"/>
      <rect x="220" y="130" width="170" height="25" rx="6" fill="#1E293B"/>
      <rect x="220" y="170" width="170" height="25" rx="6" fill="#1E293B"/>
    `;
  } else {
    bodyContent = `
      <rect x="20" y="20" width="380" height="215" rx="12" fill="#050811"/>
      <text x="40" y="60" fill="#38BDF8" font-family="monospace" font-size="14">import { MLModel } from 'scikit-learn';</text>
      <text x="40" y="90" fill="#F472B6" font-family="monospace" font-size="14">const model = new RandomForecast();</text>
      <text x="40" y="120" fill="#10B981" font-family="monospace" font-size="14">await model.train(dataset);</text>
      <text x="40" y="150" fill="#FBBF24" font-family="monospace" font-size="14">console.log("Accuracy: 99.8%");</text>
    `;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 270" fill="none">
    <rect width="420" height="270" fill="#0B0F19"/>
    ${bodyContent}
    <rect x="0" y="220" width="420" height="50" fill="#090C14"/>
    <text x="20" y="250" fill="#FFFFFF" font-family="Kanit, sans-serif" font-size="14" font-weight="600">${title}</text>
    <text x="390" y="250" fill="#94A3B8" font-family="Kanit, sans-serif" font-size="12" text-anchor="end">${subtitle}</text>
  </svg>`;
  return toBase64SVG(svg);
};
