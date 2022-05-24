import { PaginationItem } from './components'
import styles from './styles.module.scss'

type Props = {
  currentPage: number
  handlePageChange: (page: number) => void
}

export const Pagination = ({ currentPage, handlePageChange }: Props) => {
  return (
    <nav className={styles.rootContainer}>
      <ul className={styles.list}>
        {Array.from({ length: 5 }, (_, index) => {
          const thisButtonPageNumber = currentPage + index - 2
          return (
            <PaginationItem
              key={thisButtonPageNumber}
              active={thisButtonPageNumber === currentPage}
              page={thisButtonPageNumber}
              handlePageChange={() => {
                handlePageChange(thisButtonPageNumber)
              }}
            />
          )
        })}
      </ul>
    </nav>
  )
}
