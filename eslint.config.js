// import eslint from '@eslint/js'
import query from '@tanstack/eslint-plugin-query'
import json from 'eslint-plugin-json'
import prettier from 'eslint-plugin-prettier/recommended'
import importSort from 'eslint-plugin-simple-import-sort'
import tailwind from 'eslint-plugin-tailwindcss'
import vue from 'eslint-plugin-vue'
import ts from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'

export default [
  {
    ignores: ['node_modules', 'dist', 'package-lock.json', 'yarn.lock'],
  },

  // eslint.configs.recommended,
  ...ts.configs.recommended,
  ...vue.configs['flat/recommended'],
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: {
          ts: ts.parser,
          '<template>': 'espree',
        },
        sourceType: 'module',
        // projectService: { allowDefaultProject: ['*.js', '*.ts', '*.vue'] },
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
      },
    },
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off', // Heavy rule
      '@typescript-eslint/no-restricted-types': 'error',
      '@typescript-eslint/no-empty-function': 'warn', // TODO: make this error
      '@typescript-eslint/no-unused-vars': 'warn', // TODO: make this error
      '@typescript-eslint/no-explicit-any': 'warn', // TODO: make this error
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'vue/no-mutating-props': 'warn', // TODO: make this error
      'vue/v-on-event-hyphenation': 'warn', // TODO: make this error
      'vue/multi-word-component-names': 'warn', // TODO: make this error
      'vue/no-unused-vars': ['error', { ignorePattern: '^_' }],
      'vue/max-attributes-per-line': ['error', { singleline: 5 }],
      'vue/attributes-order': 'error',
    },
  },

  prettier,
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          tabWidth: 2,
          semi: false,
          singleQuote: true,
          bracketSpacing: true,
          jsxSingleQuote: true,
          jsxBracketSameLine: false,
          trailingComma: 'es5',
          arrowParens: 'always',
        },
      ],
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

  // JSON
  {
    files: ['**/*.json'],
    ...json.configs['recommended'],
  },

  // Sort imports
  {
    plugins: {
      'simple-import-sort': importSort,
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            [
              '^\\u0000', // all side effects (0 at start)
              '^[^/\\.].*\u0000$', // external types (0 at end)
              '^\\..*\u0000$', // internal types (0 at end)
              '^@?\\w', // Starts with @
              '^[^.]', // any
              '^\\.', // local
            ],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },

  // Unused imports
  // {
  //   plugins: {
  //     'unused-imports': unusedImports,
  //   },
  //   rules: {
  //     'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
  //     'unused-imports/no-unused-imports': 'error',
  //     'unused-imports/no-unused-vars': [
  //       'warn',
  //       {
  //         vars: 'all',
  //         varsIgnorePattern: '^_',
  //         args: 'after-used',
  //         argsIgnorePattern: '^_',
  //       },
  //     ],
  //   },
  // },
]
