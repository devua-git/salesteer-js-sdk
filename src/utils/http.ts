import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { getCookie } from './cookies'

const PRODUCTION_ENDPOINT = 'https://api.salesteer.com'

export type PathType = 'endpoint' | 'central' | 'tenantSpa' | 'tenantApi'

export type HttpErrors = {
  status: number
  data: unknown
  error: string
  errors: Record<string, string[]>
}

export type HttpConfig<C> = AxiosRequestConfig<C> & {
  pathType?: PathType
}

const pathFromPathType: Record<PathType, string> = {
  endpoint: '',
  central: '/central',
  tenantSpa: '/app',
  tenantApi: '/api',
}

export const isHttpErrors = (err: unknown): err is HttpErrors =>
  typeof err === 'object' && err !== null && 'error' in err

export const hasFieldErrors = (errors?: unknown, field?: string) =>
  field &&
  isHttpErrors(errors) &&
  errors.errors &&
  errors.errors[field] &&
  errors.errors[field].length > 0

export type HttpClientConfigs = {
  endpoint?: string
  clientType?: 'spa' | 'api'
  tenantDomain?: string
}

export class HttpClient {
  #instance: AxiosInstance
  #endpoint: string
  #clientType: 'spa' | 'api'
  #tenantDomain?: string

  constructor(configs?: HttpClientConfigs) {
    this.#endpoint = configs?.endpoint ?? PRODUCTION_ENDPOINT
    this.#clientType = configs?.clientType ?? 'api'
    this.#tenantDomain = configs?.tenantDomain

    this.#instance = axios.create({
      timeout: 30000,
    })
    this.#instance.defaults.withCredentials = true
    this.#instance.defaults.withXSRFToken = true

    this.#instance.interceptors.request.use(
      async (config) => {
        if (
          config &&
          (config.method === 'patch' || config.method === 'PATCH')
        ) {
          if (!config.data) {
            config.data = {}
          }

          if (config.data instanceof FormData) {
            config.method = 'POST'
            config.data.append('_method', 'PATCH')
          }
        }

        if (config?.headers && this.#tenantDomain) {
          config.headers['X-Tenant'] = this.#tenantDomain
        }

        if (
          this.#clientType === 'spa' &&
          config.method != 'get' &&
          config.method != 'GET' &&
          !getCookie('XSRF-TOKEN')
        ) {
          await this.#setCSRFToken()
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    this.#instance.interceptors.response.use(
      (res) => res,
      async (error) => {
        const customError: HttpErrors = {
          status: error?.response?.status,
          data: error?.response?.data,
          error: 'http_errors.unknown',
          errors: {},
        }

        if (!error.response) {
          return Promise.reject(customError)
        }

        if (error.response.data.message) {
          customError.error = error.response.data.message
        } else {
          customError.error = `http_errors.${error.response.status}`
        }

        if (error.response.status === 422) {
          customError.error = `http_errors.422`
          customError.errors = error.response.data.errors
        }

        return Promise.reject(customError)
      }
    )
  }

  #buildUrl = (url: string, pathType?: PathType) => {
    const path =
      pathType ?? this.#clientType === 'spa' ? 'tenantSpa' : 'tenantApi'

    try {
      new URL(url)
      return url
    } catch {
      return `
        ${this.#endpoint}${pathFromPathType[path]}/${url}
      `.trim()
    }
  }

  #setCSRFToken = async () => {
    await this.#instance.get(this.#buildUrl('csrf-cookie'))
  }

  get = <R = unknown, C = unknown>(url: string, config?: HttpConfig<C>) => {
    return this.#instance.get<R, AxiosResponse<R, C>, C>(
      this.#buildUrl(url, config?.pathType),
      config
    )
  }

  post = <R = unknown, C = unknown>(
    url: string,
    data?: C,
    config?: HttpConfig<C>
  ) => {
    return this.#instance.post<R, AxiosResponse<R, C>, C>(
      this.#buildUrl(url, config?.pathType),
      data,
      config
    )
  }

  patch = <R = unknown, C = unknown>(
    url: string,
    data?: C,
    config?: HttpConfig<C>
  ) => {
    return this.#instance.patch<R, AxiosResponse<R, C>, C>(
      this.#buildUrl(url, config?.pathType),
      data,
      config
    )
  }

  delete = <R = unknown, C = unknown>(url: string, config?: HttpConfig<C>) => {
    return this.#instance.delete<R, AxiosResponse<R, C>, C>(
      this.#buildUrl(url, config?.pathType),
      config
    )
  }
}
