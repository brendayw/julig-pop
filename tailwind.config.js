/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",   
    "./src/**/*.{html,js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'primary': '#523AFC',     
        'secondary': '#f7066a', 
        'testiary': '#fd5701',
        'black': '#000000',
        'white': '#ffffff',
      },
      fontFamily: {
        kotta: ['Kotta One', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      // height: {
      //   'screen': '100vh',
      // }
    },
  },
  plugins: [],
}