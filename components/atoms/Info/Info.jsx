import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './Info.module.scss'

const Info = ({ info }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.addEventListener('click',(event) => {
      if(event.target.id != 'open-content' && event.target.id != 'content'){
        setIsOpen(false)
      }
    });
  }, [])

  return (
    <div className={`${styles.info} ${isOpen && styles.active}`}>
      {info ?
        <>
          <Image
            id='open-content'
            onClick={() => setIsOpen(!isOpen)}
            src='/img/icons/info.svg'
            alt='Informacion'
            width={31}
            height={31}
          />

          <div className={styles.content} id='content'>{info}</div>
        </>
      : null}
    </div>
  )
}

export default Info