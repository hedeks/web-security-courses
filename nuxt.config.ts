// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    head: {
      link: [{ rel: 'icon', href: '/logo.svg' }],
      "meta": [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
    }
  },
  modules: ['@nuxt/ui', "@nuxt/content", "@nuxtjs/tailwindcss", '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: 'selector'
  },
  content: {
    markdown: {
      anchorLinks: false
    },
    highlight: {
      theme: {
        default: "github-light",
        dark: "dark-plus"
      },
      langs: [
        "php",
        "sql",
        "html",
        "js",
        "ts",
        "vue",
        "http"
      ]
    }
  }
})
