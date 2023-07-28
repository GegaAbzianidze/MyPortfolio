/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      filter: {
        // Define custom filter options
        grayscale: "grayscale(1)",
        contrast: "contrast(100%)",
        brightness: "brightness(1)",
      },
      mixBlendMode: {
        // Define custom mix-blend-mode options
        multiply: "multiply",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
  // daisyui: {
  //   themes: [
  //     "retro"
  //   ],
  // },
};
