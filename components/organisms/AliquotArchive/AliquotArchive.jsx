import styles from './AliquotArchive.module.scss'
import { Container, SelectCategory } from "../../atoms"
import { Grid } from "../../molecules"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setCurrentPage } from 'actions/general'
import { filterAliquots, setCategoryType } from 'actions/aliquots'

const AliquotArchive = () => {
  const { aliquotCategoriesType, selectedCategory, selectedCategoryType, filteredAliquots } = useSelector(state => state.aliquot)
  const { currentPage } = useSelector(state => state.general)

  const itemsPerPage = 12
  const paginatedItems = filteredAliquots.slice(itemsPerPage * currentPage, itemsPerPage * (currentPage + 1));
  const dispatch = useDispatch()

  const handleCategory = (id) => {
    // dispatch(setCategory(id))
    dispatch(setCategoryType(id))
    dispatch(setCurrentPage(0))
  }

  // useEffect(() => {
  //   dispatch(filterAliquotsByCategory(selectedCategory))
  // }, [dispatch, selectedCategory])

  useEffect(() => {
    dispatch(filterAliquots({ idCategoryType: selectedCategoryType, idCategoryCountry: selectedCategory ?? null }))
  }, [dispatch, selectedCategory, selectedCategoryType])

  // Dismmount
  // useEffect(() => {
  //   return () => {
  //     dispatch(filterAliquotsByCategory(aliquotCategories[0]?.id))
  //   }
  // }, [])

  return (
    <section className={styles['aliquot-archive']}>
      <Container className={styles.container}>
        <div className={styles['categories-container']}>
          <div className={styles['categories-type-container']}>
            {aliquotCategoriesType?.map(({ id, attributes }) => {
              return (
                <span 
                  key={id} 
                  className={`${styles.category} ${id === selectedCategoryType && styles.active}`} 
                  onClick={() => handleCategory(id)}
                >
                  {attributes.name}
                </span>
              )
            })}
          </div>

          <div className={styles['select-category']}>
            <SelectCategory />
          </div>
        </div>
        
        {filteredAliquots.length !== 0
          ? 
            <Grid 
              items={filteredAliquots}
              paginatedItems={paginatedItems}
            /> 
          :
            'No hay alicuotas para mostrar'      
        }
      </Container>
    </section>
  )
}

export default AliquotArchive