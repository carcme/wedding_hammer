/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        // Montserrat: ["Montserrat"],
        // Hind: ["Hind"],
        // Amatic: ["Amatic SC"],
        // Alegreya: ["Alegreya"],
        // English: ["IM Fell English"],
        // Cormorant: ["Cormorant Garamond"],
        // Lora: ["Lora"],
        Jost: ["Jost"],
      },
      colors: {
        accentDecoration: "#566E3D",
        primaryGreen: "#42554A",
        primaryGreenDark: "#2E3B33",
        primaryGreenLight: "#67776E",
        primaryPurple: "#31081F",
        primaryRosewood: "#6B0F1A",
        primaryGoldSatin: "#B9A44C",
        primaryBlueIndigo: "#0C4767",

        primaryGold: "#B2924E",

        primaryGoldDark: "#8f743c",
        primaryHoneyDew: "#EBF5DF",
        almostWhite: "#F6F6F5",
      },
      padding: {
        "1/2": "50%",
        full: "100%",
      },
      top: {
        "2/5": "40%",
      },
    },
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
  },
};
