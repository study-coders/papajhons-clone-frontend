export interface IGet {
  total: number
}

export interface IGetPizzas {
  total: number
  data: any[]
}

export interface IGetPizza {
  total: number
  data: any
}

export interface IGetArgs {
  id?: number | string
  limit?: number | 'all'
  offset?: number
  order?: TOrder
}

type TOrder = 'asc' | 'desc'
