/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        darkGreen: '#103C25',
        darkRed: '#C9184A',
        lightPink: '#FFBFA3',
        mintGreen: '#72BDA3',
        lightMint: '#B7FFDB',
        palePink: '#FFE3E3',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        bauhaus: ['"Bauhaus 93"', 'cursive'],
      },
    },
  },
  plugins: [],
}
