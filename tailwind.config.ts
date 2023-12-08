import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      inputBorder: "#8A94A4",
      transparent: "transparent",
      white: "#FFF",
      secondaryBackground: "#F8F9FA",
      border: "#EEE",
    },
    extend: {
      transitionProperty: {
        heightHide: "max-height 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
