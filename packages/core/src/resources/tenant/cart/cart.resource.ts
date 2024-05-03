import { BaseResource } from '../../../resource'
import { parseWithFallbackAsync } from '../../../utils/validation'
import type { CartSyncRequest } from './cart.types'
import { cartSchema } from './cart.types'

export class CartResource extends BaseResource {
  fetch = async (req: { customer_id: number }) => {
    const res = await this.getHttp().get(`customer/${req.customer_id}/cart`)
    return parseWithFallbackAsync(cartSchema, res.data)
  }

  sync = async (req: { customer_id: number; data: CartSyncRequest }) => {
    await this.getHttp().post(`customer/${req.customer_id}/cart`, req.data)
  }
}
