import { BaseResource } from '../../../resource'
import { parseWithFallbackAsync } from '../../../utils/validation'
import { termSchema } from './term.types'

export class TermResource extends BaseResource {
  fetch = async (slugOrId: string | number) => {
    const res = await this.getHttp().get(`terms/${slugOrId}`)

    return parseWithFallbackAsync(termSchema, res.data)
  }
}
