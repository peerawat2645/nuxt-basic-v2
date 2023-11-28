// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  generate: {
    routes: ['/'] // ระบุว่าหน้าหลักคือ '/'
  },
})
