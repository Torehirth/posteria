/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkGray: "#323436",
        black: "#181A1C",
        white: "#F9F9F9",
      },
    },
  },
  plugins: [],
};
