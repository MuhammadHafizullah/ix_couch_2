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
        "blue-100":"rgba(27, 23, 49, 0.79)",
        "gray-400":"#555555",
        "gray-500":"#2E2D2D",
        "gray-100":"#43773353",
        "sky-200": "#C4DAFF",
        "sky-900": "#004347",
        "sky-100": "#0d576269",
      }
    },
  },
  plugins: [],
}