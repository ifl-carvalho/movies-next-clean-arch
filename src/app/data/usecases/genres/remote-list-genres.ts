import { ListGenres } from '@/app/domain/usecases'

import { responseHandler } from '@/app/data/common/utils/error-handler'
import { HttpClient } from '@/app/data/protocols/http'

export class RemoteListGenres implements ListGenres {
  constructor(
    private readonly apiKey: string,
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteListGenres.Response>
  ) {}

  public async load(): Promise<RemoteListGenres.Result> {
    const response = await this.httpClient.request({
      url: `${this.url}?api_key=${this.apiKey}`,
      method: 'get'
    })

    return responseHandler({
      status: response.status,
      body: response.body.genres
    })
  }
}

export namespace RemoteListGenres {
  export type Response = { genres: ListGenres.Result }
  export type Result = ListGenres.Result
}
