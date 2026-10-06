import React from 'react';

export default function ResumeModal({ isOpen, onClose, profile, education, experience, skills }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-inverse-surface/60 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface-container-lowest rounded-3xl p-6 sm:p-10 shadow-2xl border border-outline-variant/30 flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[24px]">description</span>
            <h3 className="font-display font-bold text-xl text-on-surface">Curriculum Vitae Preview</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-display text-xs font-semibold transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-colors"
              aria-label="Close CV modal"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 sm:p-8 bg-surface rounded-2xl border border-outline-variant/20 flex flex-col gap-6 text-on-surface">
          {/* Header */}
          <div className="flex flex-col gap-1 pb-4 border-b border-outline-variant/20">
            <h1 className="font-display font-bold text-3xl text-on-surface">Pushpa Rani</h1>
            <p className="font-display text-base font-semibold text-primary">
              BBA Student | Data Analytics &amp; AI Enthusiast
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-code-badge text-secondary mt-1">
              <span>📧 2405301078@geetauniversity.edu.in</span>
              <span>📍 Panipat / Chandigarh, India</span>
              <span>🔗 linkedin.com/in/pushpa-rani-36b652a9</span>
            </div>
          </div>

          {/* Education */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">school</span>
              Education
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <div>
                  <strong className="text-sm font-bold text-on-surface">Bachelor of Business Administration (BBA)</strong>
                  <p className="text-secondary">Geeta University, Panipat</p>
                </div>
                <div className="text-right sm:mt-0 mt-1">
                  <span className="font-code-badge font-bold text-primary">CGPA: 8.77 / 10</span>
                  <p className="text-secondary text-[11px]">2024 – 2027</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <div>
                  <strong className="text-sm font-bold text-on-surface">Class XII (Commerce &amp; Analytics)</strong>
                  <p className="text-secondary">DAV Police Public School, Panipat</p>
                </div>
                <div className="text-right sm:mt-0 mt-1">
                  <span className="font-code-badge font-bold text-primary">Score: 79.2%</span>
                  <p className="text-secondary text-[11px]">2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">work</span>
              Experience
            </h4>
            <div className="flex flex-col gap-1 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <strong className="text-sm font-bold text-on-surface">Data Analytics Intern</strong>
                  <p className="text-primary font-medium">TalentGro Global, Chandigarh</p>
                </div>
                <div className="text-right sm:mt-0 mt-1">
                  <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-code-badge font-bold text-[10px]">
                    Best Intern — 2025 Cohort
                  </span>
                  <p className="text-secondary text-[11px]">June 2025 – Sept 2025</p>
                </div>
              </div>
              <p className="text-on-surface-variant leading-relaxed mt-2">
                Synthesized operational and financial records into automated Power BI and Excel dashboards. Presented performance insights to senior leadership, trained new intern cohorts, and optimized reporting workflows.
              </p>
            </div>
          </div>

          {/* Key Skills */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">psychology</span>
              Technical &amp; Business Competencies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
                <span className="font-bold text-primary block mb-1">Business Management</span>
                <p className="text-on-surface-variant leading-relaxed">Business Analysis, Strategic Planning, Organizational Communication, Leadership, Teamwork</p>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
                <span className="font-bold text-primary block mb-1">Data &amp; Analytics</span>
                <p className="text-on-surface-variant leading-relaxed">Power BI, Microsoft Excel, Dashboard Design, Financial Modeling, KPI Tracking</p>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
                <span className="font-bold text-primary block mb-1">AI &amp; Productivity</span>
                <p className="text-on-surface-variant leading-relaxed">Microsoft Copilot, Google Gemini, Claude, Prompt Engineering, Canva, Digital Workflows</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-display text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
