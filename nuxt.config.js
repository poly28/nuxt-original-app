export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-original-app",
    htmlAttrs: {
      lang: "ja"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/sanitize.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: "~/plugins/v-calendar.js", mode: "client", ssr: false },
    {
      src: "~/plugins/vue2-timepicker.js",
      mode: "client",
      ssr: false
    },
    {
      src: "~/plugins/vuejs-datepicker.js",
      mode: "client",
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  router: {
    middleware: "redirect"
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // "@nuxtjs/vuetify"
  // buildModules: ["@nuxtjs/moment"],

  // moment: {
  //   locales: ["ja"]
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/vuetify"],
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
