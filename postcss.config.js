module.exports = {
  plugins: {
    'postcss-nested': {},
    tailwindcss: 'tailwind.config.js',
    // '@fullhuman/postcss-purgecss': process.env.NODE_ENV === 'production',
    autoprefixer: {},
  },
};
