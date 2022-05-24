import { useMemo } from 'react'

import { MovieDetailsModel, MovieModel } from '@/app/domain/models'

import { HeroDetailItem } from '../../components'
import styles from './styles.module.scss'

type Props = {
  movie: MovieModel & MovieDetailsModel
}

export const HeroDetailList = ({ movie }: Props) => {
  const handleCurrency = (value: number) =>
    value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })

  const formattedRuntime = useMemo(() => {
    const hours = String(Math.floor(movie.runtime / 60)).padStart(1, '0')
    const minutes = String(movie.runtime % 60).padStart(2, '0')
    return `${hours}h ${minutes}min`
  }, [movie.runtime])

  return (
    <ul className={styles.list}>
      <HeroDetailItem title='Situation' content={movie.status} />
      <HeroDetailItem
        title='Language'
        content={movie.original_language === 'en' ? 'English' : 'Other'}
      />
      <HeroDetailItem title='Duration' content={formattedRuntime} />
      <HeroDetailItem title='Budget' content={handleCurrency(movie.budget)} />
      <HeroDetailItem title='Revenue' content={handleCurrency(movie.revenue)} />
    </ul>
  )
}
