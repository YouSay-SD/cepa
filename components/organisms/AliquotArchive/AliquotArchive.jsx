import styles from './AliquotArchive.module.scss'
import { Container } from "../../atoms"
import { Grid } from "../../molecules"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setCurrentPage } from 'actions/general'
import { filterAliquotsByCategory, setCategory } from 'actions/aliquots'

const AliquotArchive = () => {
  const { aliquotCategories, selectedCategory, filteredAliquots } = useSelector(state => state.aliquot)
  const { currentPage } = useSelector(state => state.general)

  const itemsPerPage = 12
  const paginatedItems = filteredAliquots.slice(itemsPerPage * currentPage, itemsPerPage * (currentPage + 1));
  const dispatch = useDispatch()

  const handleCategory = (id) => {
    dispatch(setCategory(id))
    dispatch(setCurrentPage(0))
  }

  useEffect(() => {
    dispatch(filterAliquotsByCategory(selectedCategory))
  }, [dispatch, selectedCategory])

  // Dismmount
  useEffect(() => {
    return () => {
      dispatch(filterAliquotsByCategory(aliquotCategories[0]?.id))
    }
  }, [])

  return (
    <section className={styles['aliquot-archive']}>
      <Container className={styles.container}>
        <div className={styles['categories-container']}>
          {aliquotCategories?.map(({ id, attributes }) => {
            return (
              <span 
                key={id} 
                className={`${styles.category} ${id === selectedCategory && styles.active}`} 
                onClick={() => handleCategory(id)}
              >
                {attributes.name}
              </span>
            )
          })}

          <span 
            key={0} 
            className={`${styles.category} ${0 === selectedCategory && styles.active}`} 
            onClick={() => handleCategory(0)}
          >
            OTROS
          </span>
        </div>

        <Grid 
          items={filteredAliquots}
          paginatedItems={paginatedItems}
        />        
      </Container>
    </section>
  )
}

export default AliquotArchive