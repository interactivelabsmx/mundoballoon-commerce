module.exports = {
  content: ['**/*.{tsx,ts}'],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
  theme: {
    colors: {
      purple: '#961E82',
      orange: '#FFB400',
      cyan: '#AAE6D2',
    },
  },
};
