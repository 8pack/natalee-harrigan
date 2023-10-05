/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "book-yellow": "#fcc64e",
        "book-gray": "#1a1a1c",
        "book-theme": "#fcc64e",
        "nat-light-grey": "#bcbec1",
      },
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
        body: ['"Open Sans"'],
      },
    },
  },
  plugins: [],
};
