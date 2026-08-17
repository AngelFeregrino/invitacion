/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'champagne': {
          DEFAULT: '#FAF6F0',
          light: '#FFFDF9',
        },
      }
    },
  },
  plugins: [],
}

