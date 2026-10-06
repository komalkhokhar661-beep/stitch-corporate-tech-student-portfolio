import React, { useState, useEffect } from 'react';

export default function Navbar({ backendConnected }) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-surface/90 backdrop-blur-xl shadow-[0_2px_12px_rgba(11,28,48,0.06)] border-b border-outline-variant/30' 
        : 'bg-surface/85 backdrop-blur-lg'
    }`}>
      <div className="h-20 max-w-[80rem] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-gutter">
        {/* Brand / Logo */}
        <div className="flex items-center gap-space-md">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-space-sm group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center font-display font-bold text-lg shadow-sm group-hover:bg-primary-container transition-colors">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-on-surface tracking-tight group-hover:text-primary transition-colors">
                Pushpa Rani
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-primary font-code-badge font-semibold">
                <span className={`w-2 h-2 rounded-full ${backendConnected ? 'bg-emerald-500' : 'bg-amber-500'} animate-pulse`}></span>
                BBA • Analytics &amp; AI
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center gap-6 lg:gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-display text-sm transition-all relative py-1 ${
                  isActive
                    ? 'text-primary font-bold'
                    : 'text-on-surface-variant font-medium hover:text-primary'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-container rounded-full animate-fade-in" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-space-sm">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-space-lg py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-display text-sm font-semibold shadow-[0_4px_14px_0_rgba(29,78,216,0.25)] hover:shadow-lg transition-all transform active:scale-95"
          >
            <span>Get in Touch</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest/98 backdrop-blur-2xl border-b border-outline-variant/30 px-6 py-6 shadow-xl flex flex-col gap-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-4 py-2.5 rounded-xl font-display text-base transition-colors ${
                activeSection === link.id
                  ? 'bg-primary-fixed text-on-primary-fixed font-bold'
                  : 'text-on-surface hover:bg-surface-container-low font-medium'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-2 text-center py-3 rounded-xl bg-primary-container text-on-primary font-display font-semibold shadow-md"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
