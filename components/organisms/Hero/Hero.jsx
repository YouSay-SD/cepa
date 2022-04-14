import styles from './Hero.module.scss'
import { Container, Button, Title, P, LinkSection } from '../../atoms'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

const Hero = ({ title, description, image, ctaTextPrimary, ctaLinkPrimary, ctaTextSecondary }) => {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles['text-container']}>
          <Title className={styles.title} size='xlg' color='white'>
            <ReactMarkdown>
              {title}
            </ReactMarkdown>
          </Title>

          {description &&
            <P as="div" className={styles.description} color='white'>
              <ReactMarkdown>
                {description}
              </ReactMarkdown>
            </P>
          }

          <div className={styles['button-container']}>
            {ctaLinkPrimary &&
              <Button type='outline-white' color='primary'>
                <a href={ctaLinkPrimary} target='_blank' rel="noreferrer">{ctaTextPrimary}</a>
              </Button>
            }

            {ctaTextSecondary &&
              <LinkSection to='progressivity'>
                <Button type='solid' color='tertiary'>{ctaTextSecondary}</Button>
              </LinkSection>
            }
          </div>
        </div>

        <div className={styles['img-container']}>
          {image?.data &&
            <Image
              src={image.data?.attributes.url}
              alt={image?.data.attributes.alternativeText}
              width={531}
              height={524}
              priority
            />
          }
        </div>
      </Container>
    </section>
  )
}

export default Hero