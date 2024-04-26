import type { SalesteerClient } from './client'

export abstract class BaseResource {
  #client: SalesteerClient

  constructor(client: SalesteerClient) {
    this.#client = client
  }

  getClient = () => {
    return this.#client
  }

  getHttp = () => {
    return this.#client.getHttp()
  }
}
