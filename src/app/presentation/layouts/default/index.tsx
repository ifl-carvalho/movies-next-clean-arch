import { ReactNode } from 'react'

import { Header } from './components'
import styles from './styles.module.scss'

type Props = {
  children: ReactNode
}

export const DefaultLayout = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles.rootContainer}>
      <Header />
      {children}
    </div>
  )
}
