module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      'text': 'rgba(254, 254, 254, 1)',
      'text-transparent': 'rgba(254, 254, 254, 0.75)',
      'purple-bg': 'rgba(91, 44, 203, 0.15)',
      'pink-border': 'rgba(211, 60, 231, 0.30)',
      'blue-accent': 'rgba(167, 225, 253, 1)',
      'pink-accent': 'rgba(232, 148, 251, 1)',
    },
    fontFamily: {
      'krona': "'Krona One'",
      'space': "'Space Grotesk'",
    },
    minHeight: {
      '105': '105px',
      '125': '125px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
