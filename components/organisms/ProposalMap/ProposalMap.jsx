import styles from './ProposalMap.module.scss'
import { Container } from "../../atoms"
import { Heading } from '../../molecules'

const ProposalMap = () => {
  return (
    <section className={styles['proposal-map']}>
      <Container className={styles['heading-container']}>
        <Heading
          title='Porpuestas de impuestos a la riqueza o con mayor progresividad.'
          description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget <br /> dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.'
        />
      </Container>

      <Container className={styles['map-container']}>
        <div className={styles.map} />
      </Container>

    </section>
  )
}

export default ProposalMap