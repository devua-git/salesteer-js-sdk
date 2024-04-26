import type { SalesteerQueryClient } from './client'

export abstract class BaseResourceQueries {
  #queryClient: SalesteerQueryClient

  constructor(queryClient: SalesteerQueryClient) {
    this.#queryClient = queryClient
  }

  getClient = () => {
    return this.#queryClient.getClient()
  }

  getQueryClient = () => {
    return this.#queryClient
  }
}
