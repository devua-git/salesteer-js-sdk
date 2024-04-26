import type { InjectionKey } from 'vue'
import { injectStrict } from '../utils/injection'
import type { SalesteerQueryClient } from '../client'

export const SALESTEER_QUERY_CLIENT_KEY: InjectionKey<SalesteerQueryClient> =
  Symbol('SALESTEER_QUERY_CLIENT')

export const useSalesteerQueryClient = () => {
  return injectStrict(SALESTEER_QUERY_CLIENT_KEY)
}
