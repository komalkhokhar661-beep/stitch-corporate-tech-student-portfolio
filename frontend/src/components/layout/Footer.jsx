import React from 'react';

export default function Footer({ profile }) {
  const email = profile?.email || '2405301078@geetauniversity.edu.in';
  const linkedin = profile?.linkedin || 'https://www.linkedin.com/in/pushpa-rani-36b652a9';

  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/30 mt-space-xl">
      <div className="max-w-[80rem] mx-auto px-margin-mobile lg:px-margin py-space-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-space-md pb-space-lg border-b border-outline-variant/30">
          <div className="flex items-center gap-space-sm">
            <span className="font-display font-bold text-xl text-on-surface">Pushpa Rani</span>
            <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-code-badge text-xs">
              BBA • Data Analytics &amp; AI
            </span>
          </div>

          <div className="flex items-center gap-space-sm">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-on-primary transition-all duration-200 shadow-sm"
            >
              <span className="material-symbols-outlined text-[20px]">share</span>
            </a>
            <a
              href={`mailto:${email}`}
              aria-label="Email Pushpa Rani"
              className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-on-primary transition-all duration-200 shadow-sm"
            >
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
          </div>
        </div>

        <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm">
          <p className="font-body text-xs sm:text-sm text-on-surface-variant">
            &copy; 2026 Pushpa Rani. All rights reserved. Built with React, Vite &amp; Node.js Express.
          </p>
          <p className="font-body text-xs sm:text-sm text-secondary italic">
            &quot;Turning data, creativity and technology into meaningful business solutions.&quot;
          </p>
        </div>
      </div>
    </footer>
  );
}
