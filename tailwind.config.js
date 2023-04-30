/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        orange_1: '#eecda3',
        pink_1: '#ef629f'
      },
      fontFamily: {
        inter:['inter', 'serif'],
        Kanit:['Kanit'],
        Exo:['exo'],
        Montserrat:['Montserrat', 'sans-serif'],
        Titilium:['Titillium Web', 'sans-serif']
      }
    },
  },
  plugins: [],
}

