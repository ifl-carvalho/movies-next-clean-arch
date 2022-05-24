import { MovieModel, MovieDetailsModel } from '@/app/domain/models'

export interface GetMovieById {
  load: (id: GetMovieById.Params) => Promise<GetMovieById.Result>
}

export namespace GetMovieById {
  export type Params = { id: number }
  export type Result = MovieModel & MovieDetailsModel
}
