import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      mainColor: "#DFF5FF",
      subColor1: "#5356FF",
      subColor2: "#378CE7",
      subColor3: "#67C6E3",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
