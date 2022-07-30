import { P } from '@/components/atoms'
import styles from './TriviaItem.module.scss'

const TriviaItem = ({ index, text }) => {
  return (
    <div className={styles['trivia-item']}>
      <P className={styles.index}>{index}</P>
      <P className={styles.text}>{text}</P>
    </div>
  )
}

export default TriviaItem