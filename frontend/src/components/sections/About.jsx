import React from 'react';

export default function About({ profile, aboutHighlights }) {
  const highlights = aboutHighlights && aboutHighlights.length > 0 ? aboutHighlights : [
    {
      id: "business-management",
      icon: "business_center",
      title: "Business & Management",
      description: "Core organizational understanding, business problem solving, structured analysis applied to practical organizational challenges.",
      tag: "Strategic Foundations"
    },
    {
      id: "data-analytics",
      icon: "insights",
      title: "Data & Analytics",
      description: "Transforming business and financial numbers into visual, decision-friendly dashboards with Power BI and Microsoft Excel.",
      tag: "Insights & Reporting"
    },
    {
      id: "ai-tools",
      icon: "psychology",
      title: "AI & Emerging Tools",
      description: "Leveraging generative intelligence, prompt engineering, and visual authoring tools to accelerate problem-solving and ideation.",
      tag: "Workflow Acceleration"
    }
  ];

  return (
    <section className="w-full bg-surface-container-low py-space-xl lg:py-space-2xl shadow-sm border-y border-outline-variant/20" id="about">
      <div className="max-w-[80rem] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs max-w-3xl">
          <div className="inline-flex items-center gap-2 text-primary font-code-badge text-xs tracking-wider uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Background &amp; Focus
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-on-surface">
            About Me
          </h2>
          <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
            {profile?.bio || "I am a BBA student with an interest in data analytics, business problem-solving, digital innovation and AI-assisted workflows. I enjoy combining analytical thinking with creativity to build practical solutions and meaningful digital experiences."}
          </p>
        </div>

        {/* 3 Curated Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-stretch pt-2">
          {highlights.map((card) => (
            <div
              key={card.id || card.title}
              className="bg-surface-container-lowest p-space-lg rounded-3xl shadow-sm flex flex-col justify-between gap-space-md border border-outline-variant/30 hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col gap-space-sm">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[26px]">
                    {card.icon}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-on-surface">
                  {card.title}
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-space-xs border-t border-outline-variant/20 flex items-center gap-2 text-primary font-display text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>{card.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
