import type { Tax } from './tax.types'

export function computeNonCumulativeTaxes(req: {
  amount: number
  taxes: Tax[]
}) {
  let taxesSum = 0
  for (const tax of req.taxes) {
    taxesSum += (req.amount * tax.value) / Math.pow(10, 2 * 2)
  }

  return Math.round(taxesSum)
}

export function computeNonCumulativeTaxedPrice(req: {
  amount: number
  taxes: Tax[]
}) {
  return req.amount + computeNonCumulativeTaxes(req)
}
