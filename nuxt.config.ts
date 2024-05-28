import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxthub/core",
    "@nuxt/fonts",
    "@nuxt/ui",
    "@nuxt/eslint",
    "@vueuse/nuxt",
    "nuxt-auth-utils",
  ],
  hub: {
    kv: true,
    blob: true,
    database: true,
  },
  ui: {
    icons: ["simple-icons", "logos", "tabler"],
  },
  experimental: {
    viewTransition: true,
  },
  devtools: { enabled: process.env.NODE_ENV === "development" },
  eslint: {
    config: {
      stylistic: {
        quotes: "single",
        commaDangle: "never",
      },
    },
  },
});
