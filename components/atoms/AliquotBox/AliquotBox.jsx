import styles from './AliquoteBox.module.scss'
import { setModalBullet, setOpenModalBullet } from 'actions/general';
import Image from 'next/image'
import { useDispatch } from 'react-redux';

export const AliquotBox = ({id, name, earnings, ownership}) => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setOpenModalBullet());
    dispatch(setModalBullet(id));
  }

  return (
    <div 
      className={styles['aliquote-box']}
      onClick={openModal}
    >
      <div className={styles['box-hover']}>
        <p className={styles['box-name']}>{name}</p>

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

        <p className={styles['country-name']}>{name}</p>
      </div>

      <div className={styles['boxes']}>
        <div className={styles['box']}>
          <p className={styles['box-name']}>Ingresos</p>
          <p className={styles['box-number']}>{earnings}%</p>
        </div>

        <div className={styles['box']}>
          <p className={styles['box-name']}>Propiedad</p>
          <p className={styles['box-number']}>{ownership}%</p>
        </div>
      </div>
    </div>
  )
}

export default AliquotBox