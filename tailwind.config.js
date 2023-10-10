// import konstaConfig config
const konstaConfig = require('konsta/config');

// wrap config with konstaConfig config
module.exports = konstaConfig({
  konsta: {
    colors: {
      'brand-bfs-primary': '#d1017d',
      'brand-bfs-secondary': '#0188c4',
      'brand-bfs-amber': '#4d3810',
      'brand-bfs-black': "#1d1d1d",
      'brand-bfs-white': "#fff",
      'brand-bfs-red': '#ff3b30',
      'brand-bfs-blue': '#2563eb',
      'brand-bfs-teal': '#0d9488',
      'brand-bfs-fuchsia': '#a21caf',
      "brand-bfs-pink": "#be185d"
    }
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'class'
  theme: {
    extend: {
      colors: {
        'bfs-primary': '#d1017d',
        'bfs-secondary': '#0188c4',
        'green-secondary': '#1E5128',
        'green-primary': '#4E9F3D',
        'green2': '#D8E9A8'
      },
    },
    fontFamily: {
      'teamdao': ['teamdao'],
      f1: ['f1']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
});