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
    screens: {
      sm: { max: "767px" }, 
      md: { min: "768px", max: "1279px" }, 
      lg: { min: "1280px" }, 
    },
  },
  plugins: [],
};
