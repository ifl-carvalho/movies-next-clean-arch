import { RemoteGetMovieById } from '@/app/data/usecases'

import { API_KEY } from '@/app/main/constants'
import { makeHttpClient, makeApiUrl } from '@/app/main/factories'

export const makeGetMovieById = () =>
  new RemoteGetMovieById(
    API_KEY,
    makeApiUrl('/movie'),
    makeHttpClient<RemoteGetMovieById.Result>()
  )
