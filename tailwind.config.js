import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Varela Round", "sans-serif"],
    },
    extend: {
      colors: {
        bgBlue: "#25384D",
        offWhite: "#FAFFFA",
        turquoise: {
          100: "#FAFFFA",
          200: "#CEFFF9",
          300: "#B0FAF1",
          400: "#97FFE9",
          500: "#7EFFE2",
          600: "#31F8DA",
          700: "#00E9CA",
          800: "#00b099",
        },
      },
    },
  },
  plugins: [flowbite],
};
