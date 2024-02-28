/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
        Sixtyfour: ["Sixtyfour"],
      },
      colors: {
        Navy: "#265073",
        Sage: "#F1FADA",
        Teal: "#9AD0C2",
        Green: "#2D9596",
        Dark: "#0f172a",
        secondary: "#64748b",
      },
    },
  },
  plugins: [],
};
