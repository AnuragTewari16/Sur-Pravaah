/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F8F3EA',
        maroon: {
          DEFAULT: '#6B1A2A',
          light: '#8B2A3A',
          dark: '#4A0F1C',
        },
        gold: '#C9922A',
        parchment: '#EDE3D4',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Crimson Pro"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
