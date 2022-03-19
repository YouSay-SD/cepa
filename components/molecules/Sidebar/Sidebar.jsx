import styles from './Sidebar.module.scss'
import { useState } from 'react'
import { CountryCard, Switch } from "../../atoms";

const Sidebar = ({ items, type = 'switch' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const countryCardType = type === 'switch' ? 'primary' : 'secondary'

  return (
    <aside className={`${styles.sidebar} ${isOpen && styles.active} ${styles[type]}`}>
      <Switch className={styles['switch-desktop']} />
      <div className={styles.btn} onClick={() => setIsOpen(!isOpen)} />
      <div className={styles.list}>
        {items.map((data, index) => {
          return <CountryCard key={index} {...data} type={countryCardType} />
        })}
      </div>
    </aside>
  )
}

export default Sidebar;