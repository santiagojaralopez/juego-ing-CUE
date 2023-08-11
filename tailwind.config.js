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
      'turquoise': 'rgb(0, 218, 185)',
      'cue-blue': 'rgb(0, 18, 63)',
      'cue-red': 'rgb(180, 35, 37)',
      'cue-black': 'rgb(31, 30, 28)',
      'cue-grey': '#F0F0F0'
    }),
    textColor: {
      'cue-blue': 'rgb(0, 18, 63)',
      'cue-red': 'rgb(180, 35, 37)',
      'cue-black': 'rgb(31, 30, 28)',
      'cue-white': '#FAFAFAFA'
    },
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