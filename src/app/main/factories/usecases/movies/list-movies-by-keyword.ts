import { RemoteListMoviesByKeyword } from '@/app/data/usecases'

import { API_KEY } from '@/app/main/constants'
import { makeHttpClient, makeApiUrl } from '@/app/main/factories'

export const makeListMoviesByKeyword = () =>
  new RemoteListMoviesByKeyword(
    API_KEY,
    makeApiUrl('/search/movie'),
    makeHttpClient<RemoteListMoviesByKeyword.Result>()
  )
