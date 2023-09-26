/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors: {
        'almostwhite': '#F7FFFF',
      },

      screens: {
        'xs': '375px',
      },

    },
  },
  plugins: [],
}