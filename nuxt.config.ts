export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      pexelsApiKey: ''
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
