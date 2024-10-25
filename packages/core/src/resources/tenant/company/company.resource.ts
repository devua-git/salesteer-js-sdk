import { BaseResource } from '../../../resource'
import { parseWithFallbackAsync } from '../../../utils/validation'
import { currentCompanyDataSchema } from './company.types'

export class CompanyResource extends BaseResource {
  fetchCurrent = async () => {
    const res = await this.getHttp().get('companies/current')
    return await parseWithFallbackAsync(currentCompanyDataSchema, res.data)
  }
}
