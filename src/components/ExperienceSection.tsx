import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase, Calendar, MapPin, Mic, Database, Layers, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { content } = useLanguage();
  const { experience } = content;

  const iconMap: Record<string, React.ElementType> = {
    Mic: Mic,
    Database: Database,
    Layers: Layers,
  };

  const headerColors: Record<string, string> = {
    violet: 'bg-[#C3ACFF]',
    yellow: 'bg-[#FFEAA0]',
    pink: 'bg-[#FFD6DF]',
    blue: 'bg-[#9FD7EF]',
  };

  return (
    <section id="experience" className="scroll-mt-28 py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FFEAA0] softy-border softy-shadow-sm mb-4">
          <Briefcase size={14} className="text-[#2E2833]" />
          <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#2E2833]">
            {experience.badge}
          </span>
        </div>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#2E2833] tracking-tight mb-4">
          {experience.heading}
        </h2>
        <p className="text-base sm:text-lg text-[#2E2833]/80 leading-relaxed">
          {experience.subheading}
        </p>
      </div>

      {/* Experience Cards Stack */}
      <div className="space-y-8">
        {experience.items.map((item) => {
          const Icon = iconMap[item.icon] || Briefcase;
          const headerBg = headerColors[item.badgeColor] || 'bg-[#C3ACFF]';

          return (
            <div
              key={item.id}
              className="bg-white softy-border rounded-3xl overflow-hidden softy-shadow-lg transition-transform hover:-translate-y-1 duration-200"
            >
              {/* Card Header Strip */}
              <div className={`${headerBg} border-b-2 border-[#2E2833] p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4`}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-white softy-border flex items-center justify-center softy-shadow-sm flex-shrink-0">
                    <Icon size={24} className="text-[#2E2833]" />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-white text-[11px] font-heading font-bold text-[#2E2833] uppercase softy-border mb-1">
                      {item.badge}
                    </span>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#2E2833] tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Company & Meta info */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-bold text-[#2E2833]">
                  <span className="bg-white px-3 py-1.5 rounded-full softy-border flex items-center space-x-1.5">
                    <Briefcase size={13} />
                    <span>{item.company}</span>
                  </span>
                  <span className="bg-white px-3 py-1.5 rounded-full softy-border flex items-center space-x-1.5">
                    <MapPin size={13} />
                    <span>{item.location}</span>
                  </span>
                  <span className="bg-white px-3 py-1.5 rounded-full softy-border flex items-center space-x-1.5">
                    <Calendar size={13} />
                    <span>{item.duration}</span>
                  </span>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 sm:p-8">
                
                {/* Achievement Points */}
                <ul className="space-y-3 mb-6">
                  {item.description.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start space-x-3 text-sm sm:text-base text-[#2E2833]/85 leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-[#FFF7EC] softy-border flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 size={13} className="text-[#2E2833]" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Pills */}
                <div className="pt-5 border-t-2 border-[#2E2833]/15">
                  <p className="text-xs font-heading font-bold uppercase tracking-wider text-[#2E2833]/60 mb-3">
                    Technologies & Infrastructure
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF7EC] softy-border text-[#2E2833] hover:bg-[#FFEAA0] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
