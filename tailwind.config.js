/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue_for_signup': 'rgb(107, 204, 222)',//#6bccde
        'blue_for_signin_placeholder': 'rgb(23, 127, 159)',//#177f9f
      }
    },

  },
  plugins: [],
}