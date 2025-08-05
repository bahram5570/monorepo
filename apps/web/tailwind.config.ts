import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        24: 'repeat(24, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        24: 'repeat(24, minmax(0, 1fr))',
      },
      keyframes: {
        pageNavigation: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(10%)' },
        },
      },
      animation: {
        pageNavigation: 'pageNavigation 5s linear forwards',
      },
    },
  },
  plugins: [],
};
export default config;
