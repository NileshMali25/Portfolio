import React from 'react';
import { FadeIn } from './FadeIn';
import { Briefcase, GraduationCap, Award, Cpu } from 'lucide-react';

export const SkillsExperienceSection: React.FC = () => {
  const technicalSkills = [
    { category: 'Languages', skills: ['Python', 'Java', 'C++', 'JavaScript', 'HTML', 'CSS'] },
    { category: 'Frontend', skills: ['React', 'Vite', 'Tailwind CSS'] },
    { category: 'Backend & DB', skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Socket.io', 'JWT'] },
    { category: 'AI & Data Science', skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Streamlit'] },
    { category: 'Tools & Cloud', skills: ['Git', 'GitHub', 'Razorpay', 'Vercel', 'Netlify', 'XAMPP'] }
  ];

  const certifications = [
    'Cyber Security Certification',
    'Java Programming Certification',
    'AI / Technology Certification -- Infosys Springboard'
  ];

  return (
    <section
      id="skills"
      className="w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-20 border-t border-[#252830]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        
        {/* Technical Skills Showcase */}
        <div>
          <FadeIn delay={0} y={30}>
            <div className="flex items-center gap-3 mb-10">
              <Cpu className="w-8 h-8 text-[#B600A8]" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
                Technical Skills
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((group, idx) => (
              <FadeIn key={group.category} delay={idx * 0.1} y={20}>
                <div className="bg-[#121318] p-6 rounded-2xl border border-[#252830] hover:border-[#B600A8]/50 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-[#38BDF8] mb-4 uppercase tracking-wider font-mono">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-sm font-medium bg-[#1C1E26] text-[#D7E2EA] border border-[#2A2E3B] hover:border-[#B600A8] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Experience & Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Experience */}
          <FadeIn delay={0.1} y={30}>
            <div className="bg-[#121318] p-8 rounded-3xl border border-[#252830] h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-7 h-7 text-[#38BDF8]" />
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                    Experience
                  </h3>
                </div>
                <div className="border-l-2 border-[#38BDF8] pl-5 py-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] bg-[#38BDF8]/10 px-3 py-1 rounded-full">
                    Duration: 1 Month
                  </span>
                  <h4 className="text-xl font-bold text-white mt-3">
                    Oasis Infobyte
                  </h4>
                  <p className="text-[#D7E2EA]/80 font-medium text-base">
                    Web Development Intern
                  </p>
                  <p className="text-sm text-[#94A3B8] mt-2 leading-relaxed">
                    Designed and built web application modules using modern web technologies, responsive layouts, and interactive UI components.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Education */}
          <FadeIn delay={0.2} y={30}>
            <div className="bg-[#121318] p-8 rounded-3xl border border-[#252830] h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-7 h-7 text-[#EC4899]" />
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                    Education
                  </h3>
                </div>
                <div className="border-l-2 border-[#EC4899] pl-5 py-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#EC4899] bg-[#EC4899]/10 px-3 py-1 rounded-full">
                    Graduation Year: 2028
                  </span>
                  <h4 className="text-xl font-bold text-white mt-3">
                    B.Tech — Artificial Intelligence &amp; Data Science
                  </h4>
                  <p className="text-[#D7E2EA]/80 font-semibold text-base mt-1">
                    CGPA: <span className="text-[#EC4899]">7.99 / 10</span>
                  </p>
                  <p className="text-sm text-[#94A3B8] mt-2 leading-relaxed">
                    Core focus on Machine Learning algorithms, Data Structures, Artificial Intelligence, Database Management Systems, and Software Engineering.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Certifications Showcase */}
        <div>
          <FadeIn delay={0.1} y={30}>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-7 h-7 text-[#F59E0B]" />
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                Certifications
              </h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <FadeIn key={cert} delay={idx * 0.1} y={20}>
                <div className="bg-[#121318] p-6 rounded-2xl border border-[#252830] flex items-start gap-4 hover:border-[#F59E0B]/50 transition-colors">
                  <div className="p-3 rounded-xl bg-[#F59E0B]/10 text-[#F59E0B]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base leading-snug">
                      {cert}
                    </h4>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
