/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sana: "Inter var"
      },
      colors: {
        'blue': "#1DA1F2",
        'darkblue': "#2795D9",
        'lighblue': "#EFF9FF",
        'dark': "#1657786",
        'light': "#AABBC2",
        'lighter': "#E1E8ED",
        'lightest': "#F5FBFA",
      }
    },
  },
  plugins: [
  ],
}