import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        primaryLight: "rgba(var(--primaryLight))",
        primaryDark: "rgba(var(--primaryDark))",
        primaryExtraDark: "rgba(var(--primaryExtraDark))",
        secondary: "rgba(var(--secondary))",
        secondaryLight: "rgba(var(--secondaryLight))",
        secondaryDark: "rgba(var(--secondaryDark))",
        secondaryExtraDark: "rgba(var(--secondaryExtraDark))",
        white: "rgba(var(--white))",
        grey: "rgba(var(--grey))",
        black: "rgba(var(--black))",
        blackOpacity40: "rgba(var(--blackOpacity40))",
      },
      fontFamily: {
        upheaval: ["UpheavalTT", "monospace"],
        vt323: ["VT323", "monospace"],
      },
      dropShadow: {
        custom: "-3px 7px 0px rgba(75, 213, 233, 1)",
        // Diğer özel tanımlarınızı buraya ekleyebilirsiniz
        custom2: "-6px 7px 2px rgba(75, 213, 233, 1)",
        titleDrop: "0 4px 0 rgba(0, 210, 232, 1)",
        buttonDrop: "0 7px 0 rgba(17, 14, 6, 1)",
      },
      boxShadow: {
        bottom: "0 6px 10px rgba(0, 210, 232, 1)", // Sadece alt tarafa gölge
        bottom2: "0 6px 10px rgba(255, 206, 96, 1)", // Sadece alt tarafa gölge
        bottom3: "0 9px 10px rgba(0, 210, 232, 1)", // Sadece alt tarafa gölge
      },
    },
  },
  plugins: [],
};
export default config;
