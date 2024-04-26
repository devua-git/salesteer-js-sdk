import type { SalesteerClient } from '@salesteer/core'
import type { InjectionKey } from 'vue'
import { injectStrict } from '../utils/injection'

export const SALESTEER_CLIENT_KEY: InjectionKey<SalesteerClient> =
  Symbol('SALESTEER_CLIENT')

export const useSalesteerClient = () => {
  return injectStrict(SALESTEER_CLIENT_KEY)
}
