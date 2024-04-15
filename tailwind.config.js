/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      colors: {
        'backgroud-white': '#F6F7F8'
      },
      backgroundImage:{
        "home": "url('../assets/bg.png')"
      }
    },
  },
  plugins: [],
}

