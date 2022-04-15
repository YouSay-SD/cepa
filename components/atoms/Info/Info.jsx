import Image from 'next/image'
import { useState } from 'react'
import styles from './Info.module.scss'

const Info = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`${styles.info} ${isOpen && styles.active}`}>
      <Image
        onClick={() => setIsOpen(!isOpen)}
        src='/img/icons/info.svg'
        alt='Informacion'
        width={31}
        height={31}
      />

      <div className={styles.content}>
        Los datos expuestos corresponden al último dato disponible según país.
      </div>
    </div>
  )
}

export default Info