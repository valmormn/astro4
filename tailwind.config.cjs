// tailwind.config.cjs
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // inherit: "inherit",
      // current: "currentColor",
      // transparent: "transparent",
      // black: "#000",
      // white: "#fff",
      // red: colors.red,
      // gray: colors.stone,
      // primary: colors.emerald,
      // background: "#EDE7E2",
      // action: "#F5FF7D",
    },
    fontFamily: {
      // sans: ["Arima Madurai", ...defaultTheme.fontFamily.sans],
    },
    keyframes: {
      // wiggle: {
      //   "0%, 50%, 100%": { transform: "rotate(-3deg) scale(1.2)" },
      //   "25%, 75%": { transform: "rotate(3deg) scale(1.2)" },
      // },
    },
    animation: {
      // wiggle: "wiggle 1s ease-in-out infinite",
    },
    screens: {
       xs: "380px",
       sm: "650px",
       md: "720px",
       lg: "920px",
       xl: "1040px",
      "2xl": "1536px",
    },
  },
  // ...
  plugins: [
    // function ({ addComponents, theme }) {
    //   addComponents({
    //     // ".btn": {
    //     //   // padding: theme("spacing.4"),
    //     //   // margin: "auto",
    //     // },
    //   });
    // },
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    // prefix: "wtf-",
    darkTheme: "dark",
    themes: [
      "nord",
      "dark",
      "emerald",
      "forest",
      {
        mytheme: {
          primary: "#22c55e",
          secondary: "#22d3ee",
          accent: "#fcd34d",
          neutral: "#047857",
          "base-100": "#f3f4f6", // background
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#f43f5e",
        },
      },
    ],
  },
};
