/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
      },
      colors: {
        "primary-bg": "#F8F7F5",
        brown4: "#FCEFE0",
        brown3: "#835B38",
        brown2: "#705F4F",
        brown1: "#413832",
        black: "#262626",
      },
    },
    plugins: [],
  },
};
