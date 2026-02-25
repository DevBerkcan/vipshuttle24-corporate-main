'use client';

import { useState, useEffect } from 'react';
import { FaPhone, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { useLang } from '@/i18n/LangContext';
import LangSwitcher from './LangSwitcher';

const Header = () => {
  const { t } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.fleet,    href: '#fleet'    },
    { name: t.nav.gallery,  href: '#gallery'  },
    { name: t.nav.booking,  href: '#booking'  },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-midnight/95 backdrop-blur-xl shadow-glow' : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* Logo */}
          <a href="/" className="relative group" aria-label={t.header.home}>
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl lg:text-3xl font-display font-bold text-silver tracking-tight">VIPSHUTTLE</span>
              <span className="text-xl lg:text-2xl font-display font-light text-silver/70">24</span>
            </div>
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-silver to-transparent transition-all duration-500" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10" aria-label="Hauptnavigation">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-silver/80 hover:text-silver font-medium transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-silver group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop: phone + lang switcher */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+491772472408"
              className="flex items-center space-x-2 text-silver hover:text-silver-light transition-all duration-300 hover:shadow-glow rounded-lg px-4 py-2"
              aria-label={t.header.callLabel}
            >
              <FaPhone className="text-sm" aria-hidden="true" />
              <span className="text-sm font-medium">+49 177 2472408</span>
            </a>
            <LangSwitcher />
          </div>

          {/* Mobile: lang switcher + hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <LangSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-silver text-2xl hover:text-silver-light transition-colors duration-300"
              aria-label={isMobileMenuOpen ? t.header.menuClose : t.header.menuOpen}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-midnight/98 backdrop-blur-xl border-t border-silver/10"
          role="navigation"
          aria-label="Mobile Navigation"
        >
          <nav className="container mx-auto px-4 py-8 flex flex-col space-y-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl text-silver hover:text-silver-light transition-colors duration-300 py-2"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-silver/10 space-y-4">
              <a
                href="tel:+491772472408"
                className="flex items-center space-x-3 text-silver py-2"
                aria-label={t.header.callLabel}
              >
                <FaPhone aria-hidden="true" />
                <span>+49 177 2472408</span>
              </a>
              <a
                href="https://wa.me/+491772472408"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-2"
                aria-label={t.header.whatsapp}
              >
                <FaWhatsapp aria-hidden="true" />
                <span>{t.header.whatsapp}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
