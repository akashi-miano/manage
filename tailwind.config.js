/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(12, 88%, 59%)",
        secondary: "hsl(228, 39%, 23%)",
        neutral: "hsl(227, 12%, 61%)",
        neutral2: "hsl(233, 12%, 13%)",
        neutral3: "hsl(13, 100%, 96%)",
        neutralLight: "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        simplifyBgDesktop: "url(./src/assets/bg-simplify-section-desktop.svg)",
        simplifyBgMobile: "url(./src/assets/bg-simplify-section-mobile.svg)",
      },
    },
  },
  plugins: [],
};
