// @ts-check

const { theme } = require('../../libs/presentational/tailwind.config');

module.exports = {
  content: ['./App.tsx', './index.js'],
  theme: {
    extend: {
      ...theme,
    },
  },
  plugins: [],
};
