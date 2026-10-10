import React, { useEffect } from 'react';

export default function ResumeModal({ isOpen, onClose, profile, education, experience, skills }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const linkedinUrl = "https://www.linkedin.com/in/pushpa-rani-36b6052a9/";
  const emailAddress = "pushparani10290@gmail.com";

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-10 shadow-modal border border-slate-200 flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-600 text-[24px]">description</span>
            <h3 className="font-headline font-bold text-xl text-slate-950">Curriculum Vitae Preview</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-600 hover:text-white font-headline text-xs font-semibold transition-all shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-600 hover:text-slate-950 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close CV modal"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 sm:p-8 bg-slate-50/80 rounded-2xl border border-slate-200/90 flex flex-col gap-6 text-slate-800">
          {/* Header */}
          <div className="flex flex-col gap-1.5 pb-4 border-b border-slate-200">
            <h1 className="font-headline font-bold text-3xl text-slate-950 tracking-tight">Pushpa Rani</h1>
            <p className="font-headline text-base font-semibold text-blue-600">
              Bachelor of Business Administration (BBA) • Data Analytics &amp; AI
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-600 mt-2">
              <a 
                href={`mailto:${emailAddress}`}
                target="_self"
                className="hover:text-blue-600 transition-colors flex items-center gap-1 cursor-pointer"
                title={`Email ${emailAddress}`}
              >
                <span>📧 {emailAddress}</span>
              </a>
              <span>📍 Panipat / Chandigarh, India</span>
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline flex items-center gap-1"
                title="Open LinkedIn"
              >
                <span>🔗 linkedin.com/in/pushpa-rani-36b6052a9/</span>
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="flex flex-col gap-3">
            <h4 className="font-headline text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">school</span>
              Education
            </h4>
            <div className="flex flex-col gap-2.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs p-3.5 rounded-xl bg-white border border-slate-200/80">
                <div>
                  <strong className="text-sm font-bold text-slate-900">Bachelor of Business Administration (BBA)</strong>
                  <p className="text-slate-500">Geeta University, Panipat</p>
                </div>
                <div className="text-right sm:mt-0 mt-1">
                  <span className="font-mono font-bold text-blue-700">CGPA: 8.77 / 10 Distinction</span>
                  <p className="text-slate-500 text-[11px]">2024 – 2027</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs p-3.5 rounded-xl bg-white border border-slate-200/80">
                <div>
                  <strong className="text-sm font-bold text-slate-900">Class XII (Commerce &amp; Analytics)</strong>
                  <p className="text-slate-500">DAV Police Public School, Panipat</p>
                </div>
                <div className="text-right sm:mt-0 mt-1">
                  <span className="font-mono font-bold text-blue-700">Score: 79.2% Distinction</span>
                  <p className="text-slate-500 text-[11px]">2023</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs p-3.5 rounded-xl bg-white border border-slate-200/80">
                <div>
                  <strong className="text-sm font-bold text-slate-900">Class X (Secondary Education)</strong>
                  <p className="text-slate-500">DAV Police Public School, Panipat</p>
                </div>
                <div className="text-right sm:mt-0 mt-1">
                  <span className="font-mono font-bold text-blue-700">Score: 92% Exemplary</span>
                  <p className="text-slate-500 text-[11px]">2021</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="flex flex-col gap-3">
            <h4 className="font-headline text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">work</span>
              Experience
            </h4>
            <div className="flex flex-col gap-1.5 text-xs p-4 rounded-xl bg-white border border-slate-200/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <strong className="text-sm font-bold text-slate-900">Data Analytics Intern</strong>
                  <p className="text-blue-600 font-medium">TalentGro Global, Chandigarh</p>
                </div>
                <div className="text-right sm:mt-0 mt-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-mono font-bold text-[10px] border border-blue-200">
                    Best Intern — 2025 Cohort
                  </span>
                  <p className="text-slate-500 text-[11px] mt-0.5">June 2025 – Sept 2025</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mt-2">
                Synthesized operational and financial records into automated Power BI and Excel dashboards. Presented performance insights to senior leadership, trained new intern cohorts, and optimized reporting workflows.
              </p>
            </div>
          </div>

          {/* Key Competencies */}
          <div className="flex flex-col gap-3">
            <h4 className="font-headline text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">psychology</span>
              Technical &amp; Business Competencies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                <span className="font-bold text-blue-600 block mb-1">Data &amp; Analytics</span>
                <p className="text-slate-600 leading-relaxed">Power BI, Microsoft Excel, Data Analysis, Dashboard Design, Variance Reporting</p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                <span className="font-bold text-violet-600 block mb-1">AI &amp; Technology</span>
                <p className="text-slate-600 leading-relaxed">AI Tools, Prompt Engineering, Generative AI, Automated Workflows</p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                <span className="font-bold text-sky-600 block mb-1">Business &amp; Design</span>
                <p className="text-slate-600 leading-relaxed">Business Administration, Operations, Supply Chain, Canva, Presentation Storytelling</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-700 font-headline text-xs font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
