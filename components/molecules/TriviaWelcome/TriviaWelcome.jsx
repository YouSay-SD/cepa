import { Button, P, Title } from '@/components/atoms'
import { setOpenModalTrivia } from 'actions/general'
import { useDispatch } from 'react-redux'
import styles from './TriviaWelcome.module.scss'
import ReactMarkdown from 'react-markdown'

const TriviaWelcome = ({ setIsStarted, title, description }) => {
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(setOpenModalTrivia(false))
  }

  return (
    <div className={styles['modal-trivia']}>
      {title ? <Title size='xs' h='3' className={styles.title}>{title}</Title> : null}
      {description ? <P className={styles.description}><ReactMarkdown>{description}</ReactMarkdown></P> : null}

      <div className={styles['buttons']}>
        <Button type='outline' color='primary' onClick={closeModal} isArrow={false}>Tal vez más tarde</Button>
        <Button type='solid' color='tertiary' onClick={() => setIsStarted(true)}>Empezar trivia ahora!</Button>
      </div>
    </div>
  )
}

export default TriviaWelcome