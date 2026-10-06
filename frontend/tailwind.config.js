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
        "surface": "#f8f9ff",
        "surface-dim": "#cbdbf5",
        "surface-bright": "#f8f9ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#eff4ff",
        "surface-container": "#e5eeff",
        "surface-container-high": "#dce9ff",
        "surface-container-highest": "#d3e4fe",
        "surface-variant": "#d3e4fe",
        "on-surface": "#0b1c30",
        "on-surface-variant": "#434655",
        "inverse-surface": "#213145",
        "inverse-on-surface": "#eaf1ff",
        "outline": "#747686",
        "outline-variant": "#c4c5d7",
        "primary": "#0037b0",
        "primary-container": "#1d4ed8",
        "on-primary": "#ffffff",
        "on-primary-container": "#cad3ff",
        "primary-fixed": "#dce1ff",
        "primary-fixed-dim": "#b7c4ff",
        "on-primary-fixed": "#001551",
        "secondary": "#565e74",
        "secondary-container": "#dae2fd",
        "on-secondary": "#ffffff",
        "on-secondary-fixed": "#131b2e",
        "on-secondary-container": "#5c647a",
        "tertiary": "#004870",
        "tertiary-container": "#006194",
        "on-tertiary-container": "#b2d9ff",
        "error": "#ba1a1a",
        "error-container": "#ffdad6"
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        headline: ['"Plus Jakarta Sans"', 'sans-serif'],
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
        'subtle': '0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.03)',
        'elevated': '0 10px 25px -5px rgba(15, 23, 42, 0.06), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
        'modal': '0 20px 30px -10px rgba(15, 23, 42, 0.1), 0 10px 15px -5px rgba(15, 23, 42, 0.05)',
        'glow-primary': '0 4px 14px 0 rgba(29, 78, 216, 0.35)'
      }
    },
  },
  plugins: [],
};
