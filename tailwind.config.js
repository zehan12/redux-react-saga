/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "redux": "rgb(89,61,136)",
        "react": "#61dafbaa",
        "saga": "#86D46B"
      },
    },
  },
  plugins: [],
};
