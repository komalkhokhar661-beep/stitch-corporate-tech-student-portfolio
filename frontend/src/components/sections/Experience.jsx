import React from 'react';

export default function Experience({ experience }) {
  const defaultExp = [
    {
      id: "talentgro-2025",
      role: "Data Analytics Intern",
      badge: "Best Intern — 2025 Cohort",
      company: "TalentGro Global",
      location: "Chandigarh, India",
      period: "June 2025 – September 2025",
      overview: "Worked extensively with financial and business records to architect interactive dashboards using Power BI and Microsoft Excel. Regularly presented data-driven findings to leadership, mentored incoming intern cohorts, and was formally recognized as Best Intern of the 2025 cohort.",
      contributions: [
        {
          title: "Financial & Business Data Analysis",
          description: "Audited and normalized enterprise financial records to evaluate performance trends, variance metrics, and operational expenses.",
          icon: "insights"
        },
        {
          title: "Power BI & Excel Intelligence",
          description: "Engineered decision-grade dashboards incorporating DAX measures, automated data pipelines, and executive KPI scorecards.",
          icon: "bar_chart"
        },
        {
          title: "Executive Presentation to Leadership",
          description: "Synthesized complex analytical findings into intuitive visual summaries, enabling senior leadership to make faster data-backed decisions.",
          icon: "present_to_all"
        },
        {
          title: "Intern Mentorship & Knowledge Transfer",
          description: "Onboarded and mentored new interns on data modeling standards, dashboard hygiene, and structured analytical problem-solving.",
          icon: "groups"
        }
      ],
      tags: ["Power BI", "Microsoft Excel", "Financial Modeling", "Data Presentation", "Mentorship"]
    }
  ];

  const expList = experience && experience.length > 0 ? experience : defaultExp;
  const currentExp = expList[0];

  return (
    <section className="w-full bg-[#F4F3EE] py-16 sm:py-20 lg:py-28 border-y border-slate-200/80 relative overflow-hidden" id="experience">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-blue-500/5 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200/90">
          <div className="flex flex-col gap-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-blue-700 font-mono text-xs tracking-wider uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_6px_#2563eb]" />
              03 / Professional Engagement
            </div>
            <h2 className="font-headline font-bold font-section-headline text-slate-950 tracking-tight">
              Industry <span className="text-blue-600">Track Record</span>
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-slate-600 max-w-md">
            Hands-on corporate engagement delivering executive Power BI reporting, quantitative analysis, and intern cohort leadership.
          </p>
        </div>

        {/* Editorial Structured Timeline Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-subtle flex flex-col gap-10">
          {/* Top Organization & Role Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded-full">
                  {currentExp.badge || "Best Intern — 2025 Cohort"}
                </span>
                <span className="font-mono text-xs text-slate-500 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px] text-slate-400">location_on</span>
                  {currentExp.location || "Chandigarh, India"}
                </span>
              </div>

              <h3 className="font-headline font-bold text-3xl sm:text-4xl text-slate-950 tracking-tight">
                {currentExp.role}
              </h3>

              <p className="font-headline font-semibold text-lg text-blue-600">
                {currentExp.company}
              </p>
            </div>

            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-slate-100 border border-slate-200 text-slate-800 font-mono text-xs font-semibold self-start lg:self-center">
              <span className="material-symbols-outlined text-[18px] text-blue-600">calendar_today</span>
              <span>{currentExp.period}</span>
            </div>
          </div>

          {/* Narrative Overview */}
          <div className="max-w-4xl">
            <p className="font-body text-base sm:text-lg text-slate-700 leading-relaxed">
              {currentExp.overview || currentExp.description}
            </p>
          </div>

          {/* 4 Structured Contribution Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {(currentExp.contributions || []).map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col gap-3 transition-all hover:bg-white hover:shadow-subtle hover:border-blue-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      {item.icon}
                    </span>
                  </div>
                  <h4 className="font-headline font-bold text-base text-slate-950 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed pl-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Tooling Tags Footer */}
          <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider mr-2">Key Tooling:</span>
              {(currentExp.tags || ["Power BI", "Excel", "Data Analysis", "Presentations", "Mentorship"]).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-mono text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="font-mono text-xs text-slate-500 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-blue-600">verified</span>
              <span>TalentGro Global Official Internship Record</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
