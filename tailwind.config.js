/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray_b0b3b8': 'rgb(176,179,184)',
        'gray_A9ACB1': 'rgb(169,172,177)',
        'black_242526': 'rgb(36,37,38)',
        'blue_dbf9ff': 'rgb(219, 249, 255)',
        'blue_6bccde': 'rgb(107, 204, 222)',
        'blue_a2dde8': 'rgb(162, 221, 232)',
        'blue_baf4ff': 'rgb(186, 244, 255)',
        'gray_2F3031': 'rgb(47,48,49)',
        'blue_eefcff': 'rgb(238, 252, 255)',
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
        'blue_94eeff': 'rgb(148, 238, 255)',
        'blue_00202a': 'rgb(0,32,42)',
        'brightened_blue_00202a': 'rgb(30, 62, 72)',
        'blue_14b4d7': 'rgb(20,180,215)',
        'color_ob4f65': 'rgb(11,79,101)',
        'blue_0e4759': 'rgb(14, 71, 89)',
        'red_ff0000': 'rgb(255, 0, 0)',
        'blue_027a9f': 'rgb(2, 122, 159)',
      },
      scale: {
        '110': '1.1',
        '125': '1.25',
        '150': '1.5',
      },
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif'],
        allura: ['Allura', 'san-serif']
      },
    },

  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@butterfail/tailwindcss-inverted-radius'),
  ],
}