import Image from 'next/image'
import styles from './AliquoteBox.module.scss'

export const AliquotBox = () => {
  return (
    <div className={styles['aliquote-box']}>
      <div className={styles['box-hover']}>
        <p className={styles['box-name']}>ARGENTINA</p>

        <Image
          src='/img/icons/plus.svg'
          alt='Plus'
          width={32}
          height={32}
        />
      </div>

      <div className={styles['box-heading']}>
        <Image
          src='/img/icons/country-flag.svg'
          alt='Country Flag'
          width={50}
          height={40}
        />

        <p className={styles['country-name']}>ARGENTINA</p>
      </div>

      <div className={styles['boxes']}>
        <div className={styles['box']}>
          <p className={styles['box-name']}>Ingresos</p>
          <p className={styles['box-number']}>45%</p>
        </div>

        <div className={styles['box']}>
          <p className={styles['box-name']}>Propiedad</p>
          <p className={styles['box-number']}>23%</p>
        </div>
      </div>
    </div>
  )
}

export default AliquotBox