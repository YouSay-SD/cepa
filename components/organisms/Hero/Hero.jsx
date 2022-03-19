import styles from './Hero.module.scss'
import { Container, Button, Title, P } from '../../atoms'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles['text-container']}>
          <Title className={styles.title} size='xlg' color='white'>Desigualdad tributaria en el mundo.</Title>
          <P className={styles.description} color='white'>Investigación sobre estructuras tributarias de países de América y de Europa entre la crisis del 2008 y la de 2020.
            A partir de ello construimos un indicador que sintetiza el grado de progresividad que posee cada sistema tributario.</P>

          <div className={styles['button-container']}>
            <Button type='outline-white' color='primary'>Ver Informe Completo</Button>
            <Button type='solid' color='tertiary'>Explorar Resultados</Button>
          </div>
        </div>

        <div className={styles['img-container']}>
          <Image
            src='/img/hero.png'
            alt='Hero'
            width={531}
            height={524}
          />
        </div>
      </Container>
    </section>
  )
}

export default Hero