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
        light: "#f0f1fa",
        dark: "#121212",
        // primary: "#00A3FF",
        primary: "#A8FF78",
        bgprimary: "rgba(0, 163, 255, 0.09)",
        contrast: "#1D2A16",
      },
      borderRadius: {
        box: "60px",
      },
    },
  },
  plugins: [],
};
