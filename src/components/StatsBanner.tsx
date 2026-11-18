import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Briefcase, Code2, Sparkles } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  const { content } = useLanguage();
  const { stats } = content;

  const icons = [GraduationCap, Briefcase, Code2, Sparkles];

  return (
    <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div
              key={index}
              style={{ backgroundColor: stat.color }}
              className="softy-border rounded-3xl p-5 sm:p-6 softy-shadow transition-transform hover:-translate-y-1.5 duration-200 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#2E2833] tracking-tight">
                  {stat.value}
                </span>
                <div className="w-9 h-9 rounded-full bg-white/70 softy-border flex items-center justify-center">
                  <Icon size={18} className="text-[#2E2833]" />
                </div>
              </div>
              <div>
                <p className="font-heading font-bold text-sm sm:text-base text-[#2E2833] leading-snug">
                  {stat.label}
                </p>
                <p className="text-xs text-[#2E2833]/70 font-medium mt-1">
                  {stat.sublabel}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
