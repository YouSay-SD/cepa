import styles from './CloseModal.module.scss'
import Image from 'next/image'

const CloseModal = ({ onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className={styles['close-modal']}
    >
      <Image
        src='/img/icons/close-modal.svg'
        alt='Close Modal'
        width={24}
        height={24}
      />
    </div>
  )
}

export default CloseModal