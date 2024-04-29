import {
  SALESTEER_AUTH_KEY,
  type AuthContextPayload,
} from '../types/auth.types'
import { injectStrict } from '../utils/injection'

export const useSalesteerAuth = (): AuthContextPayload => {
  return injectStrict(SALESTEER_AUTH_KEY)
}
