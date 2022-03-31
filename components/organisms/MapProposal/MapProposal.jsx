import styles from './MapProposal.module.scss'
import { Container, Map } from "../../atoms"
import { Heading, Sidebar } from '../../molecules'
import { useSelector } from 'react-redux'

// const MapNoSSR = dynamic(() => import("../../../components/atoms/Map/Map"), { ssr: false })

const ProposalMap = ({ title, description}) => {
  const { countries } = useSelector(state => state.country)

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
          <Map {...mapProps} />
        </div>
      </Container>

    </section>
  )
}

export default ProposalMap