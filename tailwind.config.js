/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "soda-red": "#CA2352",
        "soda-blue": "#3A64E4",
        "soda-gray": "#B5BABA",
        "soda-white": "#E7E7E5",
        "soda-black": "#080909",
      },
      "soda-blue": {
        900: "oklch(55% 0.2 266)",
        775: "oklch(55% 0.2 266)",
        675: "oklch(55% 0.2 266)",
        550: "oklch(55% 0.2 266)",
        450: "oklch(55% 0.2 266)",
        325: "oklch(55% 0.2 266)",
        225: "oklch(55% 0.2 266)",
        100: "oklch(55% 0.2 266)",
      },
      "soda-red": {
        900: "oklch(55% 0.2 12)",
        775: "oklch(55% 0.2 12)",
        675: "oklch(55% 0.2 12)",
        550: "oklch(55% 0.2 12)",
        450: "oklch(55% 0.2 12)",
        325: "oklch(55% 0.2 12)",
        225: "oklch(55% 0.2 12)",
        100: "oklch(55% 0.2 12)",
      },
      surface: {
        900: "oklch(13.85% 0.0019 196.94)",
        775: "oklch(21.5% 0.001 196.94)",
        675: "oklch(33% 0.003 196.94)",
        550: "oklch(44.5% 0.004 196.94)",
        450: "oklch(55.5% 0.006 196.94)",
        325: "oklch(67% 0.005 196.94)",
        225: "oklch(78.5% 0.006 196.94)",
        100: "oklch(90% 0.006 196.94)",
      },
      success: {
        900: "oklch(82.56% 0.1805 124.75)",
        775: "oklch(82.56% 0.1805 124.75)",
        675: "oklch(82.56% 0.1805 124.75)",
        550: "oklch(82.56% 0.1805 124.75)",
        450: "oklch(82.56% 0.1805 124.75)",
        325: "oklch(82.56% 0.1805 124.75)",
        225: "oklch(82.56% 0.1805 124.75)",
        100: "oklch(82.56% 0.1805 124.75)",
      },
      caution: {
        900: "oklch(78.5% 0.148 90.52)",
        775: "oklch(78.5% 0.148 90.52)",
        675: "oklch(78.5% 0.148 90.52)",
        550: "oklch(78.5% 0.148 90.52)",
        450: "oklch(78.5% 0.148 90.52)",
        325: "oklch(78.5% 0.148 90.52)",
        225: "oklch(78.5% 0.148 90.52)",
        100: "oklch(78.5% 0.148 90.52)",
      },
      danger: {
        900: "oklch(62.74% 0.2425 16.82)",
        775: "oklch(62.74% 0.2425 16.82)",
        675: "oklch(62.74% 0.2425 16.82)",
        550: "oklch(62.74% 0.2425 16.82)",
        450: "oklch(62.74% 0.2425 16.82)",
        325: "oklch(62.74% 0.2425 16.82)",
        225: "oklch(62.74% 0.2425 16.82)",
        100: "oklch(62.74% 0.2425 16.82)",
      },
      info: {
        900: "oklch(63.28% 0.1249 231.85)",
        775: "oklch(63.28% 0.1249 231.85)",
        675: "oklch(63.28% 0.1249 231.85)",
        550: "oklch(63.28% 0.1249 231.85)",
        450: "oklch(63.28% 0.1249 231.85)",
        325: "oklch(63.28% 0.1249 231.85)",
        225: "oklch(63.28% 0.1249 231.85)",
        100: "oklch(63.28% 0.1249 231.85)",
      },
    },
    animation: {
      marquee: "marquee 25s linear infinite",
      marquee2: "marquee2 25s linear infinite",
    },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
      marquee2: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0%)" },
      },
    },
    fontFamily: {
      space: ["Space Grotesk", "sans-serif"],
    },
    backgroundImage: {
      "glass-gradient":
        "linear-gradient(to bottom, transparent, rgba(55, 65, 81, 0.3))",
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    heroui(),
  ],
};
