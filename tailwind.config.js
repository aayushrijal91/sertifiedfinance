/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,php}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1600px',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#096377',
        secondary: '#9AD3D5',
        indigo: "#798EFE",
        grey: '#6A7D82',
        dark: '#2F2F2F',
        light: "#C0DEE0",
        'cool-white': "#faffff",
        'dark-blue': "#1C305F"
      },
      fontFamily: {
        'niveau-grotesk': ["niveau-grotesk", "sans-serif"],
        'visby': ["Visby", "sans-serif"],
      },
      fontSize: {
        35: '35px',
        55: '55px',
        85: '85px',
      },
      boxShadow: {
        'drop': '3px 5px 10px 0px rgba(0, 0, 0, 0.41)'
      },
      borderRadius: {
        20: '20px',
        30: '30px',
      }
    },
  },
  plugins: [],
}

