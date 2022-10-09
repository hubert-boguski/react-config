/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        medium: ["AirbnbCereal_W_Md"],
      },
      colors: {
        gray: {
          DEFAULT: "#161616",
          50: "#FBFBFB",
          100: "#E2E2E2",
          200: "#AFAFAF",
          300: "#7C7C7C",
          400: "#494949",
          500: "#161616",
          600: "#0C0C0C",
          700: "#020202",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
