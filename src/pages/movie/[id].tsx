import { GetStaticProps, GetStaticPaths } from 'next'

import { makeGetMovieById } from '@/app/main/factories'

import { MovieDetailsPage } from '@/app/presentation/pages'

export default MovieDetailsPage

const getMovieById = makeGetMovieById()

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }

  const movie = await getMovieById
    .load({ id: Number(id) })
    .catch((err) => console.warn(err))

  return {
    props: {
      movie
    },
    revalidate: 5 * 60
  }
}
