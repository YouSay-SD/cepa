import styles from './MapTaxHavens.module.scss'
import { Heading, Sidebar, CountryQuantity } from "../../molecules"
import { Container, Map, Info, SelectCategoryTaxHavens } from '../../atoms'
import { useSelector } from 'react-redux'

const MapTaxHavens = ({ title, description, countries, info }) => {
  const { selectedCategoryTaxHaven } = useSelector(state => state.country)
  const filteredCountries = countries.filter(({ attributes }) => attributes?.categoryTaxHaven?.data?.id === selectedCategoryTaxHaven)

  const mapProps = {
    defaultCenter: {
      lat: 0.95,
      lng: 300.33
    },
    defaultZoom: -10
  };

  return (
    <section className={styles['map-tax-havens']}>
      <Container className={styles['heading-container']}>
        <Heading
          title={title}
          description={description}
        />

        <div className={styles['select-container']}>
          <SelectCategoryTaxHavens />
        </div>
      </Container>

      <Container className={styles.content}>
        <div className={styles['sidebar-container']}>
          <Sidebar items={filteredCountries} type='tax-havens' modal={false} />
        </div>

        <div className={styles.map}>
          <div className={styles['country-quantity']}>
            <CountryQuantity />
          </div>
          <Map {...mapProps} countries={filteredCountries} type='tax-havens' />
        </div>

        <Info info={info} />
      </Container>
    </section>
  )
}

export default MapTaxHavens