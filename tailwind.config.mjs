/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        page: 'var(--bg)',
        primary: 'var(--text)',
        dim: 'var(--dim)',
        line: 'var(--border)',
        cursor: 'var(--cursor)',
        card: 'var(--card-bg)',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.04)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
