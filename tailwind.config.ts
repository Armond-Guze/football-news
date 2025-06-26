import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        background: '#09090B',   // shadcn dark background
        foreground: '#E4E4E7',   // soft gray text
        accent: '#FACC15',       // warm yellow (optional)
      },
      typography: {
        invert: {
          css: {
            '--tw-prose-body': '#d1d5db',
            '--tw-prose-headings': '#ffffff',
            '--tw-prose-lead': '#9ca3af',
            '--tw-prose-links': '#60a5fa',
            '--tw-prose-bold': '#ffffff',
            '--tw-prose-counters': '#9ca3af',
            '--tw-prose-bullets': '#4b5563',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
