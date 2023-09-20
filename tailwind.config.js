/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: {
          100:'#1AB65C',
          200:'#181A20',
          300:'#1F222A',
        },
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
    },
  },
  plugins: [],
}

