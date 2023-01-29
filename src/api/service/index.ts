import { IGet, IGetArgs, IGetPizza, IGetPizzas } from '@/interfaces/Rest'
import { AxiosInstance } from 'axios'

interface Result extends IGet {
  data: any
}

class Api {
  private _apiInstance: AxiosInstance

  constructor(apiInstance: AxiosInstance) {
    this._apiInstance = apiInstance
  }

  result(): Result {
    return {
      data: [],
      total: 0
    }
  }

  getPizzas(args: IGetArgs): Promise<IGetPizzas> {
    const url = 'pizzas'
    return this.get(url, args)
  }

  async getPizzaById(args: { id: number }): Promise<IGetPizza> {
    const url = 'pizzas'
    const res = await this.get(url, args)
    if (res.data.length) {
      res.data = res.data[0]
    }
    return res
  }

  async delete(url: string, args: object) {
    const result = this.result()
    try {
      const response = await this._apiInstance.delete(url, { params: args })
      if (response?.status === 200 && response?.data?.result) {
        result.data = response.data.result
      }
    } catch (error) {
      console.log(error)
      throw error
    }
    return result
  }

  async put(url: string, data: object) {
    const result = this.result()
    try {
      const response = await this._apiInstance.put(url, data)
      if (response?.status === 200 && response?.data?.result) {
        result.data = response.data.result
      }
    } catch (error) {
      console.log(error)
      throw error
    }
    return result
  }

  async post(url: string, data: object, args?: object) {
    const result = this.result()
    try {
      const response = await this._apiInstance.post(url, data, { params: args })
      if (response?.status === 200 && response?.data?.result) {
        result.data = response.data.result
      }
    } catch (error) {
      console.log(error)
      throw error
    }
    return result
  }

  async get(url: string, args?: object) {
    const result = this.result()
    try {
      const response = await this._apiInstance.get(url, { params: args })
      if (response?.status === 200 && response?.data?.result) {
        result.total = response.data.total ?? 0
        result.data = response.data.result
      }
    } catch (error) {
      console.log(error)
      throw error
    }
    return result
  }
}

export default Api
