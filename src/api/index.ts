import ServerHttp from '@/api/common'
import Api from '@/api/service'

export const baseURL = process.env.REACT_APP_BASE_URL

const http = new ServerHttp()
export const api = new Api(http.get())
