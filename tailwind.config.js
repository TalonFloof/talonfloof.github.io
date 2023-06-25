/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          "talon-lightbg": "#f5f5f5",
          "talon-darkbg": "#232323",
        },
        keyframes: {
          "fade-from-bottom": {
            from: { transform: 'translateY(5rem)', opacity: '0' },
            to: { transform: 'translateY(0rem)', opacity: '1' },
          },
          "light-flicker": {
            '0%': {opacity: '1', 'animation-timing-function': 'cubic-bezier(0.4, 0, 0.6, 1)'},
            '25%': {opacity: '0.8', 'animation-timing-function': 'cubic-bezier(0.4, 0, 0.6, 1)'},
            '50%': {opacity: '1', 'animation-timing-function': 'cubic-bezier(0.4, 0, 0.6, 1)'},
            '75%': {opacity: '0.8', 'animation-timing-function': 'cubic-bezier(0.4, 0, 0.6, 1)'},
            '95%': {opacity: '1', 'animation-timing-function': 'cubic-bezier(0.4, 0, 0.6, 1)'},
            '97%, 97.9%': {opacity: '0.4', 'animation-timing-function': 'cubic-bezier(0.4, 0, 0.6, 1)'},

            '98%, 98.9%': {opacity: '1', 'animation-timing-function': 'linear'},
            '99%, 100%': {opacity: '0.4', 'animation-timing-function': 'linear'},
          }
        },
        animation: {
          "fade-from-bottom": "fade-from-bottom 500ms ease-out 1",
          "light-flicker": "light-flicker 5s infinite"
        },
      },
      plugins: [],
    },
  };