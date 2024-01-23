// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/global.css", "~/assets/scss/main.scss"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/image"],
  image: {
    dir: "./assets/images",
  },
  routeRules: {
    "/": { prerender: true },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/scss/_colors.scss" as *;`,
        },
      },
    },
  },
});
