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
      // Dominant Color
      primary: '#775C11',
      secondary: '#F2BA1E',
      soft: '#FFE9AB',
      black: '#000000',
      white: '#FFFFFF',

      nearBlack: '#566483',
      stone: '#1c1917', // light black
      lightStone: '#292524',
      gray: '#808080',
      midgray: '#79747E',
      zinc: '#e4e4e7', // light gray

      // Accent Color
      rose: '#e11d48', // soft red
      lightYellow: '#FFE9AB',
      blue: '#2563eb', // USE FOR DECORATE DOT ONLY
      cyan: '#155e75', // soft blue

      // Default
      transparent: 'transparent',
      inherit: 'inherit',
    },
    extend: {
      activeHQFormBox: '!w-80 !opacity-100',
    },
  },
  plugins: [],
};
