import React from 'react';

export default function Footer({ profile }) {
  const email = profile?.email || 'pushparani10290@gmail.com';
  const linkedin = 'https://www.linkedin.com/in/pushpa-rani-36b6052a9/';

  return (
    <footer className="w-full bg-[#F4F3EE] border-t border-slate-200/80 mt-16 sm:mt-24">
      <div className="max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <span className="font-headline font-bold text-xl sm:text-2xl text-slate-950">Pushpa Rani</span>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono text-[11px] font-semibold">
                BBA • Data Analytics &amp; AI
              </span>
            </div>
            <a
              href={`mailto:${email}`}
              target="_self"
              id="footer-email-link"
              className="font-mono text-xs text-slate-500 hover:text-blue-600 transition-colors pt-1 cursor-pointer relative z-10"
              title={`Click to email ${email}`}
            >
              {email}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin-btn"
              aria-label="LinkedIn Profile"
              className="px-4 py-2 rounded-xl bg-white border border-slate-200/90 flex items-center gap-2 text-xs font-headline font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-all duration-200 shadow-subtle"
            >
              <span className="material-symbols-outlined text-[18px]">share</span>
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${email}`}
              target="_self"
              id="footer-email-btn"
              aria-label="Email Pushpa Rani"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 text-xs font-headline font-semibold shadow-glow-primary transition-all duration-200 cursor-pointer relative z-10"
              title={`Direct email to ${email}`}
            >
              <span className="material-symbols-outlined text-[18px] pointer-events-none">mail</span>
              <span className="pointer-events-none">Email Pushpa</span>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-slate-500">
            &copy; 2026 Pushpa Rani • Geeta University. All rights reserved.
          </p>
          <p className="font-body text-xs text-slate-500 italic text-center sm:text-right">
            &quot;Turning data, creativity and technology into meaningful business solutions.&quot;
          </p>
        </div>
      </div>
    </footer>
  );
}
