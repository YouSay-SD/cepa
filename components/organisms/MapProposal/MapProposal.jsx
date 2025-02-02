import styles from './MapProposal.module.scss'
import { Container, Map, Info } from "../../atoms"
import { Heading } from '../../molecules'

const ProposalMap = ({ title, description, countries, info }) => {
  const mapProps = {
    defaultCenter: {
      lat: 8.7129179,
      lng: -50.3440224
    },
    defaultZoom: 1
  };

  return (
    <section className={styles['map-proposal']}>
      <Container className={styles['heading-container']}>
        <Heading
          title={title}
          description={description}
        />
      </Container>

      <Container className={styles['map-container']}>        
        <div className={styles.map}>
          <div className={styles.bar}>
            <p className={`${styles['bar-text']} ${styles['circle-yellow']}`}>PROPUESTO</p>
            <p className={`${styles['bar-text']} ${styles['circle-green']}`}>APROBADO</p>
          </div>

          <div className={styles['map-content']}>
            <Map {...mapProps} type='proposal' countries={countries?.data} />
          </div>
        </div>

        <Info info={info} />
      </Container>

    </section>
  )
}

export default ProposalMap