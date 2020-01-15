module.exports = {
  theme: {
    extend: {
      fontFamily: {
        body: ['Shabnam'],
      },
      borderRadius: {
        xl: '1rem',
      },
      boxShadow: { custom: '0 4px 120px rgba(0, 0, 0, 0.1)' },
      colors: {
        backWhite: {
          pure: '#fffffe',
          opaque: '#f6efef',
          warm: '#f0e2e1',
          opaque2: '#f2eef5',
        },
        foreText: {
          heading: '#181818',
          paragraph: '#2e2e2e',
          white: '#ddd6d6',
          link: '#50c4cf',
        },
        primary: {
          100: '#beffff',
          200: '#a3ffff',
          300: '#87f8ff',
          400: '#6cdee9',
          500: '#4fc4cf',
          600: '#2eabb6',
          700: '#00939e',
          800: '#007b86',
          900: '#00646f',
        },
        secondary: {
          100: '#ffb2ff',
          200: '#ea99ff',
          300: '#cf80ff',
          400: '#b467ff',
          500: '#994ff3',
          600: '#7e36d9',
          700: '#631cbf',
          800: '#4700a5',
          900: '#27008d',
        },
        teriary: {
          100: '#ffffe9',
          200: '#ffffcb',
          300: '#ffffad',
          400: '#fffb90',
          500: '#fbdd74',
          600: '#dcc058',
          700: '#bda43d',
          800: '#9f8820',
          900: '#826e00',
        },
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss-dir')()],
};
