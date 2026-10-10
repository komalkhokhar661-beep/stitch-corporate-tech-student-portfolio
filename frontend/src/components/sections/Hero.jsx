import React, { useState } from 'react';

export default function Hero({ profile, onOpenResume }) {
  const [imgError, setImgError] = useState(false);

  // Real profile asset with reliable fallback
  const fallbackImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuDCPT2mzuGKv981JdyKqKPRHE4vpkYZ3kzMhpYHKj8TxtPGNkDiJStVwX4naoqxGdRYqv2Cf67Z1TgelGZAan6L7r_B5GeUDfTw6z5LZGimCGtMXNJtnK0UDWBdl2aDVniJA21UE02lJuEVsUoCCreHWgfYnrsFT9Wehx-3LEF5Y82BBHTLcsymaeWHpEqiYeRBMeiAi9b9uDuzJ8dqIXfLXUVpgReh0mmKuiaVZ99U-vcoeEBhTgv4kmXIFw8TctIkcg";
  const photoSrc = imgError ? fallbackImg : "/images/pushpa_rani.png";

  const emailAddress = "pushparani10290@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/pushpa-rani-36b6052a9/";

  return (
    <section className="relative w-full max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 lg:pt-20 pb-16 lg:pb-24 overflow-hidden" id="home">
      {/* Editorial Tech Grid Background with Gentle Warm Vignette */}
      <div className="absolute inset-0 bg-grid-tech bg-radial-vignette opacity-70 pointer-events-none -z-10" />

      {/* Subtle restrained light accent orbs */}
      <div className="absolute top-10 -left-20 w-80 h-80 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none animate-float-slow -z-10" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Expressive Headline & Narrative (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6 z-10">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 self-start px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-subtle">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
            </span>
            <span className="font-mono text-[11px] font-semibold text-blue-700 tracking-wider uppercase">
              BBA × DATA ANALYTICS × AI × BUSINESS TECHNOLOGY
            </span>
          </div>

          {/* Large Expressive Editorial Headline */}
          <div className="flex flex-col gap-3">
            <h1 className="font-headline font-bold font-hero-headline text-slate-950 tracking-tight">
              Pushpa <span className="text-blue-600">Rani</span>
            </h1>
            <p className="font-headline font-medium font-editorial-subhead text-slate-800 tracking-tight leading-snug max-w-xl">
              Business Acumen. Data Intelligence. Creative Technology.
            </p>
          </div>

          {/* Value Proposition Narrative */}
          <p className="font-body text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            Bachelor of Business Administration scholar at Geeta University with an 8.77 CGPA distinction. Bridging quantitative data modeling, decision-grade Power BI intelligence, and enterprise AI workflows to convert complex operational numbers into executive clarity.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#projects"
              id="hero-explore-projects-btn"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-headline text-sm font-semibold tracking-wide shadow-glow-primary hover:shadow-lg transition-all duration-200 transform active:scale-95 group"
            >
              <span>Explore Selected Work</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>

            <button
              type="button"
              onClick={onOpenResume}
              id="hero-view-cv-btn"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-slate-950 font-headline text-sm font-semibold tracking-wide border border-slate-200/90 hover:border-blue-300 shadow-subtle transition-all duration-200 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-blue-600">
                description
              </span>
              <span>Curriculum Vitae</span>
            </button>

            <a
              href={`mailto:${emailAddress}`}
              target="_self"
              id="hero-email-btn"
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-600 font-headline text-sm font-semibold border border-slate-200/90 hover:border-blue-300 transition-all duration-200 shadow-subtle cursor-pointer relative z-10"
              title={`Email Pushpa at ${emailAddress}`}
            >
              <span className="material-symbols-outlined text-[18px] pointer-events-none">mail</span>
              <span className="hidden sm:inline pointer-events-none">Email</span>
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-linkedin-btn"
              aria-label="Connect on LinkedIn"
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200/90 hover:border-blue-300 transition-all duration-200 shadow-subtle group"
              title="Pushpa Rani LinkedIn Profile"
            >
              <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">
                share
              </span>
            </a>
          </div>

          {/* Integrated Editorial Metadata Strip (Rhythm instead of cards) */}
          <div className="mt-4 pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex flex-col gap-0.5">
              <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                01 / ACADEMIC STANDING
              </span>
              <div className="font-headline font-bold text-xl sm:text-2xl text-slate-950 flex items-baseline gap-1">
                8.77 <span className="text-xs font-normal text-slate-500">/ 10 CGPA</span>
              </div>
              <span className="font-body text-xs text-slate-600">Geeta University Distinction</span>
            </div>

            <div className="flex flex-col gap-0.5 sm:border-l sm:border-slate-200/80 sm:pl-6">
              <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                02 / INDUSTRY HONORS
              </span>
              <div className="font-headline font-bold text-xl sm:text-2xl text-slate-950">
                Best Intern
              </div>
              <span className="font-body text-xs text-slate-600">TalentGro Global 2025</span>
            </div>

            <div className="flex flex-col gap-0.5 sm:border-l sm:border-slate-200/80 sm:pl-6">
              <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                03 / CORE SPECIALIZATION
              </span>
              <div className="font-headline font-bold text-xl sm:text-2xl text-blue-700">
                Power BI &amp; AI
              </div>
              <span className="font-body text-xs text-slate-600">DAX, Models &amp; Workflows</span>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Framed Portrait (5 Cols) */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-4 lg:mt-0">
          {/* Subtle Outer Ambient Light */}
          <div className="absolute inset-0 max-w-sm mx-auto bg-gradient-to-tr from-blue-500/10 via-sky-500/5 to-indigo-500/10 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

          {/* Architectural Framing Mat */}
          <div className="relative w-full max-w-[22rem] sm:max-w-sm rounded-3xl bg-white p-3.5 sm:p-4 border border-slate-200/90 shadow-elevated">
            {/* Corner Architectural Crosshairs */}
            <span className="absolute top-1.5 left-2 font-mono text-[10px] text-slate-300 select-none">+</span>
            <span className="absolute top-1.5 right-2 font-mono text-[10px] text-slate-300 select-none">+</span>
            <span className="absolute bottom-1.5 left-2 font-mono text-[10px] text-slate-300 select-none">+</span>
            <span className="absolute bottom-1.5 right-2 font-mono text-[10px] text-slate-300 select-none">+</span>

            {/* Photo Container */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 group">
              {/* Authentic Portrait Image */}
              <img
                alt="Pushpa Rani"
                src={photoSrc}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-102 transition-transform duration-700"
              />

              {/* Bottom Subtle Vignette for Label Contrast */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" />

              {/* Image Footer Label Plate */}
              <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-headline font-bold text-xs text-slate-950">Pushpa Rani</span>
                  <span className="font-mono text-[10px] text-slate-500">BBA • Analytics &amp; AI</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono text-[10px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available 2026</span>
                </div>
              </div>
            </div>

            {/* Editorial Caption Under Portrait */}
            <div className="pt-3 px-1 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="uppercase tracking-wider">PORTFOLIO CANDIDATE</span>
              <span>GEETA UNIVERSITY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
