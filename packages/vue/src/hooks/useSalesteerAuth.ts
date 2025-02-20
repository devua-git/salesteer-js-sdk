import type { Ref } from 'vue'
import { type AuthContextPayload, SALESTEER_AUTH_KEY } from '../types/auth.types'
import { injectStrict } from '../utils/injection'

export const useSalesteerAuth = (): Ref<AuthContextPayload> => {
  return injectStrict(SALESTEER_AUTH_KEY)
}
