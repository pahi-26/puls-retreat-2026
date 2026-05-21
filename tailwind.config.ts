import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#172554",
        lavender: "#f4efff",
        mist: "#f8f8fc",
        teal: "#6aa6a1",
        plum: "#8b7cc8",
        borderSoft: "rgba(82, 94, 150, 0.15)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        display: [
          "\"Space Grotesk\"",
          "\"Avenir Next\"",
          "\"Segoe UI\"",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        glow: "0 20px 60px rgba(110, 90, 180, 0.12)",
        float: "0 12px 40px rgba(23, 37, 84, 0.10)"
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(circle at 20% 20%, rgba(132, 97, 194, 0.24), transparent 30%), radial-gradient(circle at 80% 15%, rgba(106, 166, 161, 0.24), transparent 24%), radial-gradient(circle at 50% 80%, rgba(255, 255, 255, 0.6), transparent 28%), linear-gradient(135deg, #f5f0ff 0%, #eef8f7 52%, #f9f7ff 100%)"
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" }
        },
        lineGrow: {
          from: { transform: "scaleY(0)", opacity: "0.2" },
          to: { transform: "scaleY(1)", opacity: "1" }
        }
      },
      animation: {
        drift: "drift 12s ease-in-out infinite",
        "pulse-soft": "pulseSoft 8s ease-in-out infinite",
        "line-grow": "lineGrow 1.1s ease-out forwards"
      }
    }
  },
  plugins: []
};

export default config;
