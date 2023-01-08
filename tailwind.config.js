/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
        'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#DC5A5A',
          light: '#EDACAC',
          cool: '#DA8ECE',
          warm: '#FB5741'
        },
        secondary: {
          DEFAULT: '#FFCBAE',
          dark: '#1A1B21',
        },
        tertiary: {
          DEFAULT: '#FFFFFF',
          dark: '#4A273C'
        },
        indicator: {
          green: '#84BB77',
          red: '#FB5741'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
