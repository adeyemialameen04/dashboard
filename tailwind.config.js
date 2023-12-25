// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

export default {
  plugins: [],
  theme: {
    extend: {
      colors: {
        // Add your dummy colors here
        greyBlue: "#151D48",
        lightPurple: "#5D5FEF",
        greyBlueAccent: "#737791",
        mediumSlateBlue: "#5D5FEF",
      },
    },
  },
  purge: ["./index.html", "./src/**/*.{svelte,js,ts}"], //for unused css
  // content: [
  //   "./index.html",
  //   "./src/**/*.{svelte,js,ts}", // Include Svelte files
  // ],
  variants: {
    extend: {},
  },
  darkmode: false, // or 'media' or 'class'
};
