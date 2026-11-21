import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: "#000000",
        "surface-elevated": "#0a0a0a",
        foreground: "#ffffff",
        "muted-foreground": "#808080",
        primary: "#e1a87a",
        "on-primary": "#111111",
        border: "#2e2e2e",
        "border-subtle": "rgba(255, 255, 255, 0.18)",
      },
      borderRadius: {
        none: "0px",
        DEFAULT: "0px",
        full: "9999px",
      },
      spacing: {
        "space-1": "8px",
        "space-2": "12px",
        "space-3": "16px",
        "space-4": "20px",
        "space-5": "36px",
        "space-6": "44px",
        "space-7": "48px",
        "space-8": "96px",
      },
      maxWidth: {
        content: "1354px",
      },
      fontFamily: {
        display: [
          '"orpheus-pro"',
          '"Cormorant Garamond"',
          '"Playfair Display"',
          "Georgia",
          "serif",
        ],
        sans: ['"Poppins"', "system-ui", "sans-serif"],
        mono: ['"Poppins"', "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
