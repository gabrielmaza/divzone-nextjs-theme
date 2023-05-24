/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#ece7f9",
          200: "#c8c1db",
          300: "#a79fb9",
          400: "#9189a6",
          500: "#857c99",
          600: "#645d77",
          700: "#433E4F",
          800: "#322E3C",
          900: "#1F1D23",
        },
        primary: {
          100: "#d0b7ff",
          200: "#b09ae2",
          300: "#a287db",
          400: "#8c73c6",
          500: "#7b61b5",
          600: "#6d55a0",
          700: "#604b8f",
          800: "#4a386f",
          900: "#2f2447",
        },
        secondary: {
          100: "#ffd5fc",
          200: "#ffb7f8",
          300: "#ef27db",
          400: "#a61998",
          500: "#5a0e52",
        },
      },
      backgroundImage: (theme) => ({
        "mobile-home": "url('./img/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1600px",
      xxl: "1920px",
    },
  },
  plugins: [],
};
