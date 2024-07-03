import { BaseResource } from '../../../resource'
import { parseWithFallbackAsync } from '../../../utils/validation'
import type { PaginateQueryParams } from '../../../utils/pagination'
import type {
  InvoiceCreateRequest,
  InvoiceUpdateRequest,
} from './invoice.types'
import { invoicePaginateSchema, invoiceSchema } from './invoice.types'

export class InvoiceResource extends BaseResource {
  list = async (params?: PaginateQueryParams) => {
    const res = await this.getHttp().get(`invoices`, {
      params,
    })

    return parseWithFallbackAsync(invoicePaginateSchema, res.data)
  }

  fetch = async (id: number) => {
    const res = await this.getHttp().get(`invoice/${id}`, {})
    return parseWithFallbackAsync(invoiceSchema, res.data)
  }

  create = async (req: InvoiceCreateRequest) => {
    const res = await this.getHttp().post('invoice', req)
    return parseWithFallbackAsync(invoiceSchema, res.data)
  }

  update = async (req: { invoiceId: number; data: InvoiceUpdateRequest }) => {
    const res = await this.getHttp().patch(`invoice/${req.invoiceId}`, req.data)
    return parseWithFallbackAsync(invoiceSchema, res.data)
  }

  drop = async (invoiceId: number) => {
    await this.getHttp().delete(`invoice/${invoiceId}`, {})
  }
}
