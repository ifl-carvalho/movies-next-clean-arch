import { GenreModel } from '@/app/domain/models'

export interface ListGenres {
  load: () => Promise<ListGenres.Result>
}

export namespace ListGenres {
  export type Result = GenreModel[]
}
