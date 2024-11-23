/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ['"Sora", sans-serif;'],
      },
      colors: {
        "brand-purple": "#8A3993",
        "brand-black": "#08090D",
        "brand-white": "#EDF2EF",
      },
    },
  },
  plugins: [require("daisyui")],
};
