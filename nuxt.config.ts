import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  autoImports: {
    dirs: [
      'composables/**'
    ]
  },
  vite: {
    plugins: [
      eslintPlugin({
        throwOnError: false,
        failOnError: false,
        emitError: false
      })
    ]
  }
})
