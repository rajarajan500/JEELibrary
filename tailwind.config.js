/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
        openSans: ["Open Sans", "sans-serif"],
        poppins: ['Poppins', 'sans-serif'], custom: ['MyCustomFont', 'serif'],
      },
    },
  },
  plugins: [],
};
