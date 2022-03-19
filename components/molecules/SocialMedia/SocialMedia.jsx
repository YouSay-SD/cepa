import Image from 'next/image'
import styles from './SocialMedia.module.scss'

const SocialMedia = () => {
  return (
    <div className={styles['social-media']}>
      <a className={styles.link} href="https://www.google.com">
        <Image
          src='/img/icons/facebook.svg'
          alt='Facebook'
          width={32}
          height={32}
        />
      </a>

      <a className={styles.link} href="https://www.google.com">
        <Image
          src='/img/icons/facebook.svg'
          alt='Facebook'
          width={32}
          height={32}
        />
      </a>

      <a className={styles.link} href="https://www.google.com">
        <Image
          src='/img/icons/facebook.svg'
          alt='Facebook'
          width={32}
          height={32}
        />
      </a>

      <a className={styles.link} href="https://www.google.com">
        <Image
          src='/img/icons/facebook.svg'
          alt='Facebook'
          width={32}
          height={32}
        />
      </a>
    </div>
  )
}

export default SocialMedia