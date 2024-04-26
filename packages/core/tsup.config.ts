// @ts-check

import { defineConfig } from 'tsup'
// eslint-disable-next-line import/no-relative-packages
import { legacyConfig, modernConfig } from '../../scripts/getTsupConfig.js'

export default defineConfig([
  modernConfig({
    entry: ['src/**/*.ts'],
  }),
  legacyConfig({
    entry: ['src/**/*.ts'],
  }),
])
