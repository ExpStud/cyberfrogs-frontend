/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./apps/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        explorerData:
          "0px 3px 6px rgba(23, 23, 23, 0.10), 0px 11px 11px rgba(23, 23, 23, 0.09), 0px 24px 14px rgba(23, 23, 23, 0.05), 0px 43px 17px rgba(23, 23, 23, 0.01), 0px 67px 19px rgba(23, 23, 23, 0.00)",
        dashboardData:
          "drop-shadow(0px 3px 6px rgba(23, 23, 23, 0.10)) drop-shadow(0px 11px 11px rgba(23, 23, 23, 0.09)) drop-shadow(0px 24px 14px rgba(23, 23, 23, 0.05)) drop-shadow(0px 43px 17px rgba(23, 23, 23, 0.01)) drop-shadow(0px 67px 19px rgba(23, 23, 23, 0.00))",
      },
      backgroundColor: {
        "custom-grey": "rgba(217, 217, 217, 0.08)",
        "custom-grey-light": "rgba(217, 217, 217, 0.16)",
      },
      backgroundImage: {
        "splash-gradient":
          "linear-gradient(180deg, rgba(5, 17, 13, 0.75) 0%, rgba(12, 44, 33, 0.00) 100%)",
        explorerData: "url('/images/pages/explorer/data-bg.svg')",
        explorerToggleBg: "url('/images/pages/explorer/toggle-bg.svg')",
        explorerToggleActiveBg:
          "url('/images/pages/explorer/toggle-active-bg.svg')",
        explorerToggle1Bg: "url('/images/pages/explorer/toggle-1-bg.svg')",
        explorerToggleActive1Bg:
          "url('/images/pages/explorer/toggle-1-active.svg')",
        dashboardData: "url('/images/pages/dashboard/data-bg.svg')",
        dashboardBg: "url('/images/pages/dashboard/dashboard-bg-full.svg')",
        manageBg: "url('/images/pages/dashboard/manage-bg.svg')",
        raffleCardBg: "url('/images/pages/raffles/card-bg-1.svg')",
        modalBg: "url('/images/general/backgrounds/modal.svg')",
        "connect-bg": "url('/images/pages/mint/connect-bg.svg')",
        "select-bg": "url('/images/pages/mint/select-bg.svg')",
        "start-upgrade-bg":
          "url('/images/general/backgrounds/start-upgrade.svg')",
      },
      fontFamily: {
        rajdhani: ["Rajdhani-Medium"],
        "rajdhani-semibold": ["Rajdhani-SemiBold"],
        "rajdhani-bold": ["Rajdhani-Bold"],
        inter: ["Inter", "Monospace"],
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
          DEFAULT: "#196349",
          300: "#7CDDBB",
          500: "#196349",
          800: "#124835",
          900: "#0B2D21",
          950: "#081F17",
          999: "#05110D",
        },
        "cf-gold": {
          DEFAULT: "#FFF79E",
          500: "#E1B53D",
        },
        //template
        "custom-black": "#121212",
        "custom-yellow": "#FFBA21",
        "custom-red": "#DF1D00",
      },
      screens: {
        "2xs": "360px",
        xs: "400px",
        "3xl": "2160px",
        "4xl": "3000px",
      },
    },
  },
  plugins: [],
};
