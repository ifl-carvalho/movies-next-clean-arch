import { GetStaticProps } from 'next'

import {
  makeListMoviesByPopularity,
  makeListGenres
} from '@/app/main/factories'

import { HomePage } from '@/app/presentation/pages'

export default HomePage

const listMoviesByPopularity = makeListMoviesByPopularity()
const listGenres = makeListGenres()

export const getStaticProps: GetStaticProps = async () => {
  const genres = await listGenres.load().catch((err) => console.warn(err))
  const initialMovies = await listMoviesByPopularity
    .load({ page: 1 })
    .catch((err) => console.warn(err))

  return {
    props: {
      genres,
      initialMovies
    },
    revalidate: 5 * 60
  }
}
