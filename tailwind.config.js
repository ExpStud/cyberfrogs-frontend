/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
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
        //template
        "custom-black": "#121212",
        "custom-white": "#F3F1EA",
        "custom-yellow": "#FFBA21",
        "custom-green": "#0B2D21",
        "custom-orange": "#FF5722",
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
