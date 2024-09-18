/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        "custom-left": "-20px 0px 20px 0px #00000033",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(206.53deg, rgba(255, 255, 255, 0.7) 4.83%, rgba(203, 201, 255, 0) 87.26%)",
      },
    },
  },
};
