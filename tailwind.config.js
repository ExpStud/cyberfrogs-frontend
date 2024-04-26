/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        "custom-grey": "rgba(217, 217, 217, 0.08)",
        "custom-grey-light": "rgba(217, 217, 217, 0.16)",
      },
      backgroundImage: {
        main: "url('/images/background.png')",
        "white-gradient": `linear-gradient(360.58deg, #FFFFFF 43.76%, rgba(255, 255, 255, 0) 106.82%)`,
      },
      fontFamily: {
        rajdhani: ["Rajdhani-Medium"],
        "rajdhani-semibold": ["Rajdhani-SemiBold"],
        "rajdhani-bold": ["Rajdhani-Bold"],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      fontStyle: {
        italic: "italic", // Add "italic" style to the font family
      },
      colors: {
        "cf-orange": {
          DEFAULT: "#E62E05",
          light: "#FA3D13",
          dark: "#E62E05",
        },
        "cf-white": {
          DEFAULT: "#FFFEF3",
          light: "#FFFEF3",
          dark: "#FEE1DB",
        },
        "cf-green": {
          DEFAULT: "#0B2D21",
          light: "#196349",
          dark: "#124835",
        },
        //template
        "custom-black": "#121212",
        "custom-yellow": "#FFBA21",
        "custom-red": "#DF1D00",
      },
      screens: {
        "2xs": "360px",
        xs: "420px",
        "3xl": "2160px",
        "4xl": "3000px",
      },
    },
  },
  plugins: [],
};
