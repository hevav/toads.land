module.exports = {
  purge: ['./src/**/*.svelte', './src/**/*.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'neutral': {
          900: '#050505',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
