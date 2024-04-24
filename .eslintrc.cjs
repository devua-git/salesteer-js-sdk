// @ts-check
/** @type {import('eslint').Linter.Config} */
const configs = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['import'],

  parserOptions: {
    ecmaVersion: 'latest',
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: true,
    },
  },

  // no-undef because it is a setting for JS but not TS
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],

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

    'import/order': 'error',
    'import/first': 'error',
    'import/no-absolute-path': 'error',
    'import/no-relative-packages': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'off',

    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
}

// eslint-disable-next-line no-undef
module.exports = configs
