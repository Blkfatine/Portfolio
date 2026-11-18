import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const { content } = useLanguage();
  const { footer } = content;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 border-t-2 border-[#2E2833] bg-[#FFF7EC] relative overflow-hidden">
      
      {/* Decorative Pastel Strip */}
      <div className="h-2 w-full bg-gradient-to-r from-[#FFD6DF] via-[#C3ACFF] to-[#FFEAA0]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b-2 border-[#2E2833]/15">
          
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <span className="w-8 h-8 rounded-full bg-[#FFD6DF] softy-border flex items-center justify-center font-heading font-bold text-sm">
                F
              </span>
              <span className="font-heading font-bold text-2xl text-[#2E2833]">
                Fatine Belkhammar<span className="text-[#C3ACFF] ml-0.5">✦</span>
              </span>
            </div>
            <p className="text-xs font-heading font-semibold text-[#2E2833]/70 uppercase tracking-wider">
              {footer.tagline}
            </p>
          </div>

          {/* Social Links & Back To Top */}
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/Blkfatine"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white softy-border flex items-center justify-center text-[#2E2833] hover:bg-[#9FD7EF] softy-shadow-sm transition-all"
              aria-label="GitHub"
            >
              <GithubIcon width={18} height={18} />
            </a>
            <a
              href="https://linkedin.com/in/fatine-belkhammar-791aa1239"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white softy-border flex items-center justify-center text-[#2E2833] hover:bg-[#9FD7EF] softy-shadow-sm transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon width={18} height={18} />
            </a>

            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-full bg-white softy-border softy-shadow-sm flex items-center space-x-1.5 text-xs font-heading font-bold uppercase tracking-wider text-[#2E2833] hover:bg-[#FFEAA0] transition-all cursor-pointer"
            >
              <span>{footer.backToTop}</span>
              <ArrowUp size={14} />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#2E2833]/75 font-medium gap-3 text-center">
          <p className="font-heading font-semibold">Fatine Belkhammar ✦ Software & AI Engineering</p>
          <p>© {new Date().getFullYear()} Fatine Belkhammar. {footer.rights}</p>
        </div>

      </div>

    </footer>
  );
};
