import Image from 'next/image';
import { Container, P, Title, Button } from '../../atoms';
import styles from './CtaBottom.module.scss'

const CtaBottom = ({ title, description, ctaText, ctaLink}) => {
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
              {title}
            </Title>

            <P color='white'>{description}</P>
          </div>

          <div className={styles['cta-container']}>
            {ctaLink &&
              <a href={ctaLink}>
                <Button
                  type='outline-white'
                  color='tertiary'
                >
                  {ctaText}
                </Button>
              </a>
            }
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CtaBottom;