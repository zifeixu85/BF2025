/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        bf: {
          black: '#0a0a0a',
          dark: '#121212',
          card: '#1e1e1e',
          gold: '#FFD700',
          goldDim: '#B8860B',
          accent: '#ff3e3e'
        }
      }
    },
  },
  plugins: [],
}