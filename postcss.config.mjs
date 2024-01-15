// import { join } from 'path';

export const plugins = {
  'postcss-import': {},
  'tailwindcss/nesting': 'postcss-nesting',
  tailwindcss: {
    // config: join(__dirname, 'tailwind.config.cjs'),
    config: './tailwind.config.cjs',

  },
  autoprefixer: {},
};
