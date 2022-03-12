import Image from 'next/image';
import { Container, P, Title, Button } from '../../atoms';
import styles from './CtaBottom.module.scss'

const CtaBottom = () => {
  return (
    <section className={styles['cta-bottom']}>
      <Container>
        <div className={styles.content}>
          <div className={styles['img-container']}>
            <Image
              src='/img/icons/cta-bottom.svg'
              alt='Cta Bottom'
              width={80}
              height={76}
            />
          </div>

          <div className={styles['text-container']}>
            <Title 
              className={styles.title} 
              size='sm'
              color='white'
            >
              Descubre nuevos informes ecónomicos realizados por CEPA.
            </Title>

            <P color='white'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</P>
          </div>

          <div className={styles['cta-container']}>
            <Button
              type='outline'
              color='tertiary'
            >
              Ver Más Informes
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CtaBottom;