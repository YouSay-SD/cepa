import { setCategory } from 'actions/aliquots';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './SelectCategory.module.scss'

const SelectCategory = ({ className = '' }) => {
  const { aliquotCategories } = useSelector(state => state.aliquot)
  const [isOpen, setIsOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('Ver Todos');
  const dispatch = useDispatch()

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleCategory = (id, name) => {
    dispatch(setCategory(id))
    setCategoryName(name)
  }

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
          className={`${styles['option-unselected']} ${styles.option}`}
          onClick={() => handleCategory(null, 'Ver Todos')}
        >
          Ver Todos
        </p>
      </ul>
    </div>
  )
}

export default SelectCategory