/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./dashboard/*.{html,js}",
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#94a3b8",
        secondary: "#475569",
      },
    },
  },
  plugins: [],
}
