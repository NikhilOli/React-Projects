/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#96C2DB",
        gray: "#E5EDF1",
        white: "#FFFFF",
        myblack: "#454647",
      },
    },
  },
  plugins: [],
};
