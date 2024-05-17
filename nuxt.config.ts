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
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui', "@nuxt/content", "@nuxtjs/tailwindcss", '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: 'dark'
  },
  content: {
    markdown: {
      anchorLinks: true
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
