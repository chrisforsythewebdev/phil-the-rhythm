/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          rhythm: {
            50:  "#f0fdfa",
            100: "#ccfbf1",
            200: "#99f6e4",
            300: "#5eead4",
            400: "#2dd4bf",
            500: "#14b8a6",
            600: "#0d9488",
            700: "#0f766e",
            800: "#115e59",
            900: "#134e4a",
          },
          sky: {
            400: "#38bdf8",
            500: "#0ea5e9",
            600: "#0284c7",
          },
          ink: "#0d1b2a",
          cream: "#fdfbf7",
        },
        fontFamily: {
          display: ["'Fredoka One'", "cursive"],
          body: ["'Nunito'", "sans-serif"],
        },
        animation: {
          wiggle: "wiggle 1s ease-in-out infinite",
          bounce2: "bounce2 1.4s infinite",
          float: "float 3s ease-in-out infinite",
          "spin-slow": "spin 8s linear infinite",
        },
        keyframes: {
          wiggle: {
            "0%, 100%": { transform: "rotate(-4deg)" },
            "50%": { transform: "rotate(4deg)" },
          },
          bounce2: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-12px)" },
          },
          float: {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-8px)" },
          },
        },
      },
    },
    plugins: [],
  };