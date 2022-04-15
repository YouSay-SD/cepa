import styles from './Progressivity.module.scss'
import { Container, Switch, Map, Info } from "../../atoms"
import { Heading, Sidebar } from "../../molecules"

const Progressivity = ({ title, description, countries }) => {
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

        <Info />
      </Container>
    </section>
  )
}

export default Progressivity