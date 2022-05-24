import { Paginated } from '@/app/domain/common/models'
import { MovieModel } from '@/app/domain/models'

export interface ListMoviesByKeyword {
  load: (
    page: ListMoviesByKeyword.Params
  ) => Promise<ListMoviesByKeyword.Result>
}

export namespace ListMoviesByKeyword {
  export type Params = { page: number; keyword: string }
  export type Result = Paginated<MovieModel>
}
