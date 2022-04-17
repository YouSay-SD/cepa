import styles from './Hero.module.scss'
import { Container, Button, Title, P, LinkSection } from '../../atoms'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { useInView } from 'react-intersection-observer';

const Hero = ({ title, description, image, ctaTextPrimary, ctaLinkPrimary, ctaTextSecondary }) => {
	const { ref, inView } = useInView();
	const classAnimPlay = inView && styles['anim-play'];
  const classAnimation = `${styles['anim-fade-in-left']} ${classAnimPlay}`

  return (
    <section className={styles.hero} ref={ref}>
      <Container className={styles.container}>
        <div className={styles['text-container']}>
          <Title className={`${styles.title} ${classAnimation}`} size='xlg' color='white' h='1'>
            <ReactMarkdown>
              {title}
            </ReactMarkdown>
          </Title>

          {description &&
            <P as="div" className={`${styles.description} ${classAnimation} ${styles['anim-delay-2']}`} color='white'>
              <ReactMarkdown>
                {description}
              </ReactMarkdown>
            </P>
          }

          <div className={`${styles['button-container']} ${classAnimation} ${styles['anim-delay-3']}`}>
            {ctaLinkPrimary &&
              <Button type='outline-white' color='primary'>
                <a href={ctaLinkPrimary} target='_blank' rel="noreferrer">{ctaTextPrimary}</a>
              </Button>
            }

            {ctaTextSecondary &&
              <LinkSection to='progressivity' className={styles.btn}>
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