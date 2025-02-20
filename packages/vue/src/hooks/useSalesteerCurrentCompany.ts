import type { CurrentCompanyData } from '@salesteer/core'
import type { InjectionKey, Ref } from 'vue'
import { injectStrict } from '../utils/injection'

export const SALESTEER_CURRENT_COMPANY_KEY: InjectionKey<
  Ref<CurrentCompanyData>
> = Symbol('SALESTEER_CURRENT_COMPANY_KEY')

export const useSalesteerCurrentCompany = () => {
  const currentCompany = injectStrict(SALESTEER_CURRENT_COMPANY_KEY)

  return {
    currentCompany,
  }
}
