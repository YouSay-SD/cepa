import styles from './Aliquot.module.scss'
import { Container, Button } from "@/components/atoms";
import { Slider, Heading } from '@/components/molecules';
import { useState } from 'react';
import Link from 'next/link';

export const Aliquot = ({ title, description }) => {
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

          </div>
        </Container>

        <Container side='right'>
          <Slider />
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