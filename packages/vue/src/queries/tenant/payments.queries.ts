import { useMutation } from '@tanstack/vue-query'
import { reactive } from 'vue'
import { QUERY_PREFIX } from '../../client'
import { BaseResourceQueries } from '../../resource-queries'

export class PaymentQueries extends BaseResourceQueries {
  static keys = {
    all: () => [QUERY_PREFIX, 'payments'] as const,
  } as const

  useRequestCheckoutUrl = () => {
    return reactive(
      useMutation({
        mutationFn: this.getClient().payment.requestCheckoutUrl,
      }),
    )
  }
}
