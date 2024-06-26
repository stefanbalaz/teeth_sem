import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlack: "#141617",
        customGreenExtraBright: "#dbebe9",
        /* customGreenExtraBright: "#EDF5F4", */
        customGreenBright: "#4C9F94",
        customGreenDark: "#2a5854",
        customGrayBright: "#f9f9fb",
      },
    },
  },
  plugins: [],
});
