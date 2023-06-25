/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          "talon-lightbg": "#f5f5f5",
          "talon-darkbg": "#232323",
        }
      },
      keyframes: {
        "fade-from-bottom": {
          from: { transform: 'translateY(5rem)', opacity: '0' },
          to: { transform: 'translateY(0rem)', opacity: '1' },
        }
      },
      animation: {
        "fade-from-bottom": "fade-from-bottom 500ms ease-out 1",
      },
      plugins: [],
    },
  };