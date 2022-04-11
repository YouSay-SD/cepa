import styles from './Aliquot.module.scss'
import { Container, Button, SelectCategory } from "@/components/atoms";
import { Slider, Heading } from '@/components/molecules';
import { useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { filterAliquots, resetFilterAliquots, setCategoryType } from 'actions/aliquots';

export const Aliquot = ({ title, description }) => {
  const dispatch = useDispatch()
  const { aliquotCategoriesType, selectedCategoryType, filteredAliquots, selectedCategory } = useSelector(state => state.aliquot)
  
  const handleClick = (idCategoryType) => {
    dispatch(setCategoryType(idCategoryType))
  }

  useEffect(() => {
    dispatch(filterAliquots({ idCategoryType: selectedCategoryType, idCategoryCountry: selectedCategory }))
  }, [dispatch, selectedCategory, selectedCategoryType])

  // Reset FilterAliquots
  useEffect(() => {
    return () => {
      dispatch(resetFilterAliquots())
    }
  }, [dispatch])

  return (
    <section className={styles.aliquot}>
      <Container>
        <Heading 
          className={styles['text-container']}
          title={title}
          description={description}
        />
      </Container>

      <div className={styles['slider-container']}>
        <Container>
          <div className={styles['slider-heading']}>
            <div className={styles['slider-sections']}>
              {aliquotCategoriesType?.length !== 0 ? aliquotCategoriesType.map(({ id, attributes }) => {
                return (
                  <span 
                    key={id} 
                    className={`${styles['slider-section']} ${id === selectedCategoryType && styles['active']}`} 
                    onClick={() => handleClick(id)}
                  >
                    {attributes.name}
                  </span>
                )
              }): null}
            </div>
            
            <div className={styles['select-category']}>
              <SelectCategory />
            </div>
          </div>
        </Container>

        <Container side='right'>
          {
            filteredAliquots.length !== 0 
            ? <Slider items={filteredAliquots} />
            : 'No hay alicuotas para mostrar'
          }
        </Container>
      </div>

      <Container className={styles['cta-container']}>
        <Link href='/aliquots'>
          <a>
            <Button type='outline' color='primary'>Ver Todos</Button>
          </a>
        </Link>
      </Container>
    </section>
  )
}

export default Aliquot;