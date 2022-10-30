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
      {
        rel: 'stylesheet',
        href: 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css'
      },

    ],

    script: [
      { src: "https://code.jquery.com/jquery-1.12.4.min.js" },
      { src: "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" },
      { src: "js/jquery.ttpanel.min.js" },
      { src: "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.j" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js" },
      { src: "https://unpkg.co/gsap@3/dist/gsap.min.js" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js" },
      { src: "https://unpkg.com/aos@2.3.1/dist/aos.js" },
      { src: "https://unpkg.com/ityped@0.0.10" },
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" },
      { src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" },
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" },

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
    {src: '~/plugins/tabs.js', mode: 'client'},
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
