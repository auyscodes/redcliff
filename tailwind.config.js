/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rblack: "#262626",
        rgray: "#333",
      },
      width: {
        170: "664px",
      },
      height: {
        89: "89vh",
      },
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
  },
  plugins: [],
};
