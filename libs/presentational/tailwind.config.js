const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
    ''
  ],
  theme: {
    colors: {
      primary: '#F2BA1E',
      secondary: '#9C5722',
      black: '#000000',
      white: '#FFFFFF',
    },
    extend: {
      activeHQFormBox: '!w-80 !opacity-100',
    },
  },
  plugins: [],
};
