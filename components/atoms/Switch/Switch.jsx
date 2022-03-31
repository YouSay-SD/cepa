import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setSwitchDirection } from '../../../actions/general';
import styles from './Switch.module.scss'

const Switch = ({ className = '' }) => {
  const dispatch = useDispatch()
  const [switchSelected, setSwitch] = useState('left');

  const handleClick = (direction) => {
    setSwitch(direction)
    dispatch(setSwitchDirection(direction))
  }

  return (
    <div className={`${styles.switch} ${styles[switchSelected]} ${className}`}>
      <button className={styles.button} onClick={() => handleClick('left')}>PROGRESIVIDAD</button>
      <button className={styles.button} onClick={() => handleClick('right')}>PRESIÓN FISCAL</button>
    </div>
  )
}

export default Switch