import { setCategory } from 'actions/aliquots';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './SelectCategory.module.scss'

const SelectCategory = ({ className = '' }) => {
  const { aliquotCategories } = useSelector(state => state.aliquot)
  const [isOpen, setIsOpen] = useState(false);
  const [categoryName, setCategoryName] = useState(aliquotCategories[0]?.attributes.name);
  const dispatch = useDispatch()

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleCategory = (id, name) => {
    dispatch(setCategory(id))
    setCategoryName(name)
  }

  useEffect(() => {
    setCategoryName(aliquotCategories[0]?.attributes.name)
  }, [setCategoryName, aliquotCategories])

  return (
    <div 
      className={`${styles['select-category']} ${className} ${isOpen && styles.active}`} 
      onClick={handleClick}
    >
      <p 
        className={`${styles['option-selected']} ${styles.option}`}
      >
        <b>Mostrar por:</b> {categoryName}
      </p>

      <ul className={styles.list}>
        {aliquotCategories.map(({ id, attributes }) => {
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

        <p 
          key={0}
          className={`${styles['option-unselected']} ${styles.option}`}
          onClick={() => handleCategory(0, 'otros')}
        >
          otros
        </p>
      </ul>
    </div>
  )
}

export default SelectCategory