/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         white: "#fff",
//         black: "#000",
//         darkslategray: "#2d3e50",
//         lavender: "#e0e7ff",
//       },
//       spacing: {},
//       fontFamily: {
//         inter: "Inter",
//         poppins: "Poppins",
//       },
//       borderRadius: {
//         "181xl": "200px",
//       },
//     },
//     fontSize: {
//       "281xl": "300px",
//       "56xl": "75px",
//       "101xl": "120px",
//       "381xl": "400px",
//       "81xl": "100px",
//       "141xl": "160px",
//       "531xl": "550px",
//       "118xl": "137px",
//       "201xl": "220px",
//       inherit: "inherit",
//     },
//     screens: {
//       mq767: {
//         raw: "screen and (max-width: 767px)",
//       },
//       mq450: {
//         raw: "screen and (max-width: 450px)",
//       },
//     },
//   }
// }