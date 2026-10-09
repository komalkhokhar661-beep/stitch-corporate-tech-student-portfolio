// Authentic portfolio seed data for resilient offline and CDN hosting
export const initialProfile = {
  name: "Pushpa Rani",
  headline: "BBA • Data Analytics & AI Specialist",
  subHeadline: "Synthesizing quantitative business acumen with modern data architectures, Power BI intelligence, and enterprise AI workflows.",
  roleBadge: "AI × DATA ANALYTICS × BUSINESS TECHNOLOGY",
  bio: "I am a Bachelor of Business Administration (BBA) scholar with a focus on data analytics, business systems intelligence, and AI-assisted workflows. Combining analytical rigor with creative problem-solving, I engineer interactive executive dashboards, analyze corporate datasets, and design high-impact digital solutions.",
  email: "pushparani10290@gmail.com",
  linkedin: "https://www.linkedin.com/in/pushpa-rani-36b6052a9/",
  stats: [
    { id: "cgpa", value: "8.77", label: "CGPA Distinction", suffix: "/ 10" },
    { id: "program", value: "BBA", label: "Undergraduate", suffix: "Geeta Univ" },
    { id: "focus", value: "Data & AI", label: "Core Specialization", suffix: "Analytics" }
  ],
  floatingBadges: [
    { id: "badge-1", label: "Power BI & Excel", icon: "analytics", position: "top-left" },
    { id: "badge-2", label: "Data Analytics", icon: "query_stats", position: "bottom-left" },
    { id: "badge-3", label: "Generative AI", icon: "smart_toy", position: "bottom-right" }
  ]
};

export const initialAboutHighlights = [
  {
    id: "business-management",
    icon: "business_center",
    title: "Business & Management",
    description: "Core organizational principles, supply chain awareness, operational workflows, and structured root-cause diagnosis applied to enterprise business challenges.",
    tag: "Strategic Foundations"
  },
  {
    id: "data-analytics",
    icon: "insights",
    title: "Data & Analytics",
    description: "Transforming complex operational and financial spreadsheets into interactive, decision-grade Power BI dashboards and normalized relational models.",
    tag: "Intelligence & BI"
  },
  {
    id: "ai-tools",
    icon: "psychology",
    title: "AI & Modern Technology",
    description: "Deploying generative AI tooling, structured prompt engineering, and automated workflows to accelerate business analysis and executive ideation.",
    tag: "AI-Native Execution"
  }
];

export const initialSkills = [
  {
    category: "ANALYTICS",
    badge: "Business Intelligence & Data Modeling",
    icon: "query_stats",
    accent: "blue",
    items: [
      "Power BI",
      "Excel",
      "Data Analysis",
      "Dashboard Design"
    ]
  },
  {
    category: "AI & TECHNOLOGY",
    badge: "Applied Intelligence & Automation",
    icon: "smart_toy",
    accent: "violet",
    items: [
      "AI Tools",
      "Prompt Engineering",
      "Generative AI",
      "AI-assisted workflows"
    ]
  },
  {
    category: "BUSINESS",
    badge: "Strategy & Operational Foundations",
    icon: "corporate_fare",
    accent: "cyan",
    items: [
      "Business Administration",
      "Operations",
      "Supply Chain",
      "Business Strategy"
    ]
  },
  {
    category: "DESIGN",
    badge: "Visual Storytelling & Executive Presentations",
    icon: "palette",
    accent: "emerald",
    items: [
      "Canva",
      "Presentation Design",
      "Visual Storytelling"
    ]
  }
];

export const initialExperience = [
  {
    id: "talentgro-2025",
    role: "Data Analytics Intern",
    badge: "Best Intern — 2025 Cohort",
    company: "TalentGro Global, Chandigarh",
    period: "June 2025 – September 2025",
    description: "Worked with financial and business data and developed dashboards using Power BI and Microsoft Excel. Presented analytical insights to leadership, supported data-driven decision-making, mentored new interns, and was recognized as Best Intern of the 2025 cohort.",
    competencies: [
      { label: "Financial & Business Data", icon: "insights" },
      { label: "Power BI & Excel Dashboards", icon: "bar_chart" },
      { label: "Analytical Presentation", icon: "present_to_all" },
      { label: "Mentoring & Collaboration", icon: "groups" }
    ]
  }
];

export const initialProjects = [
  {
    id: "skyrouter-ai",
    number: "PROJECT 01",
    badge: "AI Product Concept",
    title: "SkyRouter AI",
    subtitle: "AI-Powered Travel Planning Platform",
    category: "AI & Technology",
    description: "An AI-assisted travel planning platform concept designed to help users explore destinations, budgets, travel preferences and trip durations through an interactive planning experience.",
    tags: ["AI Tools", "Generative AI", "Workflow Design", "Travel Intelligence"],
    meta: "Interactive Conceptual Prototype",
    visualType: "flight_card",
    visualData: {
      title: "SkyRouter Itinerary & Budget Engine",
      destination: "Kyoto & Tokyo",
      budgetTier: "Optimal AI",
      duration: "7 Days Plan",
      statusBadge: "AI Assisted Workflow",
      conceptBadge: "Interactive Concept"
    },
    caseStudy: {
      overview: "SkyRouter AI is an end-to-end conceptual product designed to bridge traveler preferences with algorithmic itinerary synthesis. The project focuses on structured parameter inputs—destination intent, budgetary constraints, and temporal availability.",
      objectives: [
        "Eliminate manual travel research fragmentation through consolidated AI itinerary logic.",
        "Provide dynamic tier benchmarking between luxury, balanced, and budget paths.",
        "Architect an intuitive, high-legibility interface suitable for web and mobile devices."
      ],
      technologies: ["Generative AI Logic", "User Experience Flow", "Prompt Engineering"],
      keyDeliverables: [
        "Interactive Multi-parameter Input System",
        "Automated Schedule & Route Breakdown",
        "Budget Optimization Matrix"
      ]
    }
  },
  {
    id: "business-analytics-dashboard",
    number: "PROJECT 02",
    badge: "BI Analytics",
    title: "Business Analytics Dashboard",
    subtitle: "Power BI & Excel Reporting",
    category: "Analytics",
    description: "Interactive dashboards developed using Power BI and Microsoft Excel to transform business and financial data into clear visual insights.",
    tags: ["Power BI", "Excel", "Data Analysis", "Dashboard Design"],
    meta: "Executive Visual Reporting",
    visualType: "chart_svg",
    visualData: {
      title: "Business Performance BI Suite",
      badgeLeft: "Excel Data Modeling",
      badgeRight: "Interactive Power BI"
    },
    caseStudy: {
      overview: "Designed and deployed comprehensive analytical dashboards to synthesize corporate performance metrics, expense trends, and operational revenue targets into executive-ready visualizations.",
      objectives: [
        "Convert raw spreadsheet records into normalized relational data models.",
        "Build intuitive interactive drill-downs across quarterly timelines and divisions.",
        "Accelerate strategic managerial evaluation through clear KPI indicator scorecards."
      ],
      technologies: ["Power BI", "Advanced Excel (Power Query, DAX)", "Dashboard Design"],
      keyDeliverables: [
        "Executive Summary KPI Board",
        "Comparative Financial Trend Visualizer",
        "Departmental Performance Heatmaps"
      ]
    }
  },
  {
    id: "financial-ratio-analysis",
    number: "PROJECT 03",
    badge: "Finance & Analytics",
    title: "Financial Statement & Ratio Analysis",
    subtitle: "Academic Business Finance",
    category: "Analytics",
    description: "An academic business-finance project focused on understanding financial statements, calculating key financial ratios and interpreting business performance.",
    tags: ["Financial Analysis", "Excel", "Business Strategy", "Accounting"],
    meta: "Academic Business Finance",
    visualType: "ratio_matrix",
    visualData: {
      title: "Ratio Synthesis & Solvency Matrix",
      col1Title: "LIQUIDITY & SOLVENCY",
      col1Value: "Current & Quick Ratios",
      col2Title: "PROFITABILITY",
      col2Value: "Operating Margins",
      badgeLeft: "Balance Sheet & P&L",
      badgeRight: "Ratio Benchmarking"
    },
    caseStudy: {
      overview: "A rigorous financial audit and ratio evaluation framework conducted on standard corporate balance sheets, income statements, and cash flow statements.",
      objectives: [
        "Assess solvency and short-term liquidity through Current and Quick ratio diagnostics.",
        "Examine operating margin efficiency and return on invested capital.",
        "Synthesize cross-period comparative findings into actionable managerial summaries."
      ],
      technologies: ["Financial Modeling", "Corporate Accounting", "Variance Diagnostics"],
      keyDeliverables: [
        "Financial Statement Normalization Workbook",
        "Multi-Ratio Synthesis Scorecard",
        "Capital Structure Risk Assessment Report"
      ]
    }
  },
  {
    id: "novatech-case-study",
    number: "PROJECT 04",
    badge: "Business Case Study",
    title: "NovaTech Case Study",
    subtitle: "Organizational Analysis",
    category: "Business",
    description: "An academic management case study examining employee dissatisfaction, workplace issues and managerial decision-making in a manufacturing organization.",
    tags: ["Business Administration", "Operations", "Business Strategy", "Decision Making"],
    meta: "Managerial Decision-Making",
    visualType: "framework_cards",
    visualData: {
      title: "NovaTech Organizational Diagnosis",
      box1Title: "Workplace Issues",
      box1Subtitle: "Friction & Retention",
      box2Title: "Managerial Framework",
      box2Subtitle: "Intervention Design",
      badgeLeft: "Manufacturing Context",
      badgeRight: "Actionable Strategy"
    },
    caseStudy: {
      overview: "An organizational behavior and managerial strategy investigation targeting persistent workforce attrition and communication bottlenecks at NovaTech manufacturing plants.",
      objectives: [
        "Diagnose root causes behind frontline employee disengagement and supervisor friction.",
        "Formulate structural interventions aligning incentives and feedback mechanisms.",
        "Deliver an executive decision-making roadmap for operational turnaround."
      ],
      technologies: ["Organizational Behavior Theory", "Strategic Leadership", "Root Cause Analysis"],
      keyDeliverables: [
        "Turnaround Proposal & Timeline",
        "Employee Engagement Metric Dashboard",
        "Managerial Communication Protocol"
      ]
    }
  }
];

export const initialEducation = [
  {
    id: "bba",
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Geeta University, Panipat",
    period: "2024 – 2027",
    cgpa: "CGPA: 8.77 / 10",
    focus: "Academic Focus: Business Administration, Data Analytics & Digital Technologies",
    icon: "school"
  },
  {
    id: "class-12",
    degree: "Class XII",
    institution: "DAV Police Public School, Panipat",
    period: "2023",
    score: "Score: 79.2%",
    focus: "Secondary Senior Education with strong analytical, mathematical, and commerce foundation.",
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

export const initialAchievements = [
  {
    id: "best-intern",
    title: "Best Intern — 2025 Cohort",
    subtitle: "TalentGro Global, Chandigarh",
    description: "Honored with top performer distinction for delivering high-impact business and financial dashboards and mentoring peers.",
    tag: "Professional Honor",
    icon: "workspace_premium"
  },
  {
    id: "cgpa-distinction",
    title: "Academic Performance — 8.77 CGPA",
    subtitle: "Geeta University, Panipat",
    description: "Maintained consistent academic distinction and top-tier standing throughout Bachelor of Business Administration coursework.",
    tag: "Academic Distinction",
    icon: "grade"
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering Certification",
    subtitle: "Applied Generative AI & Workflows",
    description: "Certified proficiency in structuring context, instructions, and automated workflows across LLMs to optimize business analysis.",
    tag: "Technical Certification",
    icon: "psychology"
  },
  {
    id: "leadership",
    title: "Leadership & Teamwork",
    subtitle: "Intern Mentorship & Case Leadership",
    description: "Demonstrated capability leading academic project cohorts and onboarding and guiding new interns during industry engagements.",
    tag: "Leadership Impact",
    icon: "groups"
  }
];
