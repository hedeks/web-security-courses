module.exports = {
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      animation: {
        "slide": "slide 0.4 ease-in-out",
      },
      keyframes: {
        slide: {
          '0%': {transform: 'translateX(5px)'},
          '50%': {transform: 'translateX(-5px)'},
          '100%': {transform: 'translateX(0)'},
        }
      }
    },
  },
};
