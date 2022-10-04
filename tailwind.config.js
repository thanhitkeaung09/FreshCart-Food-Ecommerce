/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      theme: {
        screens: {
          'ta': '812px',
          // => @media (min-width: 640px) { ... }
        },
        fontFamily: {
          'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        },
      }
    },
  },
  plugins: [],
}
