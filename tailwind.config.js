/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'grease': ["GREASE", "sans-serif"],
        'oaklash': ["OAKLASH", "sans-serif"],
        'helvetica-neue': ["helvetica", "sans-serif"],
        'branch': ["Branch"],
        'flowrise': ["FLOWRISE"],
        'rosie-brown': ["RosieBrownSerifDemo"]
      }
    },
  },
  plugins: [],
}

