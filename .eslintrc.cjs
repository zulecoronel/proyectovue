/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  overrides: [
    {
      files: ['src/components/Header.vue'],  // Change this to default.vue path
      rules: {
        'vue/multi-word-component-names': 'off',
      }
    }
  ]
}