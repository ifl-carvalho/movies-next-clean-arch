import { RemoteListGenres } from '@/app/data/usecases'

import { API_KEY } from '@/app/main/constants'
import { makeHttpClient, makeApiUrl } from '@/app/main/factories'

export const makeListGenres = () =>
  new RemoteListGenres(
    API_KEY,
    makeApiUrl('/genre/movie/list'),
    makeHttpClient<RemoteListGenres.Response>()
  )
