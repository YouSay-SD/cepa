import { useState } from 'react'
import styles from './Switch.module.scss'

const Switch = ({ className = '' }) => {
  const [switchSelected, setSwitch] = useState('left');

  return (
    <div className={`${styles.switch} ${styles[switchSelected]} ${className}`}>
      <button className={styles.button} onClick={() => setSwitch('left')}>PROGRESIVIDAD</button>
      <button className={styles.button} onClick={() => setSwitch('right')}>PRESIÓN FISCAL</button>
    </div>
  )
}

export default Switch