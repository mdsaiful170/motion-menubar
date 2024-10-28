/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/componet/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        popines:["Poppins", "sans-serif"],
        rubik:["Rubik Wet Paint", "system-ui"],
      },
      colors: {
        pinkcolor: "#EF9995",
        darkGreen: "#A4CBB4",
        yellowcolor: "#DC8850",
        headingcolor: "#282425",
        textcollor: "#4F4A46",
        bgcolor: "#E4D8B4",
        darktextwhite:"#FDFDFD",
        darkBg: "#171212",
        darktextcolor:"#CDCDCD"
      },
    },
  },
  plugins: [],
};


/* font-family: ; */
/* font-family: ; */
