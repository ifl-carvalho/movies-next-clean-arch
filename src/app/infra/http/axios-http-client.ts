import axios, { AxiosResponse, AxiosError } from 'axios'

import {
  HttpRequest,
  HttpClient,
  HttpResponse
} from '@/app/data/protocols/http'

export class AxiosHttpClient<T> implements HttpClient<T> {
  async request(data: HttpRequest): Promise<HttpResponse<T>> {
    let response: AxiosResponse | AxiosError
    try {
      response = await axios.request<T>({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers
      })
    } catch (error) {
      response = error as AxiosError<T>
    }
    return this.formatResponse(response)
  }

  private formatResponse(
    response: AxiosResponse | AxiosError
  ): HttpResponse<T> {
    return {
      status: Number(response.status),
      body:
        response instanceof AxiosError
          ? response.response?.data
          : response?.data
    }
  }
}
