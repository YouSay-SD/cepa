import Image from 'next/image';
import { Container, P, Title, Button } from '../../atoms';
import styles from './CtaBottom.module.scss'

const CtaBottom = ({ title, description, ctaText, ctaLink, image }) => {
  return (
    <section className={styles['cta-bottom']}>
      <Container>
        <div className={styles.content}>
          {image?.data ?
            <div className={styles['img-container']}>
              <Image
                src={image.data.attributes.url}
                alt={image.data.attributes.alternativeText}
                width={80}
                height={76}
              />
            </div>
          : null}

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
              <a href={ctaLink} target='_blank' rel="noreferrer">
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