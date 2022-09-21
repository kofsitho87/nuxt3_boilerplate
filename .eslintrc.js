module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  ignorePatterns: ['/modules/'],
  rules: {
    'no-console': 'off',
    'vue/no-v-model-argument': 'off'
    // quotes: ["error", "double"],
    // semi: ["error", "always"],
    // indent: ["error", 2],
    // "no-multi-spaces": ["error"],
    // 'no-unused-vars': [
    //   'warn',
    //   { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
    // ]
  }
}
