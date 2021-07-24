module.exports = {
  mode: 'JIT',
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: 'class',
  theme: {
    extend: {
      maxHeight: {
        '700px': '700px'
      }
    }
  },
  variants: {},
  plugins: [],
}
