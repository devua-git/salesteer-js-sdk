import { z } from 'zod'
import { BaseResource } from '../../../resource'
import { parseWithFallbackAsync } from '../../../utils/validation'
import type { EntityName } from '../../../utils/morphables'

export class PaymentResource extends BaseResource {
  requestCheckoutUrl = async (req: {
    entityName: EntityName
    entityId: number
    email?: string
  }) => {
    const res = await this.getHttp().post(`payments/checkout`, {
      entity_name: req.entityName,
      entity_id: req.entityId,
      email: req.email,
    })

    return await parseWithFallbackAsync(
      z.object({
        checkout_session_url: z.string(),
      }),
      res.data
    )
  }
}
