export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      pexelsApiKey: ''
    }
  },
  components: {
    dirs: []
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/test-utils/module'
  ]
})
