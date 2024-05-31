// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      include: undefined,
      exclude: ['/', '/about'],
      cookieRedirect: false,
    },
  },
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
  modules: ['@nuxt/ui', '@pinia/nuxt', "@nuxt/content", "@nuxtjs/tailwindcss", '@nuxtjs/color-mode', '@nuxtjs/supabase'],
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
    },
  },
  nitro: {
    experimental: {
      database: true
    }
  },
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  imports: {
    dirs: ['types/*.ts', 'store/*.ts', 'types/**/*.ts'],
  }
})
