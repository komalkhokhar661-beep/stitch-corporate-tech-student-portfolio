import React from 'react';

export default function About({ profile, aboutHighlights }) {
  const pillars = [
    {
      index: "01",
      title: "Business & Operational Foundations",
      subtitle: "Strategic Management & Systems",
      description: "Structured organizational principles, supply chain awareness, operational workflows, and root-cause diagnosis applied directly to complex enterprise challenges.",
      tag: "Strategic Core",
      icon: "corporate_fare"
    },
    {
      index: "02",
      title: "Data Modeling & BI Intelligence",
      subtitle: "Quantitative Rigor & Visualization",
      description: "Normalizing complex operational and financial spreadsheets into relational data models, calculated DAX metrics, and decision-grade Power BI dashboards.",
      tag: "Intelligence & BI",
      icon: "insights"
    },
    {
      index: "03",
      title: "Applied AI & Modern Technology",
      subtitle: "Generative AI & Automation",
      description: "Leveraging structured prompt engineering, automated generative AI workflows, and modern digital tooling to accelerate executive synthesis and business problem solving.",
      tag: "AI-Native Execution",
      icon: "psychology"
    }
  ];

  return (
    <section className="w-full bg-[#F4F3EE] py-16 sm:py-20 lg:py-28 border-y border-slate-200/80 relative overflow-hidden" id="about">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200/90">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-blue-700 font-mono text-xs tracking-wider uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_6px_#2563eb]" />
              01 / Perspective &amp; Positioning
            </div>
            <h2 className="font-headline font-bold font-section-headline text-slate-950 tracking-tight">
              Bridging Strategic Business with <span className="text-blue-600">Intelligent Analytics</span>
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-700 font-mono text-xs shadow-subtle self-start md:self-end">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Geeta University • 8.77 CGPA Distinction</span>
          </div>
        </div>

        {/* Editorial Two-Column Magazine Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Thesis Statement & Narrative (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Bold Editorial Pull Quote */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-600">
              <blockquote className="font-headline font-medium text-xl sm:text-2xl text-slate-900 leading-snug tracking-tight">
                &ldquo;Data without business context is merely noise. Management strategy without quantitative analytics is guesswork.&rdquo;
              </blockquote>
            </div>

            {/* Narrative Body */}
            <div className="flex flex-col gap-4 font-body text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                {profile?.bio || "I am a Bachelor of Business Administration (BBA) scholar with a focus on data analytics, business systems intelligence, and AI-assisted workflows. Combining analytical rigor with creative problem-solving, I engineer interactive executive dashboards, analyze corporate datasets, and design high-impact digital solutions."}
              </p>
              <p className="text-slate-600 text-base">
                My approach unites structured management frameworks—such as operational analysis and financial variance diagnostics—with modern data modeling in Power BI and Excel. By integrating generative AI tools and certified prompt engineering, I help transform raw operational records into actionable clarity for leadership.
              </p>
            </div>

            {/* Credential Tags */}
            <div className="pt-4 border-t border-slate-200/70 flex flex-wrap gap-2.5">
              <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-mono text-xs shadow-sm">
                🎓 BBA Scholar (2024–2027)
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-mono text-xs shadow-sm">
                📊 Power BI &amp; DAX Modeling
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-mono text-xs shadow-sm">
                🤖 Generative AI &amp; Prompt Engineering
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-mono text-xs shadow-sm">
                🏆 Best Intern Cohort 2025
              </span>
            </div>
          </div>

          {/* Right Column: 3 Strategic Pillars Editorial Stack (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-slate-200 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-subtle">
            {pillars.map((pillar, idx) => (
              <div 
                key={pillar.index} 
                className={`flex flex-col gap-3 group ${idx === 0 ? 'pb-6' : idx === 1 ? 'py-6' : 'pt-6'}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200/80 px-2 py-0.5 rounded-md">
                      {pillar.index}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      {pillar.tag}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-blue-600 transition-colors">
                    {pillar.icon}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-headline font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <span className="font-headline text-xs font-medium text-slate-500">
                    {pillar.subtitle}
                  </span>
                </div>

                <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
