/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-dark": "#8A4FFF",
        "black-dark": "#121113",
        "purple-light": "#C3BEF7",
        "blue-light": "#E5ECF4",
        "green-light": "#EFFFFA",
      },
      fontFamily: {
        apfel: ["Apfel", "sans-serif"],
        "apfel-brukt": ["Apfel-Brukt", "sans-serif"],
        "apfel-fett": ["Apfel-Fett", "sans-serif"],
        "apfel-regular": ["Apfel-Regular", "sans-serif"],
        "array-regular": ["Array-Regular", "sans-serif"],
        "array-semibold": ["Array-Semibold", "sans-serif"],
        "array-semibold-wide": ["Array-SemiboldWide", "sans-serif"],
        "array-bold": ["Array-Bold", "sans-serif"],
      },
    },
  },
  plugins: [require('daisyui')],
};
