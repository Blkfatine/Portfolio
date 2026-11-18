import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Activity, Code, CheckCircle2, Cpu, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectsSection: React.FC = () => {
  const { content } = useLanguage();
  const { projects } = content;

  const iconMap: Record<string, React.ElementType> = {
    Activity: Activity,
    Code: Code,
  };

  const badgeColors: Record<string, string> = {
    blue: 'bg-[#9FD7EF]',
    violet: 'bg-[#C3ACFF]',
    pink: 'bg-[#FFD6DF]',
    yellow: 'bg-[#FFEAA0]',
  };

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#9FD7EF] softy-border softy-shadow-sm mb-4">
          <Cpu size={14} className="text-[#2E2833]" />
          <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#2E2833]">
            {projects.badge}
          </span>
        </div>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#2E2833] tracking-tight mb-4">
          {projects.heading}
        </h2>
        <p className="text-base sm:text-lg text-[#2E2833]/80 leading-relaxed">
          {projects.subheading}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.items.map((project) => {
          const Icon = iconMap[project.icon] || Code;
          const badgeBg = badgeColors[project.badgeColor] || 'bg-[#9FD7EF]';

          return (
            <div
              key={project.id}
              className="bg-white softy-border rounded-3xl p-6 sm:p-8 softy-shadow-lg flex flex-col justify-between transition-transform hover:-translate-y-1.5 duration-200 relative group"
            >
              
              <div>
                {/* Top Badge & Icon Row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF7EC] softy-border flex items-center justify-center softy-shadow-sm">
                      <Icon size={24} className="text-[#2E2833]" />
                    </div>
                    <div>
                      <span className={`inline-block px-2.5 py-0.5 rounded-full ${badgeBg} text-[11px] font-heading font-bold text-[#2E2833] uppercase softy-border mb-0.5`}>
                        {project.badge}
                      </span>
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#2E2833]">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <a
                    href="https://github.com/Blkfatine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#FFF7EC] softy-border flex items-center justify-center text-[#2E2833] hover:bg-[#FFEAA0] transition-colors softy-shadow-sm"
                    title="View on GitHub"
                  >
                    <GithubIcon width={18} height={18} />
                  </a>
                </div>

                <p className="text-xs font-heading font-semibold text-[#2E2833]/70 uppercase tracking-wider mb-5">
                  {project.subtitle}
                </p>

                {/* Key Highlights Pill Row */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.highlights.map((highlight, hIdx) => (
                    <span
                      key={hIdx}
                      className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFF7EC] softy-border text-[#2E2833] flex items-center space-x-1.5"
                    >
                      <span className="text-[#C3ACFF]">✦</span>
                      <span>{highlight}</span>
                    </span>
                  ))}
                </div>

                {/* Detailed Description Points */}
                <ul className="space-y-2.5 mb-6 text-sm text-[#2E2833]/85 leading-relaxed">
                  {project.description.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start space-x-2.5">
                      <CheckCircle2 size={16} className="text-[#2E2833] mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Technologies & External Link */}
              <div className="pt-5 border-t-2 border-[#2E2833]/15 mt-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#FFF7EC] softy-border text-[#2E2833]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/Blkfatine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-heading font-bold text-[#2E2833] uppercase hover:underline underline-offset-4"
                  >
                    <span>{projects.inspectCode}</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
