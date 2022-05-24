import { ChangeEvent, useCallback, useMemo, useState } from 'react'

import { Paginated } from '@/app/domain/common/models'
import { GenreModel, MovieModel } from '@/app/domain/models'

import {
  makeListMoviesByKeyword,
  makeListMoviesByPopularity
} from '@/app/main/factories'

import { Pagination } from '@/app/presentation/components'
import { DefaultLayout } from '@/app/presentation/layouts'
import { GenresProvider } from '@/app/presentation/pages/home/contexts'

import { MovieCardList } from './components'
import { PAGES_PER_REQUEST, PAGE_SIZE } from './constants'
import styles from './styles.module.scss'

type Props = {
  genres: GenreModel[]
  initialMovies: Paginated<MovieModel>
}

let debounceTimeout: NodeJS.Timeout

const listMoviesByKeyword = makeListMoviesByKeyword()
const listMoviesByPopularity = makeListMoviesByPopularity()

export const HomePage = ({ genres, initialMovies }: Props): JSX.Element => {
  const [moviesData, setMoviesData] = useState(initialMovies)

  const [keyword, setKeyword] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [currentDataPage, setCurrentDataPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = useCallback(
    async ({ keyword, dataPage }): Promise<void> => {
      setIsLoading(true)
      const data = !keyword
        ? await listMoviesByPopularity.load({
            page: dataPage
          })
        : await listMoviesByKeyword.load({
            page: dataPage,
            keyword
          })
      setMoviesData(data)
      setCurrentDataPage(data.page)
      setIsLoading(false)
    },
    []
  )

  const handlePageChange = async (page: number) => {
    const newDataPage = Math.ceil(page / PAGES_PER_REQUEST)
    if (currentDataPage !== newDataPage) {
      fetchData({ keyword, dataPage: newDataPage })
    }
    setCurrentPage(page)
  }

  const handleKeywordChange = useCallback(
    (keyword: string) => {
      clearTimeout(debounceTimeout)
      debounceTimeout = setTimeout(() => {
        fetchData({ keyword, dataPage: 1 })
        setCurrentPage(1)
      }, 500)
    },
    [fetchData]
  )

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setKeyword(event.target.value)
      handleKeywordChange(event.target.value)
    },
    [handleKeywordChange]
  )

  const displayData = useMemo(() => {
    const rest = (currentPage - 1) % PAGES_PER_REQUEST
    const startIndex = rest * PAGE_SIZE
    const endIndex = startIndex + PAGE_SIZE - 1
    return moviesData.results.slice(startIndex, endIndex)
  }, [moviesData.results, currentPage])

  return (
    <GenresProvider {...{ genres }}>
      <DefaultLayout>
        <main className={styles.rootContainer}>
          <input
            className={styles.searchInput}
            value={keyword}
            onChange={handleInputChange}
            placeholder='Search for a movie, name, or genre'
          />
          {!isLoading ? (
            <MovieCardList movies={displayData} />
          ) : (
            <div className={styles.container}>
              <h1 className={styles.loading}>Loading...</h1>
            </div>
          )}
        </main>
        <Pagination {...{ currentPage, handlePageChange }} />
      </DefaultLayout>
    </GenresProvider>
  )
}
