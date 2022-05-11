import { useSelector } from 'react-redux'
import styles from './CountryQuantity.module.scss'

const CountryQuantity = () => {
  const { countryCategoriesTaxHavens, selectedCategoryTaxHaven } = useSelector(state => state.country)

  return (
    <div className={styles['country-quantity']}>
      {countryCategoriesTaxHavens.map(({ id, attributes: {name, countries} }) => (
        <div key={id} className={`${styles.box} ${selectedCategoryTaxHaven === id && styles.active}`}>
          <p className={styles.title}>{name}</p>
          <p className={styles.quantity}>{countries.data.length} paises</p>
        </div>
      ))}
    </div>
  )
}

export default CountryQuantity