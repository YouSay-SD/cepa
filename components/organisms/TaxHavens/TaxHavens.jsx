import styles from './TaxHavens.module.scss'
import { Heading, Sidebar } from "../../molecules"
import { Container } from '../../atoms'

const TaxHavens = () => {
  const items = [
    {
      name: 'chile',
      number: '44,3%'
    },
    {
      name: 'argentina',
      number: '44,3%'
    },
    {
      name: 'chile',
      number: '44,3%'
    },
    {
      name: 'chile',
      number: '44,3%'
    },
    {
      name: 'chile',
      number: '44,3%'
    },
    {
      name: 'chile',
      number: '44,3%'
    },
  ]

  return (
    <section className={styles['tax-havens']}>
      <Container className={styles['heading-container']}>
        <Heading
          title='Paraísos fiscales.'
          description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br /> commodo ligula eget dolor. Aenean massa.'
        />

      </Container>

      <Container className={styles.content}>
        <Sidebar items={items} type='select' />
        <div className={styles.map} />
      </Container>
    </section>
  )
}

export default TaxHavens