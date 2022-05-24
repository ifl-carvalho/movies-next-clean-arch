import { GetMovieById } from '@/app/domain/usecases'

import { responseHandler } from '@/app/data/common/utils/error-handler'
import { HttpClient } from '@/app/data/protocols/http'

export class RemoteGetMovieById implements GetMovieById {
  constructor(
    private readonly apiKey: string,
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteGetMovieById.Result>
  ) {}

  public async load({
    id
  }: RemoteGetMovieById.Params): Promise<RemoteGetMovieById.Result> {
    const response = await this.httpClient.request({
      url: `${this.url}/${id}?api_key=${this.apiKey}&append_to_response=videos`,
      method: 'get'
    })

    return responseHandler(response)
  }
}

export namespace RemoteGetMovieById {
  export type Params = GetMovieById.Params
  export type Result = GetMovieById.Result
}
