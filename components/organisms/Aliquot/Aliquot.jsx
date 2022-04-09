import styles from './Aliquot.module.scss'
import { Container, Button, SelectCategory } from "@/components/atoms";
import { Slider, Heading } from '@/components/molecules';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { filterAliquotsByCategory } from 'actions/aliquots';

export const Aliquot = ({ title, description }) => {
  const dispatch = useDispatch()
  const { aliquots, aliquotCategories, selectedCategory, filteredAliquots } = useSelector(state => state.aliquot)

  const sections = [
    {
      id: 'personas-humanas',
      name: 'Personas Humanas'
    },
    {
      id: 'empresas',
      name: 'Empresas'
    }
  ]
  
  const [sectionSelected, setSectionSelected] = useState(sections[0].id);

  const handleClick = (section) => {
    setSectionSelected(section)
  }

  useEffect(() => {
    dispatch(filterAliquotsByCategory(selectedCategory))
  }, [dispatch, selectedCategory])

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
              {sections.map(({ id, name }) => {
                return (
                  <span 
                    key={id} 
                    className={`${styles['slider-section']} ${id === sectionSelected && styles['active']}`} 
                    onClick={() => handleClick(id)}
                  >
                    {name}
                  </span>
                )
              })}
            </div>
            
            <div className={styles['select-category']}>
              <SelectCategory />
            </div>
          </div>
        </Container>

        <Container side='right'>
          <Slider items={filteredAliquots} />
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