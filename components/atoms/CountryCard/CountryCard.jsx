import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { setModalGraphic, setOpenModalGraphic } from 'actions/general'
import styles from './CountryCard.module.scss'

const CountryCard = ({ id, name, number, fallback, type = 'primary', modal = true, flag }) => {
  const dispatch = useDispatch()

  const openModal = () => {
    if (modal) {
      dispatch(setOpenModalGraphic());
      dispatch(setModalGraphic(id));
    }
  }

  return (
    <div 
      className={`${styles['country-card']} ${styles[type]}`}
      onClick={openModal}
    >
      <p className={styles.name}>{name}</p>
      {type === 'primary' 
        ? <p className={styles.number}>{fallback ? fallback : number + '%'}</p>
        : flag?.data &&  <Image src={flag.data.attributes.url} alt='Country Flag' width={18} height={12} /> 
      }
    </div>
  )
}

export default CountryCard