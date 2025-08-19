// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
      '~/assets/_main.scss',
  ],
  routeRules: {
      '/appel-a-projets': {
          redirect: { to: '/appel-a-projets.html', statusCode: 301 }
      }
  },
})
