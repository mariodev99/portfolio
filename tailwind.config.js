/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        // Theme 1
        // dark: "#001018",
        // primary: "#eaff00",
        // bgprimary: "rgba(0, 163, 255, 0.09)",

        // Theme 2
        light: "#f0f1fa",
        dark: "#2b2e3a",
        primary: "#00A3FF",

        // primary: "#00A3FF",
        bgprimary: "rgba(0, 163, 255, 0.09)",
      },
      borderRadius: {
        box: "60px",
      },
    },
  },
  plugins: [],
};
