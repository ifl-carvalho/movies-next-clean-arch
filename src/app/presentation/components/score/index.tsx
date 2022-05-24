import { capitalize } from '@/app/presentation/common/utils'

import styles from './styles.module.scss'

type Props = {
  percentage: number
  size?: 'normal' | 'big'
}

export const ScoreComponent = ({ percentage, size = 'normal' }: Props) => {
  const handleStyleSize = (className: string) => {
    return `${styles[className]} ${styles[className.concat(capitalize(size))]}`
  }

  return (
    <div data-size className={handleStyleSize('rootContainer')}>
      <div className={handleStyleSize('content')}>
        <p className={handleStyleSize('text')}>{percentage}%</p>
      </div>
    </div>
  )
}
