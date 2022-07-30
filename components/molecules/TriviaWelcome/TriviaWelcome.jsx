import { Button, P, Title } from '@/components/atoms'
import { setOpenModalTrivia } from 'actions/general'
import { useDispatch } from 'react-redux'
import styles from './TriviaWelcome.module.scss'

const TriviaWelcome = ({ setIsStarted }) => {
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(setOpenModalTrivia(false))
  }

  return (
    <div className={styles['modal-trivia']}>
      <Title size='xs' h='3' className={styles.title}>BIENVENIDx A LA TRIVIA Tributaria</Title>
      <P className={styles.description}>Participá de la trivia para contestar  interrogantes a partir de tus conocimientos sobre tributos en el mundo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  ¿Te animás?</P>

      <div className={styles['buttons']}>
        <Button type='outline' color='primary' onClick={closeModal}>Tal vez más tarde</Button>
        <Button type='solid' color='tertiary' onClick={() => setIsStarted(true)}>Empezar trivia ahora!</Button>
      </div>
    </div>
  )
}

export default TriviaWelcome