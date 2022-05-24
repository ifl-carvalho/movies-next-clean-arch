import { MovieDetailsModel, MovieModel } from '@/app/domain/models'

import { DefaultLayout } from '@/app/presentation/layouts'

import { HeroCard } from './components'
import { EmbeddedVideo } from './components/embedded-video'

type Props = {
  movie: MovieModel & MovieDetailsModel
}

export const MovieDetailsPage = ({ movie }: Props): JSX.Element => {
  console.log('render')

  return (
    <DefaultLayout>
      <section>
        <HeroCard {...{ movie }} />
        <EmbeddedVideo videos={movie.videos} />
      </section>
    </DefaultLayout>
  )
}
