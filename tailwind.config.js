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
      plugins: [],
    },
  };