const { nextui } = require("@nextui-org/theme");
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bgWaves: {
          '0%': { 'position': '0% 50%' },
          '50%': { 'position': '100% 50%' },
          '100%': { 'position': '0% 50%' }
        },
        wavyLine: {
          '0%': { 'top': '-0px' },
          '100%': { 'top': '-30px'}
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        bgWaves: 'bgWaves 5s ease-in-out infinite',
        wavyLine: 'wavyLine .9s linear infinite'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
