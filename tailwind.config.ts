import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B0B0B",
        night: "#111111",
        graphite: "#171717",
        ash: "#A1A1AA",
        flare: "#FF2D2D"
      },
      boxShadow: {
        glow: "0 0 42px rgba(255, 45, 45, 0.22)",
        soft: "0 24px 90px rgba(0, 0, 0, 0.45)"
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
