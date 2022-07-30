import styles from './Trivia.module.scss'
import { TriviaItem } from '@/components/atoms'

const Trivia = () => {
  return (
    <div>
      <div className={styles.items}>
        <TriviaItem index="A" text="Argentina" />
        <TriviaItem index="B" text="Argentina" />
        <TriviaItem index="C" text="Argentina" />
      </div>
    </div>
  )
}

export default Trivia