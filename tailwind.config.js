/** @type {import('tailwindcss').Config} */
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Vite 프로젝트에 맞는 파일 확장자 추가
  ],
  theme: {
    extend: {},
    screens: {
      mw: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      tb: "1400px",
    },
    colors: {
      primary: "#6F4CDB",
      primaryFocus: "#4825b6",
      secondary: "#C4B6F0",
      third: "#E7E1F9",
      white: "#ffffff",
      black: "#333333",
      darkGray: "#929292",
      gray: "#eeeeee",
    },
  },
  plugins: [scrollbarHide],
};
