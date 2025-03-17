/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#E0010D",
        secondary: "#B10919",
        customGreen: "#1BAA76",
        gray: "#F8F9FA",
      },
      fontFamily: {
        main: ["Roboto", "sans-serif"],
        title: ["Holtwood One SC", "serif"],
      },
    },
  },
  plugins: [],
};
