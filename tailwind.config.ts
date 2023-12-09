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
      bodyBackground: "#DADADA",
      headerSeparator: "#DADADA",
      itemSeparator: "#EEEEEE",
      secondaryText: "#5F5F5F",
      itemDescription: "#464646",
      modalOverlay: "rgba(0,0,0,.65)",
    },
    extend: {
      transitionProperty: {
        heightHide: "max-height 0.5s ease-in-out",
      },
      boxShadow: {
        cards:
          "0 -5px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      },
      lineHeight: {
        longText: "1.172rem",
      },
    },
  },
  plugins: [],
};
export default config;
