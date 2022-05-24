import styles from './styles.module.scss'

type Props = {
  text: string
}

export const GenreComponent = ({ text }: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
    </div>
  )
}
