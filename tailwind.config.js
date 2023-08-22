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
    extend: {
      backgroundImage: {
        'dev-team-intro': "linear-gradient(to right, rgba(19, 71, 117, .8), rgba(45, 116, 179, .8)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
        'dev-team-roles': "linear-gradient(to right, rgba(57, 23, 79, .8), rgba(79, 1, 1, .8)), url('https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1206&q=80')",
     },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    nextui()
  ],
};