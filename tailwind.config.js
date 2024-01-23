/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-blue": "#0F0147",
        "theme-black": "#000000",
        "theme-yellow": "#FFDE59",
        "theme-gray": "#D9D9D9",
      },
      fontFamily: {
        v400: ["Verdana", "sans-serif"],
        v700: ["Verdana Bold", "sans-serif"],
        vp300: ["Verdana Pro Light", "sans-serif"],
        vp400: ["Verdana Pro Regular", "sans-serif"],
        vp600: ["Verdana Pro Semi Bold", "sans-serif"],
        vp700: ["Verdana Pro Bold", "sans-serif"],
        vpc300: ["Verdana Pro Cond Light", "sans-serif"],
        vpc400: ["Verdana Pro Cond Regular", "sans-serif"],
        vpc600: ["Verdana Pro Cond Semi Bold", "sans-serif"],
        vpc700: ["Verdana Pro Cond Bold", "sans-serif"],
        vpc900: ["Verdana Pro Cond Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
