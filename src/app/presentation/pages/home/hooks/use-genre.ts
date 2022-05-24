import { useContext } from 'react'

import {
  genresContext,
  GenresContextData
} from '@/app/presentation/pages/home/contexts'

export const useGenres = () => {
  return useContext<GenresContextData>(genresContext)
}
