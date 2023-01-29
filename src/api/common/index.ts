import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import { baseURL } from '@/api'

class API {
  public config: AxiosRequestConfig

  public instance: AxiosInstance

  constructor() {
    this.config = {
      baseURL
    }

    this.instance = axios.create({
      ...this.config
    })
  }

  get() {
    return this.instance
  }
}

export default API
