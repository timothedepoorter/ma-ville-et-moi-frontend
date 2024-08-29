/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-background-blue-header': '#265D78',
        'color-background-white-logo': '#F0F3F5',
      "primaryColor": '#9ABBCB',
        "accentColor": '#00699E'
      }
    },
  },
  plugins: [],
}