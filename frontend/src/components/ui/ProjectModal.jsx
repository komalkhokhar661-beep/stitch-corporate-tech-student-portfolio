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

  const { title, subtitle, badge, description, tags, caseStudy, visualData } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-inverse-surface/60 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-2xl border border-outline-variant/30 flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-outline-variant/20">
          <div className="flex flex-col gap-1.5">
            <span className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-code-badge text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              {badge || 'Case Study'}
            </span>
            <h2 className="font-display font-bold text-2xl text-on-surface">
              {title}
            </h2>
            <p className="font-display text-sm font-semibold text-primary">
              {subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-colors shrink-0"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Abstract */}
        <div className="flex flex-col gap-2">
          <h4 className="font-code-badge text-xs uppercase font-bold tracking-wider text-secondary">
            Executive Summary
          </h4>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">
            {caseStudy?.overview || description}
          </p>
        </div>

        {/* Objectives */}
        {caseStudy?.objectives && caseStudy.objectives.length > 0 && (
          <div className="flex flex-col gap-2.5">
            <h4 className="font-code-badge text-xs uppercase font-bold tracking-wider text-secondary">
              Strategic Objectives
            </h4>
            <ul className="flex flex-col gap-2">
              {caseStudy.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-on-surface-variant leading-normal">
                  <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-0.5">check_circle</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Deliverables / Outcomes */}
        {caseStudy?.keyDeliverables && caseStudy.keyDeliverables.length > 0 && (
          <div className="flex flex-col gap-2.5">
            <h4 className="font-code-badge text-xs uppercase font-bold tracking-wider text-secondary">
              Key Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {caseStudy.keyDeliverables.map((item, i) => (
                <div key={i} className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs font-display font-medium text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies & Tags */}
        <div className="flex flex-col gap-2 pt-2 border-t border-outline-variant/20">
          <h4 className="font-code-badge text-xs uppercase font-bold tracking-wider text-secondary">
            Tools &amp; Methodologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {(caseStudy?.technologies || tags || []).map((t, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-surface-container text-primary font-code-badge text-xs font-semibold">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-2 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-display text-xs font-semibold transition-colors"
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
            className="px-5 py-2.5 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-display text-xs font-semibold shadow-md transition-all flex items-center gap-1.5"
          >
            <span>Inquire About Project</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  );
}
