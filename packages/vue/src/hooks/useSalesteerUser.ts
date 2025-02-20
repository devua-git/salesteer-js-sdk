import type { User } from '@salesteer/core'
import type { Ref } from 'vue'
import { SALESTEER_AUTH_USER_KEY } from '../types/auth.types'
import { injectStrict } from '../utils/injection'

export const useSalesteerUser = (): Ref<User> => {
  return injectStrict(SALESTEER_AUTH_USER_KEY)
}
