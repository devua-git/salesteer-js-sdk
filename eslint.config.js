import query from '@tanstack/eslint-plugin-query'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import tailwind from 'eslint-plugin-tailwindcss'
import pluginVue from 'eslint-plugin-vue'

export default defineConfigWithVueTs(
  {
    ignores: ['node_modules', 'dist', 'package-lock.json', 'yarn.lock'],
  },
  // Vue + TypeScript
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommendedTypeChecked,
  {
    rules: {
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/unbound-method': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'vue/no-unused-vars': ['error', { ignorePattern: '^_' }],
      'vue/max-attributes-per-line': 'error',
      'vue/attributes-order': 'error',
    },
  },
  // Tailwindcss
  ...tailwind.configs['flat/recommended'],
  {
    rules: {
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/classnames-order': 'error',
    },
  },
  // Query
  ...query.configs['flat/recommended'],
  {
    rules: {
      '@tanstack/query/exhaustive-deps': 'warn',
    },
  },
)
