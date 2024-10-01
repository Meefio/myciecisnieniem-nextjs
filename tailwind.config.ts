import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main-color": "var(--main-color)",
        "secondary-color": "var(--secondary-color)",
        "stroke-blue-color": "var(--stroke-blue-color)",
        "stroke-color": "var(--stroke-color)",
        "bg-gray": "var(--bg-gray)",
      },
    },
  },
  plugins: [],
};
export default config;
