import React, { useState, useEffect } from 'react';

export default function Navbar({ backendConnected }) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const emailAddress = "pushparani10290@gmail.com";

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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-nav border-b border-slate-200/80 shadow-[0_4px_24px_rgba(17,24,39,0.04)]' 
          : 'bg-[#FAF9F5]/92 backdrop-blur-md border-b border-slate-200/60'
      }`}
    >
      <div className="h-20 max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram Brand */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group"
          id="nav-logo"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 p-[1.5px] shadow-sm transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center font-headline font-bold text-lg text-blue-600">
              P
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-headline font-bold text-base text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">
              Pushpa Rani
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
              <span className={`w-1.5 h-1.5 rounded-full ${backendConnected ? 'bg-emerald-500' : 'bg-blue-500'} animate-pulse`} />
              BBA • Data Analytics &amp; AI
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center gap-1 p-1 rounded-full bg-white/95 border border-slate-200/90 shadow-subtle backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-display text-xs px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold shadow-glow-primary'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTAs & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pushparani10290@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-direct-email-button"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-headline text-xs font-semibold tracking-wide shadow-glow-primary transition-all duration-200 transform active:scale-95 cursor-pointer relative z-10"
            title={`Direct Email to ${emailAddress}`}
          >
            <span className="pointer-events-none">Email Pushpa</span>
            <span className="material-symbols-outlined text-[15px] pointer-events-none">send</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-colors shadow-subtle"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-5 py-5 shadow-2xl flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-4 py-2.5 rounded-xl font-display text-sm transition-colors ${
                activeSection === link.id
                  ? 'bg-blue-50 text-blue-700 font-semibold border border-blue-200'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pushparani10290@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-headline text-xs font-semibold shadow-glow-primary cursor-pointer"
            >
              <span className="pointer-events-none">Email Pushpa</span>
              <span className="material-symbols-outlined text-[15px] pointer-events-none">send</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
