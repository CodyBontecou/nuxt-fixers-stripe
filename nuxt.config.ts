// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@fixers/nuxt-stripe'],
  runtimeConfig: {
    NUXT_STRIPE_SECRET: process.env.NUXT_STRIPE_SECRET,
  },
})
