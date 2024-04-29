//@ts-expect-error unused import error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type * as NuxtSchemaTypes from '@nuxt/schema'

import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import type {
  SalesteerClientConfigs,
  SalesteerQueryClientConfigs,
} from '@salesteer/vue'

export interface ModuleOptions {
  client?: SalesteerClientConfigs
  queryClient?: SalesteerQueryClientConfigs
}

const module = defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'salesteer',
    configKey: 'salesteer',
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.salesteer = options

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})

export default module
