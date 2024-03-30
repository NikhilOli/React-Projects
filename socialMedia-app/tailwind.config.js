/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cleanblue: "#a7d2cb",
        butteryellow: "#f2d388",
        salmonred: "#c98474",
        eggplant: "#874c62",
      },
    },
  },
  plugins: [],
};
