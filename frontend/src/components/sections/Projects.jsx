import React, { useState } from 'react';

export default function Projects({ projects, onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AI Product Concept', 'BI Analytics', 'Finance & Analysis', 'Case Study'];

  const projectList = projects || [];

  const filteredProjects = projectList.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      project.category === selectedCategory ||
      project.badge === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      project.title.toLowerCase().includes(query) ||
      project.subtitle.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      (project.tags && project.tags.some((tag) => tag.toLowerCase().includes(query)));

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="w-full max-w-[80rem] mx-auto px-margin-mobile lg:px-margin py-space-xl lg:py-space-2xl" id="projects">
      <div className="flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs max-w-xl">
            <div className="inline-flex items-center gap-2 text-primary font-code-badge text-xs tracking-wider uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Applied Case Work
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-on-surface">
              Selected Projects
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-md">
            Academic initiatives and applied solutions demonstrating data evaluation, UI concepts, and managerial analysis.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-surface-container-low border border-outline-variant/30">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl font-display text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-secondary">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by title or tag..."
              className="w-full pl-9 pr-8 py-1.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-xs text-on-surface placeholder:text-secondary focus:outline-none focus:border-primary"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-secondary hover:text-on-surface"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>
        </div>

        {/* 2x2 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-surface-container-lowest rounded-3xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 group border border-outline-variant/30"
            >
              <div className="flex flex-col gap-space-md">
                {/* Project Eyebrow */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-code-badge text-xs font-semibold">
                    {project.number || 'PROJECT'}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-display text-xs text-primary font-semibold">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {project.badge}
                  </span>
                </div>

                {/* Authentic Mini Visual Preview Based on Project Type */}
                {project.id === 'skyrouter-ai' && (
                  <div className="w-full h-44 rounded-2xl bg-surface-container flex flex-col p-4 justify-between relative overflow-hidden group-hover:bg-surface-container-high transition-colors">
                    <div className="flex items-center justify-between text-secondary">
                      <span className="font-display text-xs font-semibold text-on-surface">
                        SkyRouter Itinerary &amp; Budget Engine
                      </span>
                      <span className="material-symbols-outlined text-[20px] text-primary">
                        flight_takeoff
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 my-auto">
                      <div className="p-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-center">
                        <span className="text-[10px] text-secondary block font-code-badge">DESTINATION</span>
                        <span className="text-xs font-bold text-on-surface">Kyoto &amp; Tokyo</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-center">
                        <span className="text-[10px] text-secondary block font-code-badge">BUDGET TIER</span>
                        <span className="text-xs font-bold text-primary">Optimal AI</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-center">
                        <span className="text-[10px] text-secondary block font-code-badge">DURATION</span>
                        <span className="text-xs font-bold text-on-surface">7 Days Plan</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-on-surface-variant font-code-badge">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        AI Assisted Workflow
                      </span>
                      <span className="text-primary font-bold">Interactive Concept</span>
                    </div>
                  </div>
                )}

                {project.id === 'business-analytics-dashboard' && (
                  <div className="w-full h-44 rounded-2xl bg-surface-container flex flex-col p-4 justify-between relative overflow-hidden group-hover:bg-surface-container-high transition-colors">
                    <div className="flex items-center justify-between text-secondary">
                      <span className="font-display text-xs font-semibold text-on-surface">
                        Business Performance BI Suite
                      </span>
                      <span className="material-symbols-outlined text-[20px] text-primary">
                        bar_chart
                      </span>
                    </div>
                    <svg className="w-full h-16 text-primary-container my-auto" fill="none" viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 60 Q 50 35, 100 50 T 200 20 T 300 12" fill="none" stroke="currentColor" strokeWidth="3" />
                      <path d="M0 60 Q 50 35, 100 50 T 200 20 T 300 12 L 300 80 L 0 80 Z" fill="currentColor" fillOpacity="0.1" />
                      <circle cx="100" cy="50" fill="currentColor" r="4" />
                      <circle cx="200" cy="20" fill="currentColor" r="4" />
                      <circle cx="300" cy="12" fill="#0037b0" r="5" />
                    </svg>
                    <div className="flex items-center justify-between text-xs text-on-surface-variant font-code-badge">
                      <span>Excel Data Modeling</span>
                      <span className="text-primary font-bold">Interactive Power BI</span>
                    </div>
                  </div>
                )}

                {project.id === 'financial-ratio-analysis' && (
                  <div className="w-full h-44 rounded-2xl bg-surface-container flex flex-col p-4 justify-between relative overflow-hidden group-hover:bg-surface-container-high transition-colors">
                    <div className="flex items-center justify-between text-secondary">
                      <span className="font-display text-xs font-semibold text-on-surface">
                        Ratio Synthesis &amp; Solvency Matrix
                      </span>
                      <span className="material-symbols-outlined text-[20px] text-primary">
                        calculate
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2.5 my-auto">
                      <div className="p-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
                        <span className="text-[10px] text-secondary block font-code-badge">LIQUIDITY &amp; SOLVENCY</span>
                        <span className="text-[13px] font-bold text-primary">Current &amp; Quick Ratios</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
                        <span className="text-[10px] text-secondary block font-code-badge">PROFITABILITY</span>
                        <span className="text-[13px] font-bold text-on-surface">Operating Margins</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-on-surface-variant font-code-badge">
                      <span>Balance Sheet &amp; P&amp;L</span>
                      <span className="text-primary font-bold">Ratio Benchmarking</span>
                    </div>
                  </div>
                )}

                {project.id === 'novatech-case-study' && (
                  <div className="w-full h-44 rounded-2xl bg-surface-container flex flex-col p-4 justify-between relative overflow-hidden group-hover:bg-surface-container-high transition-colors">
                    <div className="flex items-center justify-between text-secondary">
                      <span className="font-display text-xs font-semibold text-on-surface">
                        NovaTech Organizational Diagnosis
                      </span>
                      <span className="material-symbols-outlined text-[20px] text-primary">
                        balance
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 my-auto">
                      <div className="p-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-center">
                        <span className="text-xs font-bold text-primary block">Workplace Issues</span>
                        <span className="text-[10px] text-secondary">Friction &amp; Retention</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-center">
                        <span className="text-xs font-bold text-primary block">Managerial Framework</span>
                        <span className="text-[10px] text-secondary">Intervention Design</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-on-surface-variant font-code-badge">
                      <span>Manufacturing Context</span>
                      <span className="text-primary font-bold">Actionable Strategy</span>
                    </div>
                  </div>
                )}

                {/* Title & Description */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display font-bold text-xl text-on-surface group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="font-display text-xs font-semibold text-primary">
                    {project.subtitle}
                  </span>
                  <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed pt-1">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-surface-container text-primary font-code-badge text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center justify-between">
                <span className="font-display text-xs text-secondary font-medium">
                  {project.meta || 'Academic Project'}
                </span>
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1 font-display text-xs font-bold text-primary group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>View Project</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-surface-container-lowest rounded-3xl border border-outline-variant/30">
            <span className="material-symbols-outlined text-4xl text-secondary">folder_off</span>
            <p className="font-display font-semibold text-sm text-on-surface mt-2">
              No projects found for current criteria.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-3 px-4 py-2 rounded-xl bg-primary text-on-primary font-display text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
