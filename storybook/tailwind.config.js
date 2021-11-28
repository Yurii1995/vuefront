module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: false,
  // theme: {
  //   extend: {
  //     vuefront: {
  //       colors: {
  //         primary: 'red'
  //       }
  //     }
  //   }
  // },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("../tailwind/plugin.js"),
  ],
};