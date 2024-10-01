import { Roboto } from "next/font/google";

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
        raleway: "Raleway",
        raleway: ["Raleway", "sans-serif"],
      },
      screens: {
        xs: "360px",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
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
        ".font-raleway": {
          fontFamily: "Raleway",
        },
        ".font-lato": {
          fontFamily: "Lato",
        },
        ".font-inter": {
          fontFamily: "Inter",
        },
        ".primary-button": {
          fontFamily: "Roboto",
          fontWeight: "600",
          fontSize: "18px",
          backgroundColor: "#FEEA13", //! changed color
          color: "#000", //! changed color
          borderRadius: "8px",
          padding: "6px 18px",
          transition: "all 0.3s ease-in-out",
          border: "2px solid #000",
        },
        ".secondary-button": {
          fontFamily: "Roboto",
          fontWeight: "600",
          fontSize: "18px",
          backgroundColor: "#F81818", //! changed color
          color: "#fff", //! changed color
          borderRadius: "8px",
          padding: "6px 18px",
          transition: "all 0.3s ease-in-out",
          border: "2px solid #000",
        },
        ".submit-button": {
          fontFamily: "Roboto",
          fontWeight: "600",
          fontSize: "25px",
          backgroundColor: "#004AAD", //! changed color
          color: "#fff", //! changed color
          borderRadius: "8px",
          padding: "6px 18px",
          transition: "all 0.3s ease-in-out",
        },
        ".footer-button": {
          fontFamily: "Roboto",
          fontWeight: "600",
          fontSize: "18px",
          backgroundColor: "#EC3C3C", //! changed color
          color: "#fff ", //! changed color
          borderRadius: "8px",
          padding: "6px 18px",
          minWidth: "150px",
          transition: "all 0.3s ease-in-out",
        },
        ".primary-color": {
          backgroundColor: "#FAC003", //! changed color
        },
        ".secondary-color": {
          backgroundColor: "#004AAD ", //! changed color
        },
        ".secondary-color-darker": {
          backgroundColor: "#033578 ", //! changed color
        },
        ".tertiary-color": {
          backgroundColor: "#FF3131 ", //! changed color
        },
        ".tertiary-color2": {
          backgroundColor: "#FA1111 ", //! changed color
        },
        ".blue-text": {
          color: "#004AAD ", //! changed color
        },
        ".secondary-blue-text": {
          color: "#033578 ", //! changed color
        },
        ".yellow-text": {
          color: "#FFEA00 ", //! changed color
        },
        ".green-text": {
          color: "#4CCE32 ", //! changed color
        },
        ".red-text": {
          color: "#FF3131 ", //! changed color
        },
        ".quote-form": {
          backgroundColor:
            "rgba(255, 49, 49, 0.53)" /* rgba(red, green, blue, alpha) */,
        },
        ".text-shadow": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
        },
        ".custom-box-shadow": {
          boxShadow: "0 4px 48px rgba(0, 0, 0, 0.25)",
        },
        ".custom-box-shadow2": {
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.25)",
        },
        ".text-outline-blue": {
          "-webkit-text-stroke": "1px #004AAD",
        },
        ".text-indent": {
          textIndent: "4rem",
        },
        ".no-decoration": {
          textDecoration: "none",
        },
        ".bold-bolder": {
          fontWeight: "900",
        },
      });
    },
  ],
};
