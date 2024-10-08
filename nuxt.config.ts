// import { fileURLToPath } from 'node:url'
// import { dirname, join } from 'node:path'
//
// const currentDir = dirname(fileURLToPath(import.meta.url))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "shadcn-nuxt",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxtjs/mdc",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@vueuse/nuxt"
  ],

  nitro: {
    experimental: {
      openAPI: true,
    },
  },
  
  shadcn: {
    prefix: "",
    componentDir: "~/components/ui",
  },

  ui: {
    primary: 'amber',
    gray: 'cool'
  },

  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        file: "assets/lang/en.json",
      },
      {
        code: "fr",
        name: "Français",
        file: "assets/lang/fr.json",
      },
    ],
    defaultLocale: "en",
    // vueI18n: {
    //   messages: {
    //     en: {
    //       welcome: 'Welcome to the club'
    //     },
    //     fr: {
    //       welcome: 'Bienvenue au club'
    //     }
    //   }
    // },
    strategy: "no_prefix",
  },

  // css: [
  //   join(currentDir, './src/index.css'),
  // ],

  // components: [
  //   {
  //     path: join(currentDir, './components/ui'),
  //     // this is required else Nuxt will autoImport `.ts` file
  //     extensions: ['.vue', '.ts'],
  //   },
  // ]
});
