import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Download, ArrowRight, Heart, Sparkles, GraduationCap, Briefcase, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { content } = useLanguage();
  const { hero, stats } = content;

  const statIcons = [GraduationCap, Briefcase, Code2, Sparkles];

  return (
    <section className="relative z-10 pt-6 pb-16 md:pt-12 md:pb-24 px-4 sm:px-6 lg:px-12 xl:px-16 overflow-hidden max-w-[1600px] mx-auto">
      
      {/* Desktop Floating Stat Containers - Positioned far at the outer edges, cleared from the title */}
      <div className="hidden xl:block absolute inset-0 pointer-events-none select-none">
        
        {/* Card 1: Bac+5 Engineering Degree (Top Left - level with avatar, far from title) */}
        {stats[0] && (
          <motion.div
            animate={{ y: [-5, 5, -5], rotate: [-2, 0, -2] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ backgroundColor: stats[0].color }}
            className="absolute top-6 left-2 xl:left-4 2xl:left-12 w-52 xl:w-56 2xl:w-64 softy-border rounded-3xl p-4 softy-shadow transition-transform hover:scale-105 pointer-events-auto text-left cursor-default"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-heading font-extrabold text-2xl xl:text-3xl text-[#2E2833] tracking-tight">
                {stats[0].value}
              </span>
              <div className="w-8 h-8 rounded-full bg-white/80 softy-border flex items-center justify-center softy-shadow-sm flex-shrink-0">
                <GraduationCap size={16} className="text-[#2E2833]" />
              </div>
            </div>
            <p className="font-heading font-bold text-xs xl:text-sm text-[#2E2833] leading-snug">
              {stats[0].label}
            </p>
            <p className="text-[11px] text-[#2E2833]/75 font-medium mt-0.5 leading-tight">
              {stats[0].sublabel}
            </p>
          </motion.div>
        )}

        {/* Card 2: 3 Professional Internships (Bottom Left - level with CTA buttons, far from title) */}
        {stats[1] && (
          <motion.div
            animate={{ y: [6, -6, 6], rotate: [1, -1, 1] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            style={{ backgroundColor: stats[1].color }}
            className="absolute top-[380px] xl:top-[420px] left-2 xl:left-4 2xl:left-12 w-52 xl:w-56 2xl:w-64 softy-border rounded-3xl p-4 softy-shadow transition-transform hover:scale-105 pointer-events-auto text-left cursor-default"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-heading font-extrabold text-2xl xl:text-3xl text-[#2E2833] tracking-tight">
                {stats[1].value}
              </span>
              <div className="w-8 h-8 rounded-full bg-white/80 softy-border flex items-center justify-center softy-shadow-sm flex-shrink-0">
                <Briefcase size={16} className="text-[#2E2833]" />
              </div>
            </div>
            <p className="font-heading font-bold text-xs xl:text-sm text-[#2E2833] leading-snug">
              {stats[1].label}
            </p>
            <p className="text-[11px] text-[#2E2833]/75 font-medium mt-0.5 leading-tight">
              {stats[1].sublabel}
            </p>
          </motion.div>
        )}

        {/* Card 3: 6+ Core Languages (Top Right - level with avatar, far from title) */}
        {stats[2] && (
          <motion.div
            animate={{ y: [5, -5, 5], rotate: [2, 0, 2] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            style={{ backgroundColor: stats[2].color }}
            className="absolute top-6 right-2 xl:right-4 2xl:right-12 w-52 xl:w-56 2xl:w-64 softy-border rounded-3xl p-4 softy-shadow transition-transform hover:scale-105 pointer-events-auto text-left cursor-default"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-heading font-extrabold text-2xl xl:text-3xl text-[#2E2833] tracking-tight">
                {stats[2].value}
              </span>
              <div className="w-8 h-8 rounded-full bg-white/80 softy-border flex items-center justify-center softy-shadow-sm flex-shrink-0">
                <Code2 size={16} className="text-[#2E2833]" />
              </div>
            </div>
            <p className="font-heading font-bold text-xs xl:text-sm text-[#2E2833] leading-snug">
              {stats[2].label}
            </p>
            <p className="text-[11px] text-[#2E2833]/75 font-medium mt-0.5 leading-tight">
              {stats[2].sublabel}
            </p>
          </motion.div>
        )}

        {/* Card 4: 100% Commitment to Impact (Bottom Right - level with CTA buttons, far from title) */}
        {stats[3] && (
          <motion.div
            animate={{ y: [-6, 6, -6], rotate: [-1, 1, -1] }}
            transition={{ duration: 5.0, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            style={{ backgroundColor: stats[3].color }}
            className="absolute top-[380px] xl:top-[420px] right-2 xl:right-4 2xl:right-12 w-52 xl:w-56 2xl:w-64 softy-border rounded-3xl p-4 softy-shadow transition-transform hover:scale-105 pointer-events-auto text-left cursor-default"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-heading font-extrabold text-2xl xl:text-3xl text-[#2E2833] tracking-tight">
                {stats[3].value}
              </span>
              <div className="w-8 h-8 rounded-full bg-white/80 softy-border flex items-center justify-center softy-shadow-sm flex-shrink-0">
                <Sparkles size={16} className="text-[#2E2833]" />
              </div>
            </div>
            <p className="font-heading font-bold text-xs xl:text-sm text-[#2E2833] leading-snug">
              {stats[3].label}
            </p>
            <p className="text-[11px] text-[#2E2833]/75 font-medium mt-0.5 leading-tight">
              {stats[3].sublabel}
            </p>
          </motion.div>
        )}

      </div>

      <div className="max-w-3xl 2xl:max-w-4xl mx-auto text-center relative z-10 px-4">
        
        {/* Availability Eyebrow Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white softy-border softy-shadow-sm mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#2E2833]">
            {hero.badgeAvailable}
          </span>
          <Heart size={12} className="text-[#2E2833] fill-[#FFD6DF]" />
        </div>

        {/* Profile Avatar Container with Puffy Border */}
        <div className="flex justify-center mb-6">
          <div className="relative group">
            {/* Background Puffy Shadow */}
            <div className="absolute inset-0 bg-[#C3ACFF] rounded-full translate-x-2 translate-y-2 softy-border"></div>
            
            {/* Main Avatar Frame */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden softy-border-3 bg-[#FFEAA0] shadow-lg group-hover:scale-105 transition-transform duration-300">
              <img
                src="/profile.png"
                alt={hero.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/profile.png";
                }}
              />
            </div>

            {/* Floating Sparkle Badge */}
            <div className="absolute -bottom-2 -right-2 bg-[#FFD6DF] softy-border rounded-full p-2 softy-shadow-sm animate-bounce">
              <Sparkles size={18} className="text-[#2E2833]" />
            </div>
          </div>
        </div>

        {/* Greeting & Name */}
        <p className="font-heading font-medium text-lg text-[#2E2833]/80 mb-2">
          {hero.greeting} <span className="font-bold underline decoration-[#FFD6DF] decoration-4">{hero.name}</span>
        </p>

        {/* Hero Headline - Centered with plenty of breathing room */}
        <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-[50px] xl:text-[54px] text-[#2E2833] leading-[1.18] tracking-tight mb-6 max-w-2xl xl:max-w-2xl 2xl:max-w-3xl mx-auto">
          {hero.headlinePart1}{' '}
          <span className="inline-block px-3 py-0.5 rounded-2xl bg-[#C3ACFF] softy-border transform -rotate-1 softy-shadow-sm">
            {hero.headlineHighlight}
          </span>{' '}
          {hero.headlinePart2}
        </h1>

        {/* Bio / Description */}
        <p className="text-base sm:text-lg text-[#2E2833]/80 max-w-2xl mx-auto leading-relaxed mb-8">
          {hero.description}
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
          <a
            href="#experience"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#2E2833] text-[#FFF7EC] font-heading font-bold text-sm tracking-wider uppercase softy-border softy-btn-press flex items-center justify-center space-x-2 shadow-md hover:bg-[#3B3341]"
          >
            <span>{hero.viewWork}</span>
            <ArrowRight size={16} />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FFD6DF] text-[#2E2833] font-heading font-bold text-sm tracking-wider uppercase softy-border softy-btn-press flex items-center justify-center space-x-2"
          >
            <span>{hero.getInTouch}</span>
            <Heart size={14} className="fill-[#2E2833]" />
          </a>

          <a
            href={hero.cvFile}
            download={hero.cvFileName}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white text-[#2E2833] font-heading font-bold text-sm tracking-wider uppercase softy-border softy-btn-press flex items-center justify-center space-x-2"
          >
            <Download size={16} />
            <span>{hero.downloadCV}</span>
          </a>
        </div>

        {/* Location & Quick Credential Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-semibold text-[#2E2833]/70 uppercase tracking-wider">
          {hero.metaPills.map((pill, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <span>•</span>}
              <span>{pill}</span>
            </React.Fragment>
          ))}
        </div>

        {/* Mobile & Tablet Responsive Stat Cards (< xl) with generous margin */}
        <div className="xl:hidden mt-12 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-4 max-w-xl mx-auto text-left">
          {stats.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <div
                key={idx}
                style={{ backgroundColor: stat.color }}
                className="softy-border rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 softy-shadow transition-transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#2E2833] tracking-tight">
                    {stat.value}
                  </span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/80 softy-border flex items-center justify-center softy-shadow-sm flex-shrink-0">
                    <Icon size={14} className="text-[#2E2833]" />
                  </div>
                </div>
                <div>
                  <p className="font-heading font-bold text-xs sm:text-sm text-[#2E2833] leading-snug">
                    {stat.label}
                  </p>
                  <p className="text-[10px] sm:text-xs text-[#2E2833]/70 font-medium mt-0.5 leading-tight">
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
