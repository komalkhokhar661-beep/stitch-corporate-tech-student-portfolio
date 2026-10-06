import React from 'react';

export default function Achievements({ achievements }) {
  const defaultAchievements = [
    {
      id: "best-intern",
      title: "Best Intern — 2025 Cohort",
      subtitle: "TalentGro Global, Chandigarh",
      description: "Honored with the top performer distinction for delivering high-impact business and financial dashboards and mentoring peers.",
      tag: "Professional Honor",
      icon: "workspace_premium"
    },
    {
      id: "cgpa-distinction",
      title: "Academic Performance — 8.77 CGPA",
      subtitle: "Geeta University, Panipat",
      description: "Maintained consistent academic distinction and top-tier standing throughout Bachelor of Business Administration coursework.",
      tag: "Academic Distinction",
      icon: "grade"
    },
    {
      id: "prompt-engineering",
      title: "Prompt Engineering Certification",
      subtitle: "Applied Generative AI & Workflows",
      description: "Certified proficiency in structuring context, instructions, and automated workflows across LLMs to optimize business analysis.",
      tag: "Technical Certification",
      icon: "neurology"
    },
    {
      id: "leadership",
      title: "Leadership & Teamwork",
      subtitle: "Intern Mentorship & Case Leadership",
      description: "Demonstrated capability leading academic project cohorts and onboarding and guiding new interns during industry engagements.",
      tag: "Leadership Impact",
      icon: "groups"
    }
  ];

  const list = achievements && achievements.length > 0 ? achievements : defaultAchievements;

  return (
    <section className="w-full max-w-[80rem] mx-auto px-margin-mobile lg:px-margin py-space-xl lg:py-space-2xl" id="achievements">
      <div className="flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs max-w-xl">
          <div className="inline-flex items-center gap-2 text-primary font-code-badge text-xs tracking-wider uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Honors &amp; Milestones
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-on-surface">
            Achievements &amp; Recognition
          </h2>
          <p className="font-body text-sm sm:text-base text-on-surface-variant">
            Recognized accomplishments in professional internships, academic distinction, and AI competencies.
          </p>
        </div>

        {/* 4 Concise Verified Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {list.map((item) => (
            <div
              key={item.id}
              className="bg-surface-container-lowest p-space-lg rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col justify-between gap-space-md hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[26px]">
                    {item.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display font-bold text-base text-on-surface">
                    {item.title}
                  </h3>
                  <p className="font-display text-xs font-semibold text-primary">
                    {item.subtitle}
                  </p>
                </div>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-outline-variant/20 flex items-center gap-1.5 text-xs font-code-badge text-secondary">
                <span className="material-symbols-outlined text-[15px] text-primary">
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
