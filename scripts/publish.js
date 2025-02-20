// @ts-check

import { publish } from '@tanstack/config/publish'
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

const packages = [
  {
    name: '@salesteer/core',
    packageDir: 'packages/core',
  },
  {
    name: '@salesteer/vue',
    packageDir: 'packages/vue',
  },
]

export const branchConfigs = {
  main: {
    prerelease: false,
  },
}

const __dirname = fileURLToPath(new URL('.', import.meta.url))
export const rootDir = resolve(__dirname, '..')

await publish({
  branchConfigs,
  packages,
  rootDir,
  branch: process.env.BRANCH,
  tag: process.env.TAG,
  ghToken: process.env.GH_TOKEN,
})

process.exit(0)
