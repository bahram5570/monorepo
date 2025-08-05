import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/providers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        otpError: {
          '0%': { borderColor: '', color: '#E11900' },
          '100%': { borderColor: '#E11900', color: '#E11900' },
        },
        otpSuccess: {
          '0%': { borderColor: '', color: '#34B288' },
          '100%': { borderColor: '#34B288', color: '#34B288' },
        },
        mainActivationModule: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        cycleUpdatingScript: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.9)' },
        },
        signsChangedToast: {
          '0%': { top: '-300px' },
          '20%': { top: '0' },
          '90%': { top: '0' },
          '100%': { top: '-300px' },
        },
        welcoming: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pageNavigation: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(10%)' },
        },
        modalBackgroundOpen: {
          '0%': { backgroundColor: '#00000000' },
          '100%': { backgroundColor: '#00000088' },
        },
        modalBackgroundClose: {
          '0%': { backgroundColor: '#00000088' },
          '100%': { backgroundColor: '#00000000' },
        },
        modalCenterModeOpen: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        modalCenterModeClose: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        modalSlidingModeOpen: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        modalSlidingModeClose: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        ratingDescriptionOpen: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        ratingDescriptionClose: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        ratingDescriptionFadeOpen: {
          '0%': { backgroundColor: '#00000000' },
          '100%': { backgroundColor: '#00000044' },
        },
        ratingDescriptionFadeClose: {
          '0%': { backgroundColor: '#00000044' },
          '100%': { backgroundColor: '#00000000' },
        },
        skeleton: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0.2' },
          '100%': { opacity: '1' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        otpError: 'otpError 0.5s linear infinite alternate',
        otpSuccess: 'otpSuccess 0.5s linear infinite alternate',
        mainActivationModule: 'mainActivationModule 1s linear',
        cycleUpdatingScript: 'cycleUpdatingScript 0.5s linear infinite alternate',
        SignsChangedToast: 'SignsChangedToast 10s linear forwards',
        welcoming: 'welcoming 6s linear forwards',
        signsChangedToast: 'signsChangedToast 10s linear forwards',
        pageNavigation: 'pageNavigation 5s linear forwards',
        modalBackgroundOpen: 'modalBackgroundOpen 0.2s linear forwards',
        modalBackgroundClose: 'modalBackgroundClose 0.2s linear forwards',
        modalCenterModeOpen: 'modalCenterModeOpen 0.2s linear forwards',
        modalCenterModeClose: 'modalCenterModeClose 0.2s linear forwards',
        modalSlidingModeOpen: 'modalSlidingModeOpen 0.2s linear forwards',
        modalSlidingModeClose: 'modalSlidingModeClose 0.2s linear forwards',
        skeleton: 'skeleton 1.5s linear infinite',
        scrollLeft: 'scrollLeft 20s linear infinite',
        scrollRight: 'scrollRight 20s linear infinite',
        'fade-in': 'fade-in 0.9s ease forwards',
      },
    },
  },
  plugins: [],
};

export default config;
