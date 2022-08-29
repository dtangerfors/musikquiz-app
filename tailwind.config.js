const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['trade-gothic-next', ...defaultTheme.fontFamily.sans],
        'sans-condensed': ['trade-gothic-next-condensed', 'sans-serif']
      },
      keyframes: {
        'timerWidth': {
          '0%': {width: '0'},
          '100%': {width: '100%'}
        }
      },
      animation: {
        'timerWidth': 'timerWidth linear 1',
      }
    },
  },
  plugins: [],
}
