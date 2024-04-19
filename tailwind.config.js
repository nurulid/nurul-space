const { nextui } = require('@nextui-org/theme');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        mailBlack: '#090A1A',
        mailPurple: '#535AFF',
        mailOrange: '#EF655F',
        mailGray: '#B0B3B9',
        resumeGray: '#6b7280',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        bgWaves: {
          '0%': { position: '0% 50%' },
          '50%': { position: '100% 50%' },
          '100%': { position: '0% 50%' },
        },
        wavyLine: {
          '0%': { top: '-0px' },
          '100%': { top: '-30px' },
        },
        // slideDown: {
        //   'fromm': {'transform': 'translateY(-20%)'},
        //   'to': {'transform': 'translateY(0)'},
        // },
        // slideRight: {
        //   '0': {'transform': 'translateX(50%)'},
        //   '100%': {'transform': 'translateY(0)'},
        // }
      },
      animation: {
        wiggle: 'wiggle .3s ease-in-out infinite',
        bgWaves: 'bgWaves 5s ease-in-out infinite',
        wavyLine: 'wavyLine .9s linear infinite',
        slideDown: 'slideDown .5s ease-in-out',
        slideRight: 'slideRight .5s ease-in-out',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
