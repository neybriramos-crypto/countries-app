/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ¡Esto debe estar así!
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}