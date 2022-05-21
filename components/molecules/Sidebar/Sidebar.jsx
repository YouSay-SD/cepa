import styles from './Sidebar.module.scss'
import { useState } from 'react'
import { CountryCard, Switch, SelectCategoryTaxHavens, P } from "../../atoms";
import { useSelector } from 'react-redux';
import { orderByNumber } from 'utils/orderByNumber';
import { orderAlphabetically } from 'utils/orderAlphabetically';

const Sidebar = ({ items, type = 'switch', modal = true }) => {
  const { switchDirection } = useSelector(state => state.general)
  const [isOpen, setIsOpen] = useState(false);
  const switchDirectionProp = switchDirection === 'left' ? 'progressiveness' : 'taxPressure'
  console.log('items', items)

  const orderedItems = orderAlphabetically({
    array: items,
    orderBy: 'name'
  })
  // console.log('ITEMS', items)
  // console.log('orderredItems', orderedItems)

  // const progressivityItems = orderByNumber({
  //   array: items,
  //   orderBy: 'progressiveness'
  // })

  // const taxPressureItems = orderByNumber({
  //   array: items,
  //   orderBy: 'taxPressure'
  // })

  // console.log('tax', taxPressureItems)

  // Type Styles
  const countryCardType = type === 'switch' ? 'primary' : 'secondary'

  return (
    <aside className={`${styles.sidebar} ${isOpen && styles.active} ${styles[type]}`}>
      {type === 'switch' ?
        <Switch className={styles['switch-desktop']} />
      : null}

      {type === 'tax-havens' ? 
        <div className={styles['select-container']}>
          <SelectCategoryTaxHavens />
        </div>
      : null}
      <div className={styles.btn} onClick={() => setIsOpen(!isOpen)} />
      <div className={styles.list}>
        {items ? items.map(({ attributes, id }, index) => {
          return (
            <CountryCard 
              key={id}
              id={index + 1} 
              name={attributes.name}
              number={attributes[switchDirectionProp]}
              type={countryCardType}
              modal={modal}
              flag={attributes?.flag}
            />
          )
        }): null}
      </div>

      {type === 'switch' ?
        <div className={`${styles.list} ${styles['list-mobile']}`}>
          <div className={styles['list-mobile-column']}>
            <P className={styles['list-title']}>PROGRESIVIDAD</P>
            {
              items ? items.map(({ attributes, id }, index) => {
                return (
                  <CountryCard 
                    key={id}
                    id={index + 1} 
                    name={attributes.name}
                    number={attributes.progressiveness}
                    type={countryCardType}
                    modal={modal}
                    flag={attributes?.flag}
                  />
                )
              }): null
            }
          </div>
          <div className={styles['list-mobile-column']}>
          <P className={styles['list-title']}>PRESIÓN FISCAL</P>
            {
              items ? items.map(({ attributes, id }, index) => {
                return (
                  <CountryCard 
                    key={id}
                    id={index + 1} 
                    name={attributes.name}
                    number={attributes.taxPressure}
                    type={countryCardType}
                    modal={modal}
                    flag={attributes?.flag}
                  />
                )
              }): null
            }
          </div>
        </div>
      : null}
    </aside>
  )
}

export default Sidebar;