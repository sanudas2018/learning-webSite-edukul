/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8c95f7",

          secondary: "#ef4c9e",

          accent: "#9af248",

          neutral: "#1B232C",

          "base-100": "#F0F0F5",

          info: "#4261EB",

          success: "#5DE5B7",

          warning: "#B8720A",

          error: "#FB374E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
