const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#1e2643',
      secondary: '#b07c0c',
      white: 'white',
      black: 'black',
    },
    textColor: theme => ({
      blue: 'lightsteelblue',
      orange: theme('colors').secondary
    }),
    fontFamily: {
      sans: ['Fira Sans', 'sans-serif'],
      serif: ['Fira Code', 'serif'],
    },
    extend: {}
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-neumorphism')]
}
