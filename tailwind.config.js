/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {},
      animation: {}
    },
    fontFamily: {
      'display': ['Oswald'],
      'sans': ['"Source Serif 4"'],
    }
  },
  plugins: [],
}

