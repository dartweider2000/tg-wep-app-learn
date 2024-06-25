// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/styles.scss"],
  app: {
    head: {
      script: [
        {
          src: "https://telegram.org/js/telegram-web-app.js",
        },
      ],
    },
  },
  ssr: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
