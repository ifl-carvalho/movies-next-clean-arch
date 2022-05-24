import { createContext, ReactNode } from 'react'

import { GenreModel } from '@/app/domain/models'

export type GenresContextData = {
  genres: GenreModel[]
}

type GenresProviderProps = GenresContextData & {
  children: ReactNode
}

export const genresContext = createContext<GenresContextData>({ genres: [] })

export const GenresProvider = ({
  genres,
  children
}: GenresProviderProps): JSX.Element => {
  return (
    <genresContext.Provider value={{ genres }}>
      {children}
    </genresContext.Provider>
  )
}
