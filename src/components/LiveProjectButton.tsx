import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface LiveProjectButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  label = 'Live Project',
  href,
  className = ''
}) => {
  return (
    <motion.a
      href={href || '#'}
      target={href && href !== '#' ? '_blank' : '_self'}
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-wider sm:tracking-widest px-3.5 py-1.5 sm:px-6 sm:py-2.5 text-[11px] sm:text-xs md:text-sm hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer shrink-0 ${className}`}
    >
      <span>{label}</span>
      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
    </motion.a>
  );
};
