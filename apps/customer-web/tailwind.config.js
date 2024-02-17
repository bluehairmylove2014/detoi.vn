const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const {theme} = require('../../libs/presentational/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    ...theme,
    extend: {
        backgroundImage: {
        'login': "url('/assets/images/login.png')",
        'register': "url('/assets/images/register.png')",
        'fgpwd-email': "url('/assets/images/fgpwd-enter-email.png')",
        'fgpwd-otp': "url('/assets/images/fgpwd-enter-otp.png')"
      }
    },
  },
  plugins: [],
};
