import styles from './Pagination.module.scss'
import Image from 'next/image'

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <p className={`${styles.index} ${styles.active}`}>1</p>
      <p className={styles.index}>2</p>
      <p className={styles.index}>3</p>
      <p className={styles.index}>4</p>
      <div className={styles.next}>
        <Image src='/img/icons/arrow-next-pagination.svg' alt='Next Page' width={7.5} height={14} />
      </div>
    </div>
  )
}

export default Pagination