import { P } from '@/components/atoms'
import { setOpenModalTrivia } from 'actions/general'
import Image from 'next/image'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './TriviaButton.module.scss'

const TriviaButton = ({ changedColor }) => {
  const dispatch = useDispatch()

  const openTrivia = () => {
    dispatch(setOpenModalTrivia(true))
  }

  return (
    <div className={styles['trivia-button']} onClick={openTrivia}>
      <P className={`${styles.text} ${changedColor ? styles['text-secondary'] : null }`} color='primary'>Trivia Tributaria!</P>
      <div className={styles.button}>
        <Image
          src={`/img/icons/trivia.svg`}
          alt='Trivia'
          width={32}
          height={32}
        />
      </div>
    </div>
  )
}

export default TriviaButton