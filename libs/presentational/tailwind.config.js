const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const { colors } = require('./src/native/styles');

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
    colors,
  },
  plugins: [],
};
