import React, { useState } from 'react';

export default function Projects({ projects, onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AI & Technology', 'Analytics', 'Business'];

  const projectList = projects || [];

  const filteredProjects = projectList.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      project.category?.toLowerCase() === selectedCategory.toLowerCase() ||
      (selectedCategory === 'Analytics' && (project.category?.includes('Analytics') || project.badge?.includes('Analytics'))) ||
      (selectedCategory === 'AI & Technology' && (project.category?.includes('AI') || project.badge?.includes('AI'))) ||
      (selectedCategory === 'Business' && (project.category?.includes('Business') || project.badge?.includes('Case Study') || project.category?.includes('Case Study')));

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      project.title.toLowerCase().includes(query) ||
      project.subtitle.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      (project.tags && project.tags.some((tag) => tag.toLowerCase().includes(query)));

    return matchesCategory && matchesSearch;
  });

  // Separate the featured flagship project (SkyRouter AI) from supporting projects
  const featuredProject = filteredProjects.find((p) => p.id === 'skyrouter-ai');
  const supportingProjects = filteredProjects.filter((p) => p.id !== 'skyrouter-ai');

  return (
    <section className="w-full max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28" id="projects">
      <div className="flex flex-col gap-10 sm:gap-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200/90">
          <div className="flex flex-col gap-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-blue-700 font-mono text-xs tracking-wider uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_6px_#2563eb]" />
              04 / Portfolio Highlights
            </div>
            <h2 className="font-headline font-bold font-section-headline text-slate-950 tracking-tight">
              Selected <span className="text-blue-600">Case Studies</span>
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-slate-600 max-w-md">
            Applied projects demonstrating data modeling, executive BI dashboard design, AI product architecture, and managerial problem solving.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-white border border-slate-200/90 shadow-subtle">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl font-headline text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-glow-primary'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                }`}
              >
                {cat === 'All' ? 'All Disciplines' : cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-slate-400">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by title or tag..."
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-500 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                aria-label="Clear search"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>
        </div>

        {/* ============================================================== */}
        {/* ONE LARGE FEATURED PROJECT (FLAGSHIP SHOWCASE) */}
        {/* ============================================================== */}
        {featuredProject && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-blue-700 uppercase tracking-wider font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Flagship Featured Project</span>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-elevated grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group">
              {/* Left Column: Visual Mockup / Interface HUD (6 Cols) */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                <div className="w-full rounded-2xl bg-gradient-to-br from-sky-50 via-blue-50/70 to-slate-50 border border-sky-200/80 p-5 sm:p-6 flex flex-col justify-between gap-5 relative overflow-hidden">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between text-slate-900 border-b border-sky-200/60 pb-3">
                    <div className="flex items-center gap-2 font-headline font-bold text-sm text-slate-950">
                      <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                      <span>SkyRouter Itinerary &amp; Budget Engine</span>
                    </div>
                    <span className="material-symbols-outlined text-sky-600 text-[22px]">
                      flight_takeoff
                    </span>
                  </div>

                  {/* Core Parameter Cards */}
                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="p-3 rounded-xl bg-white border border-sky-100 text-center shadow-sm">
                      <span className="text-[10px] text-slate-400 block font-mono font-medium">DESTINATION</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 block">Kyoto &amp; Tokyo</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-sky-200 text-center shadow-sm">
                      <span className="text-[10px] text-sky-700 block font-mono font-semibold">BUDGET TIER</span>
                      <span className="text-xs sm:text-sm font-bold text-sky-700 mt-0.5 block">Optimal AI</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-sky-100 text-center shadow-sm">
                      <span className="text-[10px] text-slate-400 block font-mono font-medium">DURATION</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 block">7 Days Plan</span>
                    </div>
                  </div>

                  {/* Dynamic Route Indicator */}
                  <div className="p-3.5 rounded-xl bg-white/90 border border-sky-100/90 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-600">
                      <span>Multi-parameter Constraint Synthesis</span>
                      <span className="text-sky-700 font-bold">100% Parameter Match</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 w-4/5 rounded-full" />
                    </div>
                  </div>

                  {/* Bottom Telemetry Status */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
                    <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
                      Generative AI Logic
                    </span>
                    <span className="text-sky-700 font-bold">Interactive Concept</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Narrative, Tags & Action (6 Cols) */}
              <div className="lg:col-span-6 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono text-xs font-semibold">
                      {featuredProject.number || 'PROJECT 01'}
                    </span>
                    <span className="font-mono text-xs text-blue-700 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      {featuredProject.badge}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="font-headline font-bold text-2xl sm:text-3xl text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">
                      {featuredProject.title}
                    </h3>
                    <p className="font-headline font-semibold text-base text-blue-600">
                      {featuredProject.subtitle}
                    </p>
                  </div>

                  <p className="font-body text-sm sm:text-base text-slate-600 leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="flex flex-col gap-2 pt-1 font-body text-xs sm:text-sm text-slate-700">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-blue-600 text-[18px] shrink-0 mt-0.5">check_circle</span>
                      <span>Eliminates manual research fragmentation via algorithmic travel synthesis.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-blue-600 text-[18px] shrink-0 mt-0.5">check_circle</span>
                      <span>Dynamic tier benchmarking between luxury, balanced, and budget paths.</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {featuredProject.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-mono text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-500 font-medium">
                    {featuredProject.meta || 'Interactive Concept'}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectProject(featuredProject)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-headline text-xs font-bold shadow-glow-primary transition-all duration-200 cursor-pointer"
                  >
                    <span>View Full Case Study</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* SUPPORTING PROJECTS (VARIED ASYMMETRIC GRID) */}
        {/* ============================================================== */}
        {supportingProjects.length > 0 && (
          <div className="flex flex-col gap-6 pt-6">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-500 uppercase tracking-wider font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>Supporting Projects &amp; Quantitative Studies</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {supportingProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-subtle flex flex-col justify-between gap-6 transition-all duration-300 hover:shadow-elevated hover:border-blue-300 hover:-translate-y-1 group"
                >
                  <div className="flex flex-col gap-4">
                    {/* Eyebrow & Badge */}
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono text-[11px] font-semibold">
                        {project.number || 'PROJECT'}
                      </span>
                      <span className="font-mono text-[11px] text-blue-700 font-semibold">
                        {project.badge}
                      </span>
                    </div>

                    {/* Distinct Project Visual HUD */}
                    {project.id === 'business-analytics-dashboard' && (
                      <div className="w-full h-40 rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50/60 to-white border border-blue-200/80 p-4 flex flex-col justify-between relative overflow-hidden">
                        <div className="flex items-center justify-between text-slate-800">
                          <span className="font-headline text-xs font-semibold text-slate-900 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                            Business Performance BI
                          </span>
                          <span className="material-symbols-outlined text-[18px] text-blue-600">
                            bar_chart
                          </span>
                        </div>

                        <div className="relative my-auto py-1">
                          <svg className="w-full h-14 text-blue-600" fill="none" viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient id="blueGraphGradLight2" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.02" />
                              </linearGradient>
                            </defs>
                            <path d="M0 60 Q 50 35, 100 50 T 200 20 T 300 12" fill="none" stroke="#1d4ed8" strokeWidth="2.5" />
                            <path d="M0 60 Q 50 35, 100 50 T 200 20 T 300 12 L 300 80 L 0 80 Z" fill="url(#blueGraphGradLight2)" />
                            <circle cx="100" cy="50" fill="#0284c7" r="4" />
                            <circle cx="200" cy="20" fill="#2563eb" r="4" />
                            <circle cx="300" cy="12" fill="#1d4ed8" r="5" />
                          </svg>
                        </div>

                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                          <span>Excel Modeling</span>
                          <span className="text-blue-700 font-bold">Power BI Suite</span>
                        </div>
                      </div>
                    )}

                    {project.id === 'financial-ratio-analysis' && (
                      <div className="w-full h-40 rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50/40 to-white border border-slate-200/80 p-4 flex flex-col justify-between relative overflow-hidden">
                        <div className="flex items-center justify-between text-slate-800">
                          <span className="font-headline text-xs font-semibold text-slate-900 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                            Ratio Synthesis Matrix
                          </span>
                          <span className="material-symbols-outlined text-[18px] text-blue-600">
                            calculate
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 my-auto">
                          <div className="p-2 rounded-xl bg-white border border-slate-200/80 text-center shadow-sm">
                            <span className="text-[10px] text-slate-400 block font-mono">LIQUIDITY</span>
                            <span className="text-xs font-bold text-blue-700">Quick &amp; Current</span>
                          </div>
                          <div className="p-2 rounded-xl bg-white border border-slate-200/80 text-center shadow-sm">
                            <span className="text-[10px] text-slate-400 block font-mono">SOLVENCY</span>
                            <span className="text-xs font-bold text-slate-900">Operating Margin</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                          <span>Balance Sheet &amp; P&amp;L</span>
                          <span className="text-blue-700 font-bold">Variance Model</span>
                        </div>
                      </div>
                    )}

                    {project.id === 'novatech-case-study' && (
                      <div className="w-full h-40 rounded-2xl bg-gradient-to-br from-violet-50 via-purple-50/50 to-white border border-violet-200/80 p-4 flex flex-col justify-between relative overflow-hidden">
                        <div className="flex items-center justify-between text-slate-800">
                          <span className="font-headline text-xs font-semibold text-slate-900 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
                            NovaTech Diagnosis
                          </span>
                          <span className="material-symbols-outlined text-[18px] text-violet-600">
                            balance
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 my-auto">
                          <div className="p-2 rounded-xl bg-white border border-violet-100 text-center shadow-sm">
                            <span className="text-xs font-bold text-violet-700 block">Workforce Issues</span>
                            <span className="text-[10px] text-slate-400">Attrition Diagnosis</span>
                          </div>
                          <div className="p-2 rounded-xl bg-white border border-violet-100 text-center shadow-sm">
                            <span className="text-xs font-bold text-slate-900 block">Framework</span>
                            <span className="text-[10px] text-violet-700 font-medium">Strategy Design</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                          <span>Operations Analysis</span>
                          <span className="text-violet-700 font-bold">Action Strategy</span>
                        </div>
                      </div>
                    )}

                    {/* Titles */}
                    <div className="flex flex-col gap-1">
                      <h3 className="font-headline font-bold text-lg text-slate-950 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <span className="font-headline text-xs font-semibold text-blue-600">
                        {project.subtitle}
                      </span>
                    </div>

                    <p className="font-body text-xs text-slate-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200/80 text-slate-700 font-mono text-[10px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-mono text-[11px] text-slate-500">
                      {project.meta || 'Academic Project'}
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-headline text-xs font-bold border border-blue-200 hover:border-blue-600 transition-all cursor-pointer"
                    >
                      <span>Case Study</span>
                      <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200/90 shadow-subtle">
            <span className="material-symbols-outlined text-4xl text-slate-400">folder_off</span>
            <p className="font-headline font-semibold text-sm text-slate-700 mt-2">
              No projects found for current criteria.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-3 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-headline text-xs font-semibold shadow-glow-primary transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
