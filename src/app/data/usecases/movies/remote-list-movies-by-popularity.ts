import { ListMoviesByPopularity } from '@/app/domain/usecases'

import { responseHandler } from '@/app/data/common/utils/error-handler'
import { HttpClient } from '@/app/data/protocols/http'

export class RemoteListMoviesByPopularity implements ListMoviesByPopularity {
  constructor(
    private readonly apiKey: string,
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteListMoviesByPopularity.Result>
  ) {}

  public async load({
    page
  }: RemoteListMoviesByPopularity.Params): Promise<RemoteListMoviesByPopularity.Result> {
    const response = await this.httpClient.request({
      url: `${this.url}/?api_key=${this.apiKey}&page=${page}`,
      method: 'get'
    })

    return responseHandler(response)
  }
}

export namespace RemoteListMoviesByPopularity {
  export type Params = ListMoviesByPopularity.Params
  export type Result = ListMoviesByPopularity.Result
}
