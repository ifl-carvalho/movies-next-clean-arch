import { Appended } from '@/app/domain/common/models'
import { VideoModel } from '@/app/domain/models'

import styles from './styles.module.scss'

type Props = {
  videos: Appended<VideoModel[]>
}

export const EmbeddedVideo = ({ videos }: Props): JSX.Element => {
  const trailer = videos.results.find(
    (video) => video.type === 'Trailer' && video.site === 'YouTube'
  )

  if (!trailer) {
    return <></>
  }

  return (
    <iframe
      className={styles.trailer}
      src={`https://www.youtube.com/embed/${trailer?.key}`}
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
  )
}
