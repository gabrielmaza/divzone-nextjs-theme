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
        "gray-600": "#a299b9",
        "gray-700": "#433E4F",
        "gray-800": "#322E3C",
        "gray-900": "#1F1D23",
        "primary-100": "#dcccff",
        "primary-300": "#8165be",
        "primary-500": "#5e4e82",
        "secondary-50": "#ffd5fc",
        "secondary-100": "#ffb7f8",
        "secondary-200": "#b959b0",
        "secondary-300": "#ef27db",
        "secondary-400": "#a61998",
        "secondary-500": "#5a0e52",
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
