/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-grey": "hsl(248deg 10% 15%)",
        grey: "hsl(251deg 9% 53%)",
        "almost-white": "hsl(252deg 11% 91%)",
        "very-dark-grey": "#08070B",
        "neon-green": "hsl(127deg 100% 82%)",
        red: "hsl(0deg 91% 63%)",
        orange: "hsl(13deg 95% 66%)",
        yellow: "hsl(42deg 91% 68%)",
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif, bold",
      },
    },
  },
  plugins: [],
};
