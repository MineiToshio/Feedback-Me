import type { Config } from "tailwindcss";
import appColors from "./src/styles/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      sm: "5px",
      DEFAULT: "10px",
    },
    extend: {
      colors: appColors,
    },
  },
  plugins: [],
};
export default config;
