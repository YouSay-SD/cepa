import { Button, P } from '@/components/atoms'
import { setOpenModalTrivia } from 'actions/general'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import styles from './TriviaResult.module.scss'

const TriviaResult = ({ won, setResult, setGameFinished, setSwiperIndex, titleWin, descriptionWin, titleLose, descriptionLose }) => {
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(setOpenModalTrivia(false))
  }

  const resetTrivia = () => {
    setResult({
      correct: 0,
      answered: 0,
      solved: []
    })
    setGameFinished(false)
    setSwiperIndex(1)
  }

  return (
    <div className={styles['trivia-result']}>
      <div className={styles.image}>
        <Image
          src={`/img/icons/${won ? 'win' : 'lose'}.svg`}
          alt='Icon Result'
          width={68}
          height={68}
        />
      </div>
      <P className={styles.title}>{won ? titleWin : titleLose}</P>
      <P className={styles.description}>{won ? descriptionWin : descriptionLose}</P>
      <div className={styles.buttons}>
        <Button type='outline' color='primary' onClick={closeModal}>Volver al Home</Button>

        {!won ?
          <Button type='solid' color='tertiary' onClick={resetTrivia}>Probar trivia de nuevo!</Button>
        : null}
      </div>
    </div>
  )
}

export default TriviaResult