/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {},
      animation: {
        infinitescroll: 'infinite-scroll 3s linear infinite',
      }
    },
    fontFamily: {
      'display': ['Oswald'],
      'sans': ['"Source Serif 4"'],
    }
  },
  plugins: [],
}

