import styles from './ModalTrivia.module.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CloseModal } from '@/components/atoms';
import { Trivia, TriviaWelcome } from '@/components/molecules';
import { useState } from 'react';
import { setOpenModalTrivia } from 'actions/general';

const ModalTrivia = ({ trivia }) => {
  const dispatch = useDispatch()
  const { isOpenModalTrivia } = useSelector(state => state.general)
  const [isStarted, setIsStarted] = useState(false)

  const closeModal = () => {
    dispatch(setOpenModalTrivia(false))
  }

  Modal.setAppElement('#__next');
  
  return (
    <Modal
      isOpen={isOpenModalTrivia}
      contentLabel="Example Modal"
    >
      <div className={styles['modal-trivia']}>
        <CloseModal onClick={closeModal} />
        <div>
          {isStarted 
            ? <Trivia items={trivia.TriviaItem} answersToWin={trivia.answersToWin} />  
            : <TriviaWelcome 
                title={trivia.triviaTitle}
                setIsStarted={setIsStarted} 
                description={trivia.triviaDescription} 
              />
          }
        </div>
      </div>
    </Modal>
  )
}

export default ModalTrivia