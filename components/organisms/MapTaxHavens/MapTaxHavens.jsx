import styles from './MapTaxHavens.module.scss'
import { Heading, Sidebar } from "../../molecules"
import { Container, Map } from '../../atoms'
import { useSelector } from 'react-redux'

const MapTaxHavens = ({ title, description, countries }) => {
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

      </Container>

      <Container className={styles.content}>
        <Sidebar items={countries.data} type='select' modal={false} />
        <div className={styles.map}>
          <Map {...mapProps} countries={countries?.data} type='tax-havens' />
        </div>
      </Container>
    </section>
  )
}

export default MapTaxHavens