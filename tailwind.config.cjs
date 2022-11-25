/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "375px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1440px",
        xl: "1700px",
      },
      colors: {
        darkBlue: "#2d314d",
        limeGreen: "#31d35c",
        brightCyan: "#2bb7da",
        grayishBlue: "#9698a6",
        lightGrayishBlue: "#f3f4f6",
        veryLightGray: "#fafafa",
        white: "#ffffff"
      },
    },
  },
  plugins: [],
};
