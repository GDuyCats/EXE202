/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue_6bccde': 'rgb(107, 204, 222)',
        'blue_177f9f': 'rgb(23, 127, 159)',
        'blue_d5f8ff': 'rgb(213, 248, 255)',
        'blue_c0foff': 'rgb(192, 240, 255)',
        'blue_94eeff': 'rgb(148, 238, 255)'
      },
      scale: {
        '110': '1.1',
        '125': '1.25',
        '150': '1.5',
      },
    },

  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}