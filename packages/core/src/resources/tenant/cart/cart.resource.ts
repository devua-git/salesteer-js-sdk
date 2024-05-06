import { z } from 'zod'
import { BaseResource } from '../../../resource'
import { parseWithFallbackAsync } from '../../../utils/validation'
import type {
  Cart,
  CartCreateRequest,
  CartSyncRequest,
  CartUpdateRequest,
} from './cart.types'
import { cartSchema } from './cart.types'

export class CartResource extends BaseResource {
  customerCarts = async (req: { customer_id: number }) => {
    const res = await this.getHttp().get(`customer/${req.customer_id}/carts`)
    return parseWithFallbackAsync(z.array(cartSchema), res.data)
  }

  create = async (req: CartCreateRequest) => {
    await this.getHttp().post(`carts`, req)
  }

  update = async (req: { cart: Cart; data: CartUpdateRequest }) => {
    await this.getHttp().patch(`carts/${req.cart.id}`, req.data)
  }

  drop = async (cart: Cart) => {
    await this.getHttp().delete(`carts/${cart.id}`)
  }

  syncProducts = async (req: { cart: Cart; data: CartSyncRequest }) => {
    await this.getHttp().post(`carts/${req.cart.id}/products`, req.data)
  }
}
