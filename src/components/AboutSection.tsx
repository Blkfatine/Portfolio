import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Terminal, BookOpen, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { content } = useLanguage();
  const { about } = content;

  const iconMap: Record<string, React.ElementType> = {
    Award: Award,
    Terminal: Terminal,
    BookOpen: BookOpen,
    Sparkles: Sparkles,
  };

  return (
    <section id="about" className="scroll-mt-28 py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FFD6DF] softy-border softy-shadow-sm mb-4">
          <Sparkles size={14} className="text-[#2E2833]" />
          <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#2E2833]">
            {about.badge}
          </span>
        </div>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#2E2833] tracking-tight mb-4">
          {about.heading}
        </h2>
        <p className="text-base sm:text-lg text-[#2E2833]/80 leading-relaxed">
          {about.subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Card: Detailed Narrative & Credentials */}
        <div className="lg:col-span-7 bg-white softy-border rounded-3xl p-6 sm:p-8 softy-shadow-lg relative">
          
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-[#FFEAA0] softy-border flex items-center justify-center font-heading font-bold text-lg">
              ✦
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-[#2E2833]">
                Fatine Belkhammar
              </h3>
              <p className="text-xs font-semibold text-[#2E2833]/70 uppercase tracking-wider">
                {about.credentialsSubtitle}
              </p>
            </div>
          </div>

          <div className="space-y-4 text-[#2E2833]/85 leading-relaxed text-sm sm:text-base">
            <p>{about.p1}</p>
            <p>{about.p2}</p>
          </div>

          {/* Highlights Checklist (Dynamic Bilingual) */}
          <div className="mt-8 pt-6 border-t-2 border-[#2E2833] grid grid-cols-1 sm:grid-cols-2 gap-3">
            {about.highlights.map((item, idx) => {
              const Icon = iconMap[item.icon] || Sparkles;
              return (
                <div key={idx} className="flex items-center space-x-2 bg-[#FFF7EC] p-3 rounded-2xl softy-border">
                  <Icon size={18} style={{ color: item.color }} />
                  <span className="text-xs font-bold text-[#2E2833]">{item.label}</span>
                </div>
              );
            })}
          </div>

        </div>

        {/* Right Column: Engineering Philosophies */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          <div className="px-1">
            <h3 className="font-heading font-bold text-lg text-[#2E2833] uppercase tracking-wider mb-2">
              {about.philosophyTitle}
            </h3>
          </div>

          {about.philosophies.map((item, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: item.bgColor }}
              className="softy-border rounded-3xl p-5 softy-shadow transition-transform hover:-translate-y-1 duration-200"
            >
              <div className="flex items-start space-x-3.5">
                <span className="text-2xl p-2 bg-white rounded-2xl softy-border">
                  {item.emoji}
                </span>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#2E2833] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#2E2833]/80 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};
