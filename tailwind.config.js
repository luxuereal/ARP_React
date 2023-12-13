/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '431px',
        'mobile': {'min': '120px', 'max': '430px'}
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      normalGray: '#707070'
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

