import React from 'react';

export default function Achievements({ achievements }) {
  const defaultAchievements = [
    {
      id: "best-intern",
      index: "01",
      title: "Best Intern — 2025 Cohort",
      subtitle: "TalentGro Global, Chandigarh",
      description: "Honored with top-performer distinction across the entire 2025 intern cohort for delivering high-impact business dashboards in Power BI and mentoring incoming peers.",
      tag: "Professional Honor",
      icon: "workspace_premium"
    },
    {
      id: "cgpa-distinction",
      index: "02",
      title: "Academic Distinction — 8.77 CGPA",
      subtitle: "Geeta University, Panipat",
      description: "Maintained consistent academic distinction and top-tier standing throughout Bachelor of Business Administration coursework.",
      tag: "Academic Standing",
      icon: "grade"
    },
    {
      id: "prompt-engineering",
      index: "03",
      title: "Prompt Engineering Certification",
      subtitle: "Applied Generative AI & Workflows",
      description: "Certified proficiency in structuring instructions, context architectures, and automated LLM workflows to accelerate business data analysis.",
      tag: "Technical Certification",
      icon: "psychology"
    },
    {
      id: "leadership",
      index: "04",
      title: "Leadership & Intern Mentorship",
      subtitle: "Peer Onboarding & Case Coordination",
      description: "Demonstrated executive capability leading academic project cohorts and onboarding new interns during industry analytics engagements.",
      tag: "Leadership Impact",
      icon: "groups"
    }
  ];

  const list = achievements && achievements.length > 0 ? achievements : defaultAchievements;

  return (
    <section className="w-full max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28" id="achievements">
      <div className="flex flex-col gap-10 sm:gap-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200/90">
          <div className="flex flex-col gap-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-blue-700 font-mono text-xs tracking-wider uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_6px_#2563eb]" />
              06 / Recognitions &amp; Milestones
            </div>
            <h2 className="font-headline font-bold font-section-headline text-slate-950 tracking-tight">
              Honors &amp; <span className="text-blue-600">Certifications</span>
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-slate-600 max-w-md">
            Grounded recognitions earned through corporate analytics internships, top-tier academic standing, and applied generative AI credentials.
          </p>
        </div>

        {/* 4 Verified Editorial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {list.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-subtle flex flex-col justify-between gap-6 transition-all duration-300 hover:shadow-elevated hover:border-blue-300 hover:-translate-y-1 group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200/80 px-2 py-0.5 rounded-md">
                    {item.index || `0${idx + 1}`}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">
                      {item.icon}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-headline font-bold text-base sm:text-lg text-slate-950 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-headline text-xs font-semibold text-blue-600">
                    {item.subtitle}
                  </p>
                </div>

                <p className="font-body text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-mono text-slate-500">
                <span className="material-symbols-outlined text-[15px] text-blue-600">
                  verified
                </span>
                <span>{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
