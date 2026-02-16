const { nextui } = require('@nextui-org/theme');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './mdx-components.js',
  ],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        background: 'hsl(var(--color-bg) / <alpha-value>)',
        surface: 'hsl(var(--color-surface) / <alpha-value>)',
        surfaceMuted: 'hsl(var(--color-surface-muted) / <alpha-value>)',
        border: 'hsl(var(--color-border) / <alpha-value>)',
        text: 'hsl(var(--color-text) / <alpha-value>)',
        muted: 'hsl(var(--color-text-muted) / <alpha-value>)',
        brand: 'hsl(var(--color-brand) / <alpha-value>)',
        brandForeground: 'hsl(var(--color-brand-foreground) / <alpha-value>)',
        warning: 'hsl(var(--color-warning) / <alpha-value>)',
        warningForeground: 'hsl(var(--color-warning-foreground) / <alpha-value>)',
        mailBlack: 'hsl(var(--color-mail-black) / <alpha-value>)',
        mailPurple: 'hsl(var(--color-mail-purple) / <alpha-value>)',
        mailOrange: 'hsl(var(--color-mail-orange) / <alpha-value>)',
        mailGray: 'hsl(var(--color-mail-gray) / <alpha-value>)',
        resumeGray: 'hsl(var(--color-resume-gray) / <alpha-value>)',
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
    hljs: {
      theme: 'atom-one-dark',
    },
  },
  darkMode: 'class',
  plugins: [
    nextui(),
    require('@tailwindcss/typography'),
    require('tailwind-highlightjs'),
  ],
  safelist: [
    {
      pattern: /hljs+/,
    },
  ],
};
