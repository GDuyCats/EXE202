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
        'blue_073d4d': 'rgb(7, 61, 77)',
        'blue_cart': 'rgb(29, 175, 221)',
        'blue_buy': 'rgb(107, 204, 222)',
        'blue_bg_pd': 'rgb(238,252,255)',
        'blue_bg_d0f8ff': 'rgb(208,248,255)',
        'blue_btn_qlt': 'rgb(23, 127, 159)',
        'blue_username': 'rgb(11, 79, 101)',
        'blue_tl': 'rgba(184,244,250,255)',
        'blue_br': 'rgba(162,203,255,255)',
        'blue_classi': 'rgba(181,229,238,255)',
      },
      scale: {
        '110': '1.1',
        '125': '1.25',
        '150': '1.5',
      },
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif'],
      },
    },

  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}