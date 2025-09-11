import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", ".dark"],

  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],

  theme: {
    container: { center: true, padding: "1rem" },
    extend: {},
  },

  plugins: [],
};

export default config;
