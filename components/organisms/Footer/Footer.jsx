import Image from 'next/image'
import { Container, P } from '../../atoms'
import { SocialMedia } from '../../molecules'
import styles from './Footer.module.scss'

const Footer = () => {
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

          <P className={styles.description} color='white'>El Centro de Economía Política (CEPA) se creó en​ ​2012 con el objetivo de​ intervenir en​ los debates económicos complejos, elaborando informes con un alto nivel de rigurosidad técnica y un lenguaje accesible al público en general, permitiendo así una democratización de la comprensión de las disputas político-sociales que emergen con relación a pujas económicas.  
            <br />
            <br />
            Para CEPA, la economía debe ser política, ya que las decisiones de política económica están siempre mediadas por profundas disputas de poder. Este abordaje es clave para comprender la sucesión de los distintos patrones de acumulación que se han manifestado a lo largo de la historia argentina y que no necesariamente coinciden con los cambios de las administraciones gubernamentales.​
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
            <a className={styles.mailto} href='mailto:prensa@centrocepa.com.ar'>prensa@centrocepa.com.ar</a>
          </div>

          <SocialMedia />
        </div>
      </Container>
    </footer>
  )
}

export default Footer