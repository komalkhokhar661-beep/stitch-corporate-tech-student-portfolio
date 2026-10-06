import React from 'react';

export default function Experience({ experience }) {
  const defaultExp = [
    {
      id: "talentgro-2025",
      role: "Data Analytics Intern",
      badge: "Best Intern — 2025 Cohort",
      company: "TalentGro Global, Chandigarh",
      period: "June 2025 – September 2025",
      description: "Worked with financial and business data and developed dashboards using Power BI and Microsoft Excel. Presented analytical insights to leadership, supported data-driven decision-making, mentored new interns, and was recognized as Best Intern of the 2025 cohort.",
      competencies: [
        { label: "Financial & Business Data", icon: "insights" },
        { label: "Power BI & Excel Dashboards", icon: "bar_chart" },
        { label: "Analytical Presentation", icon: "present_to_all" },
        { label: "Mentoring & Collaboration", icon: "groups" }
      ]
    }
  ];

  const expList = experience && experience.length > 0 ? experience : defaultExp;

  return (
    <section className="w-full bg-surface-container-low py-space-xl lg:py-space-2xl shadow-sm border-y border-outline-variant/20" id="experience">
      <div className="max-w-[80rem] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs max-w-xl">
          <div className="inline-flex items-center gap-2 text-primary font-code-badge text-xs tracking-wider uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Professional Track
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-on-surface">
            Experience
          </h2>
          <p className="font-body text-sm sm:text-base text-on-surface-variant">
            Applied industry engagements and data analytics performance.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-space-md">
          {expList.map((item) => (
            <div
              key={item.id}
              className="bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col gap-space-md hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-on-surface">
                      {item.role}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-code-badge text-xs font-semibold">
                      {item.badge}
                    </span>
                  </div>
                  <p className="font-display text-sm font-semibold text-primary">
                    {item.company}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-code-badge text-secondary bg-surface-container px-3 py-1.5 rounded-xl self-start sm:self-center">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                {item.description}
              </p>

              {/* 4 Competency Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm pt-space-xs">
                {item.competencies.map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex items-center gap-2.5 text-on-surface font-display text-xs font-medium"
                  >
                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                      {comp.icon}
                    </span>
                    <span className="truncate">{comp.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
