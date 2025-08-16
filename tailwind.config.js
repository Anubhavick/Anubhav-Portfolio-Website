/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bright-turquoise': '#00FFCB',
        'deep-cove': '#06113C',
        'gold': '#FFD700',
        'froly': '#F08080',
      },
    },
  },
  plugins: [],
}
