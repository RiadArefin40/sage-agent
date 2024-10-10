// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app:{
    head:{
      title:'Sage',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Poppins:wght@400;500;600;700&display=swap', rel: 'stylesheet' },
        { href: "https://cdn.datatables.net/v/dt/dt-1.11.4/date-1.1.2/r-2.2.9/sp-1.4.0/datatables.min.css", rel: "stylesheet", },
      ],
      script: [
        { src: "https://kit.fontawesome.com/b6a72d85f5.js" },
        { src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" },
        { src: "https://cdn.datatables.net/v/dt/dt-1.11.4/date-1.1.2/r-2.2.9/sp-1.4.0/datatables.min.js" },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js" },
        { src: "https://cdn.datatables.net/plug-ins/1.10.20/sorting/datetime-moment.js" },
        { src: "https://www.youtube.com/iframe_api" },
      ],
    }
  },
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
  auth: {
    isEnabled: true,
    baseURL: process.env.BASE_URL,
    globalAppMiddleware: true,
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: 'auth/login', method: 'post' },
        signOut: { path: 'auth/logout', method: 'post' },
        getSession: { path: 'auth/user-profile', method: 'get' }
      },
      pages: {
        login: '/login'
      },
      token: {
        signInResponseTokenPointer: '/access_token'
      },
    },
    sessionRefresh: {
      enablePeriodically: false,
      enableOnWindowFocus: true,
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.BASE_URL
    }
  }
});