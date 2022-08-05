import { P, TriviaOption } from '@/components/atoms'
import styles from './TriviaItem.module.scss'
import { useState } from 'react';
import { useEffect } from 'react';
import TriviaHelper from '../TriviaHelper/TriviaHelper';

const TriviaItem = ({ question, options, setResult, swiperInstance, setGameFinished, isLastQuestion, answer }) => {
  const [wasSolved, setWasSolved]  = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)

  const convertIndexToLetter = (index) => {
    return String.fromCharCode(index + 'A'.charCodeAt(0))
  }

  useEffect(() => {
    setWasSolved(wasSolved)
    setIsCorrectAnswer(isCorrectAnswer)
  }, [wasSolved, isCorrectAnswer])

  const handleTrivia = (finished, isCorrect) => {
    if (!wasSolved) {
      setWasSolved(finished)
      setIsCorrectAnswer(isCorrect)
      setResult((prev) => ({
        ...prev,
        correct: isCorrect ? prev?.correct + 1 : prev.correct,
        answered: prev?.answered + 1
      }))
    }
  }

  return (
    <div className={styles['trivia-item']}>
      <P className={styles.question}>{question}</P>
      <div className={styles.items}>
        {options.length ?
          options.map(({ id, triviaOption, isCorrect }, index) => (
            <TriviaOption 
              key={id} 
              index={convertIndexToLetter(index)} 
              text={triviaOption} 
              isCorrect={isCorrect} 
              wasSolved={wasSolved} 
              handleTrivia={handleTrivia}
            />           
          ))
        : null}
      </div>
      
      {wasSolved ?
        <TriviaHelper
          answer={answer}
          wasSolved={wasSolved} 
          swiperInstance={swiperInstance}
          isLastQuestion={isLastQuestion}
          setGameFinished={setGameFinished}
        />
      : null}
    </div>
  )
}

export default TriviaItem