/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#211A1A",
        text: "#333333",
        subtext: "#999999",
        yellow1: "#FEEE00",
        red1: "#E44542",
      }
    },
  },
  plugins: [],
}