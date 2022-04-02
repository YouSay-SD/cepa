import styles from './AliquotArchive.module.scss'
import { Container } from "../../atoms"
import { Grid } from "../../molecules"
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { setCurrentPage } from 'actions/general'

const AliquotArchive = () => {
  const { aliquots, aliquotCategories } = useSelector(state => state.country)
  const { currentPage } = useSelector(state => state.general)
  const dispatch = useDispatch()

  const [categorySelected, setCategorySelected] = useState(aliquotCategories[0]?.id);
  const aliquotsSelected = aliquots.filter(({ attributes }) => categorySelected !== 0 ? attributes?.category?.data?.id === categorySelected : attributes?.category.data === null);
  const itemsPerPage = 3
  const paginatedItems = aliquotsSelected.slice(itemsPerPage * currentPage, itemsPerPage * (currentPage + 1));

  const handleCategory = (id) => {
    setCategorySelected(id)
    dispatch(setCurrentPage(0))
  }

  return (
    <section className={styles['aliquot-archive']}>
      <Container className={styles.container}>
        <div className={styles['categories-container']}>
          {aliquotCategories?.map(({ id, attributes }) => {
            return (
              <span 
                key={id} 
                className={`${styles.category} ${id === categorySelected && styles.active}`} 
                onClick={() => handleCategory(id)}
              >
                {attributes.name}
              </span>
            )
          })}

          <span 
            key={0} 
            className={`${styles.category} ${0 === categorySelected && styles.active}`} 
            onClick={() => handleCategory(0)}
          >
            OTROS
          </span>
        </div>

        <Grid 
          items={aliquotsSelected}
          paginatedItems={paginatedItems}
        />        
      </Container>
    </section>
  )
}

export default AliquotArchive