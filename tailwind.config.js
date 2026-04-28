/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./assets/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // Ejemplo: azul
        secondary: '#f59e0b', // Ejemplo: amarillo
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;