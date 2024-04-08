/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#F5F7FA',
        'neutralDGrey': '#4D4D4D',
        'brandPrimary': '#173D7A',
        'lightBlue': '#78C4FE',
        'neutralGrey': '#717171',
        'gray900': '#717171'
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}

