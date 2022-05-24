import { Paginated } from '@/app/domain/common/models'
import { MovieModel } from '@/app/domain/models'

export interface ListMoviesByPopularity {
  load: (
    params: ListMoviesByPopularity.Params
  ) => Promise<ListMoviesByPopularity.Result>
}

export namespace ListMoviesByPopularity {
  export type Params = { page: number }
  export type Result = Paginated<MovieModel>
}
