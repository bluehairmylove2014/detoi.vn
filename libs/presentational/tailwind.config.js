const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
    '',
  ],
  theme: {
    colors: {
      primary: '#F2BA1E',
      secondary: '#9C5722',
      black: '#000000',
      white: '#FFFFFF',
      gray: '#808080',
      zinc: '#e4e4e7', // light gray
      stone: '#1c1917', // light black
      lightStone: '#292524', // light black
      rose: '#e11d48', // soft red
      yellow: '#ca8a04', // USE FOR DECORATE DOT ONLY
      blue: '#2563eb', // USE FOR DECORATE DOT ONLY
      cyan: '#155e75', // soft blue
    },
    extend: {
      activeHQFormBox: '!w-80 !opacity-100',
    },
  },
  plugins: [],
};
