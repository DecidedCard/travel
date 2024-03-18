import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#DFF5FF",
        subColor1: "#5356FF",
        subColor2: "#378CE7",
        subColor3: "#67C6E3",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
