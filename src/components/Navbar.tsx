import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Navbar: React.FC = () => {
  const { lang, toggleLang, content } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: content.nav.about, href: '#about' },
    { label: content.nav.experience, href: '#experience' },
    { label: content.nav.projects, href: '#projects' },
    { label: content.nav.skills, href: '#skills' },
    { label: content.nav.contact, href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 py-3 px-4 sm:px-6 lg:px-8 ${isScrolled ? 'bg-[#FFF7EC]/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto">
        <nav className="flex items-center justify-between bg-white softy-border rounded-full px-4 sm:px-6 py-2.5 softy-shadow transition-all duration-200">
          
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center space-x-2 group"
          >
            <div className="w-9 h-9 rounded-full bg-[#FFD6DF] softy-border flex items-center justify-center font-heading font-bold text-lg group-hover:rotate-12 transition-transform">
              F
            </div>
            <span className="font-heading font-bold text-xl text-[#2E2833] tracking-tight flex items-center">
              Fatine<span className="text-[#C3ACFF] ml-0.5">✦</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3.5 py-1.5 rounded-full font-medium text-sm text-[#2E2833] hover:bg-[#FFEAA0] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Group */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {/* Language Toggle Pill */}
            <button
              onClick={toggleLang}
              className="flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold softy-border bg-[#FFF7EC] hover:bg-[#FFEAA0] transition-colors cursor-pointer"
              title="Toggle Language"
            >
              <span className={lang === 'en' ? 'text-[#2E2833] underline font-extrabold' : 'text-gray-500'}>EN</span>
              <span>/</span>
              <span className={lang === 'fr' ? 'text-[#2E2833] underline font-extrabold' : 'text-gray-500'}>FR</span>
            </button>

            {/* Social Links */}
            <a
              href="https://github.com/Blkfatine"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#FFF7EC] softy-border flex items-center justify-center text-[#2E2833] hover:bg-[#9FD7EF] softy-shadow-sm hover:translate-y-[-2px] transition-all"
              aria-label="GitHub"
            >
              <GithubIcon width={16} height={16} />
            </a>
            <a
              href="https://linkedin.com/in/fatine-belkhammar-791aa1239"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#FFF7EC] softy-border flex items-center justify-center text-[#2E2833] hover:bg-[#9FD7EF] softy-shadow-sm hover:translate-y-[-2px] transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon width={16} height={16} />
            </a>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="hidden lg:inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-[#FFD6DF] font-heading font-bold text-xs tracking-wider uppercase softy-border softy-shadow-sm hover:translate-y-[-2px] hover:bg-[#ffc2cf] transition-all"
            >
              <Sparkles size={13} className="text-[#2E2833]" />
              <span>{content.nav.contactCta}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={toggleLang}
              className="px-2 py-1 rounded-full text-xs font-bold softy-border bg-[#FFF7EC]"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-full bg-[#FFEAA0] softy-border flex items-center justify-center text-[#2E2833]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="sm:hidden mt-3 max-w-6xl mx-auto"
          >
            <div className="bg-white softy-border rounded-3xl p-5 softy-shadow-lg flex flex-col space-y-3">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="px-4 py-2.5 rounded-2xl font-heading font-semibold text-base text-[#2E2833] hover:bg-[#FFEAA0] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t-2 border-[#2E2833] flex items-center justify-between">
                <div className="flex space-x-2">
                  <a
                    href="https://github.com/Blkfatine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#FFF7EC] softy-border flex items-center justify-center text-[#2E2833]"
                  >
                    <GithubIcon width={18} height={18} />
                  </a>
                  <a
                    href="https://linkedin.com/in/fatine-belkhammar-791aa1239"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#FFF7EC] softy-border flex items-center justify-center text-[#2E2833]"
                  >
                    <LinkedinIcon width={18} height={18} />
                  </a>
                </div>

                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="px-5 py-2.5 rounded-full bg-[#FFD6DF] font-heading font-bold text-xs uppercase softy-border softy-shadow-sm"
                >
                  {content.nav.contactCta}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
