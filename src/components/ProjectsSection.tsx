import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = project.galleryImages && project.galleryImages.length > 0
    ? project.galleryImages
    : [{ url: project.mainImage, label: 'Overview' }];

  const currentImage = images[activeImageIndex] || images[0];

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start']
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky h-[85vh] flex items-center justify-center mb-10"
      style={{ top: `calc(6rem + ${index * 28}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl h-full rounded-[30px] sm:rounded-[45px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
      >
        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D7E2EA]/20 pb-4 md:pb-5">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#D7E2EA] font-mono">
              {project.number}
            </span>
            <div>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#B600A8] block">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Buttons: GitHub Repos & optional Live Link */}
          <div className="flex items-center gap-3">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors duration-200"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </motion.a>

            {project.liveUrl && (
              <LiveProjectButton label="Live Project" href={project.liveUrl} />
            )}
          </div>
        </div>

        {/* Description & Tech Tags */}
        <div className="py-3 sm:py-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm sm:text-base text-[#D7E2EA]/80 max-w-2xl font-light">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-mono bg-[#1A1C23] text-[#38BDF8] stroke-1 border border-[#38BDF8]/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Full Showcase Image Banner */}
        <div className="relative w-full flex-1 rounded-[25px] sm:rounded-[35px] md:rounded-[45px] overflow-hidden bg-[#101217] border border-[#252830] min-h-0 shadow-inner group flex items-center justify-center">
          {/* Blurred ambient background for non-cover images */}
          {currentImage.label !== 'Showcase' && (
            <div
              className="absolute inset-0 bg-cover bg-center blur-2xl opacity-30 scale-110 pointer-events-none transition-all duration-500"
              style={{ backgroundImage: `url(${currentImage.url})` }}
            />
          )}

          <motion.img
            key={currentImage.url}
            src={currentImage.url}
            alt={`${project.title} - ${currentImage.label}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`w-full h-full relative z-10 transition-transform duration-700 ${
              currentImage.label === 'Showcase'
                ? 'object-cover group-hover:scale-105'
                : 'object-contain p-2 sm:p-4 max-h-full'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/80 via-transparent to-transparent opacity-40 pointer-events-none z-10" />

          {/* Interactive gallery image tabs if multiple images exist */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 bg-[#0C0C0C]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 z-20 shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
              {images.map((img, i) => (
                <button
                  key={img.url}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex(i);
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                    activeImageIndex === i
                      ? 'bg-[#10B981] text-black font-bold shadow-[0_0_12px_rgba(16,185,129,0.5)] scale-105'
                      : 'text-[#D7E2EA]/75 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {img.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative z-10 w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 pb-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-24"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Projects
          </h2>
        </FadeIn>

        {/* Sticky Stacking Cards Container */}
        <div className="relative flex flex-col items-center">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={PROJECTS_DATA.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
