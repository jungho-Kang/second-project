/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Vite 프로젝트에 맞는 파일 확장자 추가
  ],
  theme: {
    extend: {},
    screens: {
      mw: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      tb: "1194px",
    },
  },
  plugins: [],
};
