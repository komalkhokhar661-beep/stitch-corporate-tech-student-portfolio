import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const { title, subtitle, badge, description, tags, caseStudy } = project;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 shadow-modal border border-slate-200 flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="flex flex-col gap-1.5">
            <span className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              {badge || 'Case Study'}
            </span>
            <h2 className="font-headline font-bold text-2xl sm:text-3xl text-slate-950">
              {title}
            </h2>
            <p className="font-headline text-sm font-semibold text-blue-600">
              {subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-600 hover:text-slate-950 flex items-center justify-center transition-colors shrink-0"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Executive Summary */}
        <div className="flex flex-col gap-2">
          <h4 className="font-mono text-xs uppercase font-bold tracking-wider text-blue-700">
            Executive Summary
          </h4>
          <p className="font-body text-sm text-slate-600 leading-relaxed">
            {caseStudy?.overview || description}
          </p>
        </div>

        {/* Strategic Objectives */}
        {caseStudy?.objectives && caseStudy.objectives.length > 0 && (
          <div className="flex flex-col gap-2.5">
            <h4 className="font-mono text-xs uppercase font-bold tracking-wider text-blue-700">
              Strategic Objectives
            </h4>
            <ul className="flex flex-col gap-2">
              {caseStudy.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                  <span className="material-symbols-outlined text-blue-600 text-[16px] shrink-0 mt-0.5">check_circle</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Deliverables */}
        {caseStudy?.keyDeliverables && caseStudy.keyDeliverables.length > 0 && (
          <div className="flex flex-col gap-2.5">
            <h4 className="font-mono text-xs uppercase font-bold tracking-wider text-blue-700">
              Key Deliverables &amp; Outcomes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.keyDeliverables.map((item, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-headline font-medium text-slate-900 flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-600 text-[18px]">verified</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies & Methodologies */}
        <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
          <h4 className="font-mono text-xs uppercase font-bold tracking-wider text-blue-700">
            Tooling &amp; Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {(caseStudy?.technologies || tags || []).map((t, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-2 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-700 font-headline text-xs font-semibold transition-colors"
          >
            Close
          </button>
          <a
            href="#contact"
            onClick={() => {
              onClose();
              const contactEl = document.querySelector('#contact');
              if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-headline text-xs font-semibold shadow-glow-primary transition-all flex items-center gap-1.5"
          >
            <span>Inquire About Project</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  );
}
