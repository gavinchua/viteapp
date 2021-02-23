const typography = require('windicss/plugin/typography')

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1.5rem'
    },
    fontFamily: {
      display: ['sans-serif'],
      body: ['sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    typography
  ],
}
