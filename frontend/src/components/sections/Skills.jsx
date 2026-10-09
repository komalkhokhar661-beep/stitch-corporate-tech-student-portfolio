import React, { useState } from 'react';

export default function Skills({ skills }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const defaultSkillGroups = [
    {
      id: "analytics",
      index: "01",
      category: "DATA & ANALYTICS",
      domain: "Business Intelligence & Quantitative Modeling",
      description: "Extracting, normalizing, and transforming operational and financial data into interactive executive decision dashboards.",
      icon: "query_stats",
      items: [
        "Power BI",
        "Microsoft Excel",
        "Data Visualization",
        "Dashboard Design",
        "Data Analysis",
        "Variance Reporting"
      ]
    },
    {
      id: "ai",
      index: "02",
      category: "AI & TECHNOLOGY",
      domain: "Applied Generative AI & Automation",
      description: "Deploying prompt engineering methodologies and generative AI tools to accelerate research, workflow execution, and synthesis.",
      icon: "smart_toy",
      items: [
        "AI Tools",
        "Prompt Engineering",
        "Generative AI",
        "AI-Assisted Workflows",
        "Workflow Automation",
        "Digital Tooling"
      ]
    },
    {
      id: "business",
      index: "03",
      category: "BUSINESS & STRATEGY",
      domain: "Operations & Administrative Acumen",
      description: "Applying core business administration frameworks to diagnose operational friction, supply chain dynamics, and managerial decisions.",
      icon: "corporate_fare",
      items: [
        "Business Administration",
        "Operations Analysis",
        "Supply Chain Basics",
        "Business Strategy",
        "Root Cause Diagnostics",
        "Strategic Thinking"
      ]
    },
    {
      id: "creative",
      index: "04",
      category: "CREATIVE & DESIGN",
      domain: "Visual Storytelling & Executive Presentations",
      description: "Synthesizing analytical metrics into compelling visual stories, executive decks, and high-legibility interface structures.",
      icon: "palette",
      items: [
        "Canva",
        "Presentation Design",
        "Visual Storytelling",
        "UI/UX Thinking",
        "Report Design",
        "Executive Pitch Decks"
      ]
    }
  ];

  const skillGroups = defaultSkillGroups;

  // Filter skills by category and search keyword
  const filteredGroups = skillGroups.map(cat => {
    if (selectedCategory !== 'All' && cat.category !== selectedCategory) {
      return null;
    }
    const matchingItems = cat.items.filter(item => 
      item.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
    if (searchTerm.trim() !== '' && matchingItems.length === 0) {
      return null;
    }
    return {
      ...cat,
      items: matchingItems
    };
  }).filter(Boolean);

  const categories = ['All', 'DATA & ANALYTICS', 'AI & TECHNOLOGY', 'BUSINESS & STRATEGY', 'CREATIVE & DESIGN'];

  return (
    <section className="w-full max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28" id="skills">
      <div className="flex flex-col gap-10 sm:gap-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200/90">
          <div className="flex flex-col gap-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-blue-700 font-mono text-xs tracking-wider uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_6px_#2563eb]" />
              02 / Competency Architecture
            </div>
            <h2 className="font-headline font-bold font-section-headline text-slate-950 tracking-tight">
              Categorized <span className="text-blue-600">Capabilities</span>
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-slate-600 max-w-md">
            Strictly authentic competencies structured across quantitative analytics, applied AI, business operations, and visual storytelling—presented with zero artificial percentage bars.
          </p>
        </div>

        {/* Category Selector & Live Search Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-white border border-slate-200/90 shadow-subtle">
          {/* Category Tabs */}
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

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-slate-400">
              search
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search tools (e.g. Power BI, AI, DAX)..."
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                aria-label="Clear search query"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>
        </div>

        {/* Categorized Editorial Typographic Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-subtle flex flex-col justify-between gap-6 transition-all duration-300 hover:shadow-elevated hover:border-blue-300 group"
            >
              <div className="flex flex-col gap-4">
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200/80 px-2 py-0.5 rounded-md">
                    {group.index}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-slate-50 text-slate-700 group-hover:text-blue-600 group-hover:bg-blue-50 flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-[20px]">
                      {group.icon}
                    </span>
                  </div>
                </div>

                {/* Title & Domain */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-headline font-bold text-base text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">
                    {group.category}
                  </h3>
                  <span className="font-headline text-xs font-medium text-slate-500">
                    {group.domain}
                  </span>
                </div>

                <p className="font-body text-xs text-slate-600 leading-relaxed">
                  {group.description}
                </p>

                {/* Typographic Skills List */}
                <div className="flex flex-col gap-2 pt-2">
                  {group.items.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50/90 border border-slate-200/70 text-slate-800 font-headline text-xs font-medium hover:bg-blue-50 hover:border-blue-200 hover:text-blue-900 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        {skill}
                      </span>
                      <span className="material-symbols-outlined text-slate-400 text-[15px]">
                        check
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified Capability</span>
                <span className="font-semibold text-slate-900">{group.items.length} competencies</span>
              </div>
            </div>
          ))}

          {filteredGroups.length === 0 && (
            <div className="col-span-full text-center py-12 bg-white rounded-3xl border border-slate-200/90 shadow-subtle">
              <span className="material-symbols-outlined text-4xl text-slate-400">search_off</span>
              <p className="font-headline font-semibold text-sm text-slate-700 mt-2">
                No matching competencies found for &quot;{searchTerm}&quot;
              </p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="mt-3 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-headline text-xs font-semibold shadow-glow-primary transition-all"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
