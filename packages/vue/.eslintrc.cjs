// @ts-check

// @ts-expect-error error due to cjs file
/** @type {import('eslint').Linter.Config} */
const configs = {
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],

  parserOptions: {
    extraFileExtensions: ['.vue'],
  },

  rules: {
    '@tanstack/query/exhaustive-deps': 'warn',
  }
}

// eslint-disable-next-line no-undef
module.exports = configs
