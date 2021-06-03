module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: '#818181',
      'light-gray': '#D9D9D9',
      black: '#181818',
      orange: '#F48F00',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
