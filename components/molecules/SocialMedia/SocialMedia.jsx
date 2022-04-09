import Image from 'next/image'
import styles from './SocialMedia.module.scss'

const SocialMedia = ({ socialMedia }) => {
  return (
    <div className={styles['social-media']}>
      {socialMedia.map(({id, icon, url}) => {
        return (
          <a key={id} className={styles.link} href={url}>
            <Image
              src={icon.data.attributes.url}
              alt={icon.data.attributes.alternativeText}
              width={32}
              height={32}
            />
          </a>
        )
      })}
    </div>
  )
}

export default SocialMedia