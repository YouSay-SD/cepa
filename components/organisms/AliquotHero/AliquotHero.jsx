import styles from './AliquotHero.module.scss'
import { Container, Title } from '../../atoms'
import Link from 'next/link'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

const AliquotHero = ({ title }) => {
  return (
    <section className={styles['aliquot-hero']}>
      <Container className={styles.container}>
        <Title className={styles.title} size='lg' color='white'>
          <ReactMarkdown>{title}</ReactMarkdown>
        </Title>

        <div className={styles['cta-container']}>
          <Link href='/'>
            <a className={styles.cta}>
              <Image
                src='/img/icons/arrow-white.svg'
                alt='Arrow White'
                width={18}
                height={12}
              />
              <p>Volver</p>
            </a>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default AliquotHero