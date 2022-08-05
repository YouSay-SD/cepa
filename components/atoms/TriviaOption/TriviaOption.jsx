import { P } from '@/components/atoms'
import Image from 'next/image'
import { useState } from 'react'
import styles from './TriviaOption.module.scss'

const TriviaOption = ({ index, text, wasSolved, isCorrect, handleTrivia }) => {
  const [isWrongOption, setIsWrongOption] = useState(false)
  const [optionSelected, setOptionSelected] = useState('default')
  const isOptionCorrect = wasSolved ? isCorrect ? 'correct' : 'incorrect' : null

  const handleClick = () => {
    handleTrivia(true, isCorrect)

    if (!wasSolved) {
      if (!isCorrect) {
        setIsWrongOption(true)
        setOptionSelected('lose')
      } else {
        setOptionSelected('win')
      }
    }
  }

  return (
    <div className={`${styles['trivia-option']} ${isOptionCorrect === 'correct' ? styles['is-correct'] : ''} ${isWrongOption ? styles['is-incorrect']: ''}`} onClick={handleClick}>
      {isOptionCorrect === 'correct' ?
        <div className={styles.index}>
          <Image
            src={`/img/icons/tick-white.svg`}
            alt='Icon Result'
            width={11}
            height={9}
          /> 
        </div>
      : 
        <>
          {optionSelected === 'default' ? 
            <P className={styles.index}>{index}</P> : null
          }
          {optionSelected === 'lose' ?
            <div className={styles.index}>
              <Image
                src={`/img/icons/cross-white.svg`}
                alt='Icon Result'
                width={9}
                height={9}
              /> 
            </div>
          : null}

          {optionSelected === 'win' ?
            <div className={styles.index}>
              <Image
                src={`/img/icons/tick-white.svg`}
                alt='Icon Result'
                width={11}
                height={9}
              /> 
            </div>
          : null}
        </>
      }
      <P className={styles.text}>{text}</P>
    </div>
  )
}

export default TriviaOption