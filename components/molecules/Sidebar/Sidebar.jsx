import styles from './Sidebar.module.scss'
import { useState } from 'react'
import { CountryCard, Switch } from "../../atoms";
import { useSelector } from 'react-redux';

const Sidebar = ({ items, type = 'switch', modal = true }) => {
  const { switchDirection } = useSelector(state => state.general)
  const [isOpen, setIsOpen] = useState(false);
  const switchDirectionProp = switchDirection === 'left' ? 'progressiveness' : 'taxPressure'

  // Type Styles
  const countryCardType = type === 'switch' ? 'primary' : 'secondary'

  return (
    <aside className={`${styles.sidebar} ${isOpen && styles.active} ${styles[type]}`}>
      {type === 'switch' ?
        <Switch className={styles['switch-desktop']} />
      : null}
      <div className={styles.btn} onClick={() => setIsOpen(!isOpen)} />
      <div className={styles.list}>
        {items && items.map(({ attributes, id }) => {
          return (
            <CountryCard 
              key={id}
              id={id} 
              name={attributes.name}
              number={attributes[switchDirectionProp]}
              type={countryCardType}
              modal={modal}
            />
          )
        })}
      </div>
    </aside>
  )
}

export default Sidebar;