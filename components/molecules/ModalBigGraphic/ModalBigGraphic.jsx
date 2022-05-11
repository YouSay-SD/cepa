import styles from './ModalBigGraphic.module.scss'
import { CloseModal } from '@/components/atoms';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenModalBigGraphic } from '../../../actions/general';
import Image from 'next/image';

const ModalBigGraphic = () => {
  const dispatch = useDispatch()
  const { isOpenModalBigGraphic, modalBigGraphic } = useSelector(state => state.general)

  const closeModal = () => {
    dispatch(setOpenModalBigGraphic(false))
  }

  Modal.setAppElement('#__next');
  
  return (
    <Modal
      isOpen={isOpenModalBigGraphic}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className={styles.modal}
    >
      <div className={styles['modal-big-graphic']}>
        <CloseModal onClick={closeModal} />

        <div className={styles.content}>
          {modalBigGraphic?.data && 
            <Image 
              src={modalBigGraphic.data?.attributes.url} 
              alt={modalBigGraphic.data?.attributes.alternativeText} 
              width={888} 
              height={500}
              objectFit="contain"
            />
          }
        </div>
      </div>
    </Modal>
  )
}

export default ModalBigGraphic