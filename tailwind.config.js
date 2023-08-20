const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'cue-blue': 'rgb(0, 18, 63)',
      'turquoise': 'rgb(0, 218, 185)',
      'transparent': 'rgba(0, 0, 0, 0)',
    }),
    textColor: theme => ({
      ...theme('colors')
    }),
    fontFamily: {
      cocogoose: ["Cocogoose"],
      calibri: ['Calibri', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated'),
    nextui()
  ],
};