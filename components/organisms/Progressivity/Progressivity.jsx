import styles from './Progressivity.module.scss'
import { Container, Switch, Map, Info } from "../../atoms"
import { Heading, Sidebar } from "../../molecules"

const Progressivity = ({ title, description, countries, info }) => {

  // console.log('c', countries)
  // const orderByNumber = (array) => {
  //   array.sort(( a, b ) => {
  //     if ( a.attributes.progressiveness < b.attributes.progressiveness ) return -1
  //     if ( a.attributes.progressiveness > b.attributes.progressiveness ) return 1
  //     return 0
  //   })
  // }
  // const pepe = orderByNumber(countries?.data)
  // console.log('order', pepe)
  return (
    <section className={styles.progressivity}>
      <Container className={styles['heading-container']}>
        <Heading
          title={title}
          description={description}
        />

        <Switch className={styles['switch-mobile']} />
      </Container>

      <Container className={styles.content}>
        <Sidebar items={countries?.data} />

        <div className={styles.map}>
          <Map countries={countries?.data} />
        </div>

        <Info info={info} />
      </Container>
    </section>
  )
}

export default Progressivity