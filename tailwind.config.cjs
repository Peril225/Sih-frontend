/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        300: "860px",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      colors: {
        bgr: "#171729",
        bgr1: "#232337",
        bgr12: "rgb(47 47 69)",
        bgr2: "#2a3652",
        bgr_dark: "#121217",
      },
      animation: {
        fade: "fadeOut 1s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-filters")],
};
