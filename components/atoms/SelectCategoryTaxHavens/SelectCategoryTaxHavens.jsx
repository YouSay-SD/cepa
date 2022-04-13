import { setCategoryTaxHaven } from 'actions/countries';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './SelectCategoryTaxHavens.module.scss'

const SelectCategoryTaxHavens = ({ className = '' }) => {
  const { countryCategoriesTaxHavens } = useSelector(state => state.country)
  const [isOpen, setIsOpen] = useState(false);
  const [categoryName, setCategoryName] = useState(countryCategoriesTaxHavens[0]?.attributes.name);
  const dispatch = useDispatch()

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleCategory = (id, name) => {
    dispatch(setCategoryTaxHaven(id))
    setCategoryName(name)
  }

  useEffect(() => {
    setCategoryName(countryCategoriesTaxHavens[0]?.attributes.name)
  }, [setCategoryName, countryCategoriesTaxHavens])

  return (
    <div 
      className={`${styles['select-category']} ${className} ${isOpen && styles.active}`} 
      onClick={handleClick}
    >
      <p 
        className={`${styles['option-selected']} ${styles.option}`}
      >
        {categoryName}
      </p>

      <ul className={styles.list}>
        {countryCategoriesTaxHavens.map(({ id, attributes }) => {
          return (
            <p 
              key={id}
              className={`${styles['option-unselected']} ${styles.option}`}
              onClick={() => handleCategory(id, attributes.name)}
            >
              {attributes.name}
            </p>
          )
        })}
      </ul>
    </div>
  )
}

export default SelectCategoryTaxHavens