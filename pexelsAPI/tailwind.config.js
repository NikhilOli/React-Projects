/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#ec576b",
        aqua: "#4ec5c1",
        lime: "#e5e338",
      },
    },
  },
  plugins: [],
};
