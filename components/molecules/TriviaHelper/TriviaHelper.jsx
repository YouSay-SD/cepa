import { Button, P } from '@/components/atoms'
import { useEffect } from 'react'
import styles from './TriviaHelper.module.scss'

const TriviaHelper = ({ wasSolved, swiperInstance, setGameFinished, isLastQuestion, answer }) => {
  const nextQuestion = () => {
    if (isLastQuestion) {
      setGameFinished(true)
    } else {
      swiperInstance?.slideNext(300)
    }
  }

  useEffect(() => {
    if (wasSolved) {
      swiperInstance?.updateAutoHeight(300)
    }
  }, [swiperInstance, wasSolved])

  return (
    <div className={styles['trivia-helper']}>
      {wasSolved && answer ?
        <div className={styles.helper}>
          <P className={styles['helper-text']}>{answer}</P>
        </div>
      : null}

      {wasSolved ?
        <Button 
          className={styles.button} 
          type='outline' 
          color='primary' 
          onClick={nextQuestion}
          isArrow={isLastQuestion ? false : true}
        >
          {isLastQuestion? 'Ver Resultado' : 'Siguiente Pregunta'}
        </Button>
      : null}
    </div>
  )
}

export default TriviaHelper