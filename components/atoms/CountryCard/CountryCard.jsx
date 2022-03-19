import Image from 'next/image'
import styles from './CountryCard.module.scss'

const CountryCard = ({ name, number, type = 'primary' }) => {
  return (
    <div className={`${styles['country-card']} ${styles[type]}`}>
      <p className={styles.name}>{name}</p>
      {type === 'primary' 
        ? <p className={styles.number}>{number}</p>
        : <Image src='/img/icons/country-flag.svg' alt='Country Flag' width={18} height={12} />
      }
    </div>
  )
}

export default CountryCard