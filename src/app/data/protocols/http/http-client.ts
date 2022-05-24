export type HttpMethod = 'post' | 'get' | 'put' | 'delete'

export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}

export type HttpResponse<T> = {
  status: number
  body: T
}

export interface HttpClient<T> {
  request: (data: HttpRequest) => Promise<HttpResponse<T>>
}
