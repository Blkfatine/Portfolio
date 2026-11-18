import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Wrench, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { content } = useLanguage();
  const { skills } = content;
  const [activeFilter, setActiveFilter] = useState<'all' | string>('all');

  const categoryBgColors: Record<string, string> = {
    violet: 'bg-[#C3ACFF]',
    pink: 'bg-[#FFD6DF]',
    yellow: 'bg-[#FFEAA0]',
    blue: 'bg-[#9FD7EF]',
    cream: 'bg-[#FFF7EC]',
  };

  const filteredCategories = activeFilter === 'all'
    ? skills.categories
    : skills.categories.filter((cat) => cat.title.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#C3ACFF] softy-border softy-shadow-sm mb-4">
          <Wrench size={14} className="text-[#2E2833]" />
          <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#2E2833]">
            {skills.badge}
          </span>
        </div>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#2E2833] tracking-tight mb-4">
          {skills.heading}
        </h2>
        <p className="text-base sm:text-lg text-[#2E2833]/80 leading-relaxed">
          {skills.subheading}
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {skills.filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider softy-border softy-btn-press ${
                activeFilter === tab.id
                  ? 'bg-[#2E2833] text-[#FFF7EC] shadow-md'
                  : 'bg-white text-[#2E2833] hover:bg-[#FFEAA0]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category, cIdx) => {
          const headerBg = categoryBgColors[category.color] || 'bg-[#C3ACFF]';

          return (
            <div
              key={cIdx}
              className="bg-white softy-border rounded-3xl overflow-hidden softy-shadow transition-transform hover:-translate-y-1.5 duration-200 flex flex-col justify-between"
            >
              {/* Category Header */}
              <div className={`${headerBg} p-4 border-b-2 border-[#2E2833] flex items-center justify-between`}>
                <h3 className="font-heading font-bold text-base text-[#2E2833]">
                  {category.title}
                </h3>
                <span className="w-6 h-6 rounded-full bg-white softy-border flex items-center justify-center text-xs font-bold">
                  {category.skills.length}
                </span>
              </div>

              {/* Skills Cloud */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group relative bg-[#FFF7EC] hover:bg-[#FFEAA0] softy-border rounded-2xl px-3 py-1.5 transition-all cursor-default flex items-center space-x-1.5 softy-shadow-sm hover:-translate-y-0.5"
                    >
                      <Sparkles size={11} className="text-[#C3ACFF]" />
                      <span className="text-xs font-bold text-[#2E2833]">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-[10px] uppercase font-heading font-bold px-1.5 py-0.2 bg-white/80 rounded-full softy-border text-[#2E2833]/80">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
