import { ListMoviesByKeyword } from '@/app/domain/usecases'

import { responseHandler } from '@/app/data/common/utils/error-handler'
import { HttpClient } from '@/app/data/protocols/http'

export class RemoteListMoviesByKeyword implements ListMoviesByKeyword {
  constructor(
    private readonly apiKey: string,
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteListMoviesByKeyword.Result>
  ) {}

  public async load({
    page,
    keyword
  }: RemoteListMoviesByKeyword.Params): Promise<RemoteListMoviesByKeyword.Result> {
    const normalizedKeyword = keyword.toLowerCase().replace(' ', '+')

    const response = await this.httpClient.request({
      url: `${this.url}/?api_key=${this.apiKey}&page=${page}&query=${normalizedKeyword}`,
      method: 'get'
    })

    return responseHandler(response)
  }
}

export namespace RemoteListMoviesByKeyword {
  export type Params = ListMoviesByKeyword.Params
  export type Result = ListMoviesByKeyword.Result
}
