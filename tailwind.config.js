/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {},
    fontFamily: {
      bebasNeue: ["Bebas Neue", "sans-serif"],
      aoboshi: ["Aoboshi One", "serif"]
    }
  },
  plugins: []
};
