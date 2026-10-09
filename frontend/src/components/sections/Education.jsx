import React from 'react';

export default function Education({ education }) {
  const defaultEdu = [
    {
      id: "bba",
      index: "01",
      degree: "Bachelor of Business Administration (BBA)",
      institution: "Geeta University, Panipat",
      period: "2024 – 2027",
      scoreBadge: "CGPA: 8.77 / 10 Distinction",
      focus: "Academic Focus: Business Administration, Quantitative Data Analytics & Digital Enterprise Technologies.",
      status: "Currently Enrolled (Undergraduate Scholar)",
      icon: "school"
    },
    {
      id: "class-12",
      index: "02",
      degree: "Class XII (Senior Secondary)",
      institution: "DAV Police Public School, Panipat",
      period: "2023",
      scoreBadge: "Score: 79.2%",
      focus: "Senior Secondary Education with strong analytical, commerce, and mathematical foundations.",
      status: "Completed with Distinction",
      icon: "history_edu"
    },
    {
      id: "class-10",
      index: "03",
      degree: "Class X (Secondary Schooling)",
      institution: "DAV Police Public School, Panipat",
      period: "2021",
      scoreBadge: "Score: 92% Exemplary",
      focus: "Foundational secondary education with top-percentile academic performance across mathematics and sciences.",
      status: "Exemplary Distinction",
      icon: "menu_book"
    }
  ];

  const eduList = education && education.length > 0 ? education : defaultEdu;

  return (
    <section className="w-full bg-[#F4F3EE] py-16 sm:py-20 lg:py-28 border-y border-slate-200/80 relative overflow-hidden" id="education">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200/90">
          <div className="flex flex-col gap-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-blue-700 font-mono text-xs tracking-wider uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_6px_#2563eb]" />
              05 / Academic Foundation
            </div>
            <h2 className="font-headline font-bold font-section-headline text-slate-950 tracking-tight">
              Education &amp; <span className="text-blue-600">Credentials</span>
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-slate-600 max-w-md">
            Academic progression rooted in business administration, mathematics, and distinction.
          </p>
        </div>

        {/* Editorial Credentials List */}
        <div className="flex flex-col gap-4">
          {eduList.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:shadow-elevated hover:border-blue-300 group"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200/80 px-2 py-0.5 rounded-md mt-1 shrink-0">
                  {item.index || `0${idx + 1}`}
                </span>

                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-headline font-bold text-lg sm:text-xl text-slate-950 group-hover:text-blue-600 transition-colors">
                      {item.degree}
                    </h3>
                    <span className="px-3 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono text-xs font-bold">
                      {item.scoreBadge || item.cgpa || item.score}
                    </span>
                  </div>

                  <p className="font-headline text-sm font-semibold text-blue-600">
                    {item.institution}
                  </p>

                  <p className="font-body text-xs sm:text-sm text-slate-600 pt-1 leading-relaxed max-w-3xl">
                    {item.focus}
                  </p>
                </div>
              </div>

              <div className="flex md:flex-col items-center md:items-end justify-between gap-2 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-mono text-xs font-semibold">
                  <span className="material-symbols-outlined text-[16px] text-blue-600">date_range</span>
                  <span>{item.period}</span>
                </div>
                {item.status && (
                  <span className="font-mono text-[11px] text-slate-500">
                    {item.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
