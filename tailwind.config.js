/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      darkGray: "hsl(0, 0%, 55%)",
      veryDarkGray: "hsl(0, 0%, 41%)",
    },
    fontSize: {
      15: "15px",
      45: "2.8125rem",
      25: "1.6rem",
    },
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        alata: ["Alata", "sans-serif"],
      },
    },
  },
  plugins: [],
};
