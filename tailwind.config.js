/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:
      {
        "mont":["Mont"],
        "exo":["Exo","sans-serif"],
        "garet":["Garet"],
        "agrandir":["Agrandir Wide Black"]
      },
      colors:{
        "primary":"#53B3B8",
        "secondary":"#477CBF",
        "blue-300":"#009FD1",
        "blue-900":"#000914",
        "blue-700":"#787FF6",
        "blue-600":"#00306B",
        "gray-400":"#555555",
        "gray-500":"#2E2D2D",
        "sky-200": "#C4DAFF",
        "sky-900": "#004347",
      }
    },
  },
  plugins: [],
}