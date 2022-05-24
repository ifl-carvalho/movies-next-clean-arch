import { MovieModel } from '@/app/domain/models'

import { MovieCard } from '@/app/presentation/pages/home/components'

import styles from './styles.module.scss'

type Props = {
  movies: MovieModel[]
}

export const MovieCardList = ({ movies }: Props) => {
  return (
    <section className={styles.rootContainer}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          date={movie.release_date}
          percentage={movie.vote_average * 10}
          title={movie.title}
          description={movie.overview}
          genresId={movie.genre_ids}
          image={{
            alt: movie.title,
            path: movie.poster_path
          }}
        />
      ))}
    </section>
  )
}
