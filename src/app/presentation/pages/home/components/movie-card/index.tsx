import { useCallback } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { GenreModel } from '@/app/domain/models'

import { ImageType } from '@/app/presentation/common/types'
import { GenreComponent, ScoreComponent } from '@/app/presentation/components'
import { useGenres } from '@/app/presentation/pages/home/hooks'

import styles from './styles.module.scss'

type Props = {
  id: number
  percentage: number
  title: string
  description: string
  date: string
  genresId: number[]
  image: ImageType
}

export const MovieCard = ({
  id,
  percentage,
  title,
  description,
  date,
  genresId,
  image
}: Props) => {
  const { genres } = useGenres()

  const handleGenre = useCallback(
    (id: number) => genres.find((genre: GenreModel) => genre.id === id)?.name,
    [genres]
  )

  const formattedDate = new Date(date).toLocaleDateString('pt-BR')

  return (
    <Link href={`/movie/${id}`} passHref>
      <article className={styles.rootContainer}>
        <div className={styles.imageContainer}>
          <Image
            layout='fill'
            alt={image.alt}
            src={`http://image.tmdb.org/t/p/w500/${image.path}`}
            priority
          />
        </div>
        <main className={styles.infoContainer}>
          <header className={styles.header}>
            <div className={styles.scoreContainer}>
              <ScoreComponent percentage={percentage} />
            </div>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.date}>{formattedDate}</p>
            </div>
          </header>
          <p className={styles.description}>{description}</p>
          <footer className={styles.footer}>
            {genresId.map((id) => (
              <GenreComponent key={id} text={handleGenre(id) ?? 'Other'} />
            ))}
          </footer>
        </main>
      </article>
    </Link>
  )
}
