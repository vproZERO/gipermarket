/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#621DED",
        text: "#1F2026",
        subtext: "#F2F4F7",
        yellow1: "#621DED",
        red1: "#621DED",
        gray: "#F0F0FF",
        gray2: "#D7D6FF",
        content: "#F2F4F7"
      }
    },
  },
  plugins: [],
}