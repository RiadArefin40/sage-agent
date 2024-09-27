// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  css: ["@/assets/scss/app.scss"],

  // styleResources: {
  //   scss: ['./assets/scss/config/*.scss']
  // },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/config/_variables.scss" as *;'
        }
      }
    }
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@sidebase/nuxt-auth"],
});