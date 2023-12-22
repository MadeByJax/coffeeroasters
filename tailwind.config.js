/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      linearGradientColors: {
        'transparent-to-fehfcf7': ['rgba(254, 252, 247, 0.00)', '#FEFCF7'],
      },
      colors: {
        // Define custom colors here
        'dark-cyan': '#0E8784',
        'grey-blue': '#333D4B',
        'pale-orange': '#FDD6BA',
        'light-cream': '#FEFCF7',
        'app-grey': '#83888F',
        'grey': '#83888F',
        '2C343E': '#2C343E',
      },
    },
  },
  plugins: [],
}