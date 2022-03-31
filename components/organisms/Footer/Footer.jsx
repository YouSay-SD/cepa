import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { Container, P } from '../../atoms'
import { SocialMedia } from '../../molecules'
import styles from './Footer.module.scss'

const Footer = ({ description, email }) => {
  return (
    <footer className={styles.footer} style={{backgroundImage: 'url(img/icons/footer-lines.svg)'}}>
      <Container>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Image
              src='/img/logo.svg'
              alt='CEPA'
              width={109}
              height={64}
            />
          </div>

          <P className={styles.description} color='white'>
            <ReactMarkdown>{description}</ReactMarkdown>
          </P>
        </div>

        <div className={styles['bottom-container']}>
          <div className={styles['mail-container']}>
            <Image
              src='/img/icons/mail.svg'
              alt='Mail'
              width={24}
              height={18}
            />
            {email &&
              <a className={styles.mailto} href={`mailto:${email}`}>{email}</a>
            }
          </div>

          <SocialMedia />
        </div>
      </Container>
    </footer>
  )
}

export default Footer