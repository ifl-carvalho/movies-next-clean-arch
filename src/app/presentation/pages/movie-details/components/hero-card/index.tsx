import Image from 'next/image'

import { MovieDetailsModel, MovieModel } from '@/app/domain/models'

import { GenreComponent, ScoreComponent } from '@/app/presentation/components'

import { HeroDetailList } from './components'
import styles from './styles.module.scss'

type Props = {
  movie: MovieModel & MovieDetailsModel
}

export const HeroCard = ({ movie }: Props) => {
  const formattedDate = new Date(movie.release_date).toLocaleDateString('pt-BR')
  return (
    <article className={styles.rootContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>{movie.title}</h1>
        <p className={styles.date}>{formattedDate}</p>
      </header>
      <main className={styles.mainContent}>
        <div className={styles.infoContainer}>
          <h2 className={styles.infoTitle}>Synopsis</h2>
          <p className={styles.description}>{movie.overview}</p>
          <h2 className={styles.infoTitle}>Information</h2>
          <HeroDetailList {...{ movie }} />
          <div className={styles.miscContainer}>
            <div className={styles.genreContainer}>
              {movie.genres.map((genre) => (
                <GenreComponent key={genre.id} text={genre.name} />
              ))}
            </div>
            <div className={styles.scoreContainer}>
              <ScoreComponent size='big' percentage={movie.vote_average * 10} />
            </div>
          </div>
        </div>
        <picture className={styles.imageContainer}>
          <Image
            layout='fill'
            alt={movie.title}
            src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            priority
          />
        </picture>
      </main>
    </article>
  )
}
