import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  autoImports: {
    dirs: [
      'composables/**'
    ]
  },
  css: [
    '~/assets/css/todo.css'
  ],
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
