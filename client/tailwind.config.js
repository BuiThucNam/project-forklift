/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
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