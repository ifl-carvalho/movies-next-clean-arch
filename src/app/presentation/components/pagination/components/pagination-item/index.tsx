import styles from './styles.module.scss'

type Props = {
  page: number
  active: boolean
  handlePageChange: () => void
}

export const PaginationItem = ({
  page,
  active,
  handlePageChange
}: Props): JSX.Element => {
  if (page <= 0) return <></>

  if (active) {
    return (
      <li className={styles.containerActive}>
        <button className={styles.buttonActive} onClick={handlePageChange}>
          {page}
        </button>
      </li>
    )
  }

  return (
    <li className={styles.containerDisable}>
      <button className={styles.buttonDisable} onClick={handlePageChange}>
        {page}
      </button>
    </li>
  )
}
