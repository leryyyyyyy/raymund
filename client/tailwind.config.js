import { Roboto } from "@next/font/google";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        headings: "Roboto",
        body: "Roboto",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".roboto-font-nav": {
          fontFamily: "Roboto",
          // fontWeight: "600",
          // fontSize: "18px",
        },
        ".primary-button": {
          fontFamily: "Roboto",
          fontWeight: "600",
          fontSize: "18px",
          backgroundColor: "#FEEA13", //! changed color
          color: "#000 ", //! changed color
          borderRadius: "8px",
          padding: "6px 18px",
          transition: "all 0.3s ease-in-out",
        },
        ".primary-color": {
          backgroundColor: "#FAC003", //! changed color
        },
      });
    },
  ],
};
