/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        // Add more font families as needed
      },
      backgroundImage: theme => ({
        'treasureMap': "url('/src/assets/treasureMap.png')",
        'svg1' : "url('/src/assets/background1.svg')",
      }),
    },
  },
  plugins: [],
}

