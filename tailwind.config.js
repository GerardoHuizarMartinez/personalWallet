/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',

  content: [
    "./src/**/*.{html,ts}",
  ],

  theme: {
    colors: {
      'blue':'#004788',
      'white' : '#fff',
      'black' : '#000',
      'gray' : '#818181',
      'red' : '#F82E2E',
      'green' : '#054D1D',
      'yellow' : "#D0BF10",
      'orange' : '#C17842',
      'light-black': '#121212',
      'light-gray' : '#CBD5E1',
      'light-blue' : "#65b6ff",
      'light-green' : '#41e177',
      'red2' : '#E81313'
      
    },

    extend: {
      height: {
        'head': '10vh',
        'bod': '90vh'
      }
    },
  },
  plugins: [],
}

