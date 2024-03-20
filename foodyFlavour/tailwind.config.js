/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#5B9279",
        whitishGray: "#E5EDF1",
        gray: "#cfcbca",
        wood: "#6F432A",
      },
    },
  },
  plugins: [],
};
