import { RemoteListMoviesByPopularity } from '@/app/data/usecases'

import { API_KEY } from '@/app/main/constants'
import { makeHttpClient, makeApiUrl } from '@/app/main/factories'

export const makeListMoviesByPopularity = () =>
  new RemoteListMoviesByPopularity(
    API_KEY,
    makeApiUrl('/movie/popular'),
    makeHttpClient<RemoteListMoviesByPopularity.Result>()
  )
