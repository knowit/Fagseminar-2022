/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      ksand: "#E4E1DB",
      kpear: "#B7DEBD",
      kforest: "#4B6455",
      kflamingo: "#FAC0B1",
      kmint: "#DBEEDE",
      kmelon: "#FCDFD8",
      klollipop: "#FF00FF",
      kleather: "#7C3647",
      kapple: "#00B055",
      kclay: "#A5B1AA",
      kblack: "#333333",
    },
    fontFamily: {
      display: ["Arial", "normal"],
    },
    extend: {},
  },
  plugins: [],
};
