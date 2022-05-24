import styles from './styles.module.scss'

type Props = {
  title: string
  content: string
}

export const HeroDetailItem = ({ title, content }: Props) => {
  return (
    <li className={styles.container}>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.content}>{content}</p>
    </li>
  )
}
