/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Premium Light Theme Palette — Warm Alabaster / Ivory / Graphite System
        "surface": "#FAF9F5",
        "surface-dim": "#F4F3EE",
        "surface-bright": "#FFFFFF",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#F8F8F5",
        "surface-container": "#F1F0EB",
        "surface-container-high": "#E8E7E0",
        "surface-container-highest": "#DFDED7",
        "surface-variant": "#EEEEEE",
        
        // High Contrast Refined Typography
        "on-surface": "#111827",
        "on-surface-variant": "#4B5563",
        "on-surface-subtle": "#6B7280",
        "inverse-surface": "#111827",
        "inverse-on-surface": "#FAF9F5",
        
        // Hairline Architectural Borders
        "outline": "rgba(17, 24, 39, 0.08)",
        "outline-variant": "rgba(17, 24, 39, 0.04)",
        "outline-glow": "rgba(29, 78, 216, 0.25)",

        // Primary: Refined Electric Cobalt / Royal Blue
        "primary": "#1D4ED8",
        "primary-container": "#EFF6FF",
        "primary-hover": "#1E40AF",
        "on-primary": "#FFFFFF",
        "on-primary-container": "#1E40AF",
        "primary-fixed": "rgba(29, 78, 216, 0.08)",
        "primary-fixed-dim": "rgba(29, 78, 216, 0.15)",
        "on-primary-fixed": "#1D4ED8",

        // Secondary & Micro-Accents: Refined Cerulean, Violet, and Emerald
        "secondary": "#64748B",
        "secondary-container": "rgba(100, 116, 139, 0.08)",
        "on-secondary": "#1E293B",
        "on-secondary-fixed": "#334155",
        "on-secondary-container": "#475569",

        "cyan-accent": "#0284C7",
        "cyan-soft": "#F0F9FF",
        "violet-accent": "#7C3AED",
        "violet-soft": "#F5F3FF",
        "emerald-accent": "#059669",
        "emerald-soft": "#ECFDF5",

        "tertiary": "#0284C7",
        "tertiary-container": "#E0F2FE",
        "on-tertiary-container": "#0369A1",
        "error": "#DC2626",
        "error-container": "rgba(220, 38, 38, 0.08)"
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        headline: ['"Space Grotesk"', 'sans-serif'],
        tech: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        'code-badge': ['"JetBrains Mono"', 'monospace']
      },
      borderRadius: {
        'card': '1.25rem',
        'subtle': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem'
      },
      spacing: {
        'gutter': '1.5rem',
        'margin': '2rem',
        'margin-mobile': '1.25rem',
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2.5rem',
        'space-2xl': '4rem',
        'space-3xl': '6rem'
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.03)',
        'elevated': '0 10px 25px -4px rgba(0, 0, 0, 0.06), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'card-glow': '0 12px 32px -4px rgba(29, 78, 216, 0.1)',
        'modal': '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
        'glow-primary': '0 8px 20px -3px rgba(29, 78, 216, 0.28)',
        'glow-cyan': '0 8px 20px -3px rgba(2, 132, 199, 0.25)',
        'glow-violet': '0 8px 20px -3px rgba(124, 58, 237, 0.25)'
      }
    },
  },
  plugins: [],
};
