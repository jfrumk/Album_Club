/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,}"],
  theme: {
    extend: {
      colors: {
        carbon: {
          500: "#57504d",
          600: "#453f3d",
          700: "#393433",
          800: "#2a2727",
          900: "#181716",
        },
      },
    },
  },
  plugins: [],
};
