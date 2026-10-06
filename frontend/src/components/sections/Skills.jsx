import React, { useState } from 'react';

export default function Skills({ skills }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const defaultSkills = [
    {
      category: "Business & Management",
      badge: "Organizational Foundations",
      icon: "corporate_fare",
      items: [
        "Business Analysis",
        "Management",
        "Communication",
        "Leadership",
        "Teamwork"
      ]
    },
    {
      category: "Data & Analytics",
      badge: "Analysis & Reporting",
      icon: "query_stats",
      items: [
        "Power BI",
        "Microsoft Excel",
        "Dashboard Design",
        "Data Interpretation",
        "Financial Data"
      ]
    },
    {
      category: "AI & Digital Tools",
      badge: "Applied Intelligence",
      icon: "psychology",
      items: [
        "Microsoft Copilot",
        "Google Gemini",
        "Claude",
        "AI-assisted Workflows",
        "Canva",
        "Prompt Engineering"
      ]
    }
  ];

  const skillCategories = skills && skills.length > 0 ? skills : defaultSkills;

  // Filter skills by category and search keyword
  const filteredCategories = skillCategories.map(cat => {
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

  return (
    <section className="w-full max-w-[80rem] mx-auto px-margin-mobile lg:px-margin py-space-xl lg:py-space-2xl" id="skills">
      <div className="flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs max-w-xl">
            <div className="inline-flex items-center gap-2 text-primary font-code-badge text-xs tracking-wider uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Tooling &amp; Expertise
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-on-surface">
              Skills &amp; Capabilities
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-md">
            Structured competencies grounded in business management, visual analytics, and emerging AI tools.
          </p>
        </div>

        {/* Interactive Filter & Live Search Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-surface-container-low border border-outline-variant/30">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {['All', 'Business & Management', 'Data & Analytics', 'AI & Digital Tools'].map((cat) => (
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

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-secondary">
              search
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search skill (e.g. Excel, AI)..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-xs text-on-surface placeholder:text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-secondary hover:text-on-surface"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="bg-surface-container-lowest p-space-lg rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col gap-space-md hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
                  <span className="material-symbols-outlined text-[26px]">
                    {group.icon || "query_stats"}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-on-surface">
                    {group.category}
                  </h3>
                  <span className="font-body text-xs text-secondary">
                    {group.badge}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-2.5 pt-space-xs">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-surface-container-low text-on-surface font-display text-xs font-medium hover:bg-surface-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check_circle
                    </span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="col-span-3 text-center py-12 bg-surface-container-lowest rounded-3xl border border-outline-variant/30">
              <span className="material-symbols-outlined text-4xl text-secondary">search_off</span>
              <p className="font-display font-semibold text-sm text-on-surface mt-2">
                No matching skills found for &quot;{searchTerm}&quot;
              </p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="mt-3 px-4 py-1.5 rounded-xl bg-primary text-on-primary font-display text-xs font-semibold"
              >
                Clear Filter
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
