import Link from 'next/link'

import styles from './styles.module.scss'

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Link href={'/'} passHref>
        <h1 className={styles.title}>Movies</h1>
      </Link>
    </header>
  )
}
