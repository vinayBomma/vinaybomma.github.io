/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d2438',
        },
        accent: {
          DEFAULT: '#2f855a',
        },
        darkBg: '#0d2438',
        lightBg: '#f8f9fa',
        darkText: '#ffffff',
        lightText: '#333333',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
