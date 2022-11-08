/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F0F0F",
        secondary: "#00C896",
        light: "#F2F2F2",
      },
      fontFamily: {
        heading: ["Open Sans", "sans-serif"],
        paragraph: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
