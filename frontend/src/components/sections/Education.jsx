import React from 'react';

export default function Education({ education }) {
  const defaultEdu = [
    {
      id: "bba",
      degree: "Bachelor of Business Administration (BBA)",
      institution: "Geeta University, Panipat",
      period: "2024 – 2027",
      cgpa: "CGPA: 8.77 / 10",
      focus: "Academic Focus: Business, Data Analytics & Digital Technologies",
      icon: "school"
    },
    {
      id: "class-12",
      degree: "Class XII",
      institution: "DAV Police Public School, Panipat",
      period: "2023",
      score: "Score: 79.2%",
      focus: "Secondary Senior Education with strong analytical and commerce foundation.",
      icon: "history_edu"
    },
    {
      id: "class-10",
      degree: "Class X",
      institution: "DAV Police Public School, Panipat",
      period: "2021",
      score: "Score: 92%",
      focus: "Foundational secondary schooling with exemplary distinction across mathematics and sciences.",
      icon: "menu_book"
    }
  ];

  const eduList = education && education.length > 0 ? education : defaultEdu;

  return (
    <section className="w-full bg-surface-container-low py-space-xl lg:py-space-2xl shadow-sm border-y border-outline-variant/20" id="education">
      <div className="max-w-[80rem] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs max-w-xl">
          <div className="inline-flex items-center gap-2 text-primary font-code-badge text-xs tracking-wider uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Academic Foundation
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-on-surface">
            Education
          </h2>
        </div>

        {/* Clean Timeline / Card List */}
        <div className="flex flex-col gap-space-md">
          {eduList.map((item) => (
            <div
              key={item.id}
              className="bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-space-md hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary shrink-0 mt-1">
                  <span className="material-symbols-outlined text-[26px]">
                    {item.icon || "school"}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-on-surface">
                      {item.degree}
                    </h3>
                    <span className="px-3 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-code-badge text-xs font-bold">
                      {item.cgpa || item.score}
                    </span>
                  </div>
                  <p className="font-display text-sm font-semibold text-primary">
                    {item.institution}
                  </p>
                  <p className="font-body text-xs sm:text-sm text-on-surface-variant pt-1 leading-relaxed">
                    {item.focus}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-surface-container text-secondary font-code-badge text-xs font-medium shrink-0 self-start md:self-center">
                <span className="material-symbols-outlined text-[16px]">date_range</span>
                <span>{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
