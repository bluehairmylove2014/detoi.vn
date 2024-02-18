const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const { theme } = require('../../libs/presentational/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src}/**/*!(*.stories|*.spec).{ts,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    ...theme,
    extend: {},
  },
  plugins: [],
};
