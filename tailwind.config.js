/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "var(--surface-color)",
        base: "var(--base-color)",
        text: "var(--text-color)",
        "secondary-text": "var(--secondary-text-color)",
        brand: "var(--brand-color)",
      },
    },
  },
  plugins: [],
};