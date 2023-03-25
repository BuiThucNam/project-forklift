/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sansPro: ['"Source Sans Pro"', 'sans-serif']
      },
      colors: {
        tcolor: "#0F172A",
      },
    },
  },
  plugins: [],
}