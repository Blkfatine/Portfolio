import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Download, ArrowRight, Heart, Sparkles, Terminal, Bot, Cpu, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { content } = useLanguage();
  const { hero } = content;

  return (
    <section className="relative z-10 pt-6 pb-20 md:pt-12 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Decorative Floating Tech Pills */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none select-none">
        
        {/* Python Sticker Top Left */}
        <motion.div
          animate={{ y: [-6, 6, -6], rotate: [-6, -4, -6] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 left-10 xl:left-20 bg-[#FFEAA0] softy-border px-4 py-2 rounded-full softy-shadow-sm flex items-center space-x-2 pointer-events-auto cursor-default hover:scale-110 transition-transform"
        >
          <Terminal size={16} className="text-[#2E2833]" />
          <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#2E2833]">Python & FastAPI</span>
        </motion.div>

        {/* LiveKit & AI Top Right */}
        <motion.div
          animate={{ y: [6, -6, 6], rotate: [5, 7, 5] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-16 right-8 xl:right-24 bg-[#C3ACFF] softy-border px-4 py-2 rounded-full softy-shadow-sm flex items-center space-x-2 pointer-events-auto cursor-default hover:scale-110 transition-transform"
        >
          <Bot size={16} className="text-[#2E2833]" />
          <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#2E2833]">LiveKit · Gemini AI</span>
        </motion.div>

        {/* React & Next.js Middle Left */}
        <motion.div
          animate={{ y: [-8, 4, -8], rotate: [-3, -1, -3] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-72 left-6 xl:left-14 bg-[#9FD7EF] softy-border px-4 py-2 rounded-full softy-shadow-sm flex items-center space-x-2 pointer-events-auto cursor-default hover:scale-110 transition-transform"
        >
          <Layers size={16} className="text-[#2E2833]" />
          <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#2E2833]">React · Next.js</span>
        </motion.div>

        {/* Docker Bottom Right */}
        <motion.div
          animate={{ y: [5, -7, 5], rotate: [6, 4, 6] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-80 right-10 xl:right-16 bg-[#FFD6DF] softy-border px-4 py-2 rounded-full softy-shadow-sm flex items-center space-x-2 pointer-events-auto cursor-default hover:scale-110 transition-transform"
        >
          <Cpu size={16} className="text-[#2E2833]" />
          <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#2E2833]">Docker & Microservices</span>
        </motion.div>

      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
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
                  // Fallback if image fails
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

        {/* Hero Headline */}
        <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-[#2E2833] leading-[1.15] tracking-tight mb-6 max-w-3xl mx-auto">
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

      </div>
    </section>
  );
};
