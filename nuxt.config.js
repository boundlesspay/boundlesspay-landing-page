export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'boundlesspay-landingPage',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://assets.codepen.io/16327/SplitText3.min.js'
      },

    ],

    script: [
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js" },
      { src: "https://unpkg.co/gsap@3/dist/gsap.min.js" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js" },
      { src: "https://unpkg.com/aos@2.3.1/dist/aos.js" },
      { src: "https://unpkg.com/ityped@0.0.10" },

    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/style.css",
    'aos/dist/aos.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/global.js'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap'],
  }
}
