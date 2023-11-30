const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#772E71",
        secondary: "#FAFAFA",
        accent: "#0F0F0F",
      },
      height: {
        160: "160%",
      },
    },
  },
  plugins: [],
};
