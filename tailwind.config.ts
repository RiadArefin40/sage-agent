import type { Config } from "tailwindcss";
import flowbite from 'flowbite/plugin'

export default <Partial<Config>>{
  theme: {
    extend: {
        colors: {
            "ash-medium": "#DFE1E6",
        },
        screens: {
            "3xl": "1600px",
            "4xl":"1920"
        },
    },
  },
  plugins: [flowbite()],
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
  ],
};
