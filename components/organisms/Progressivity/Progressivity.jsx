import styles from './Progressivity.module.scss'
import { Container, Switch, Map, Info } from "../../atoms"
import { Heading, Sidebar } from "../../molecules"
import { useSelector } from 'react-redux'
import { orderByNumber } from 'utils/orderByNumber'

const Progressivity = ({ title, description, countries, info }) => {
  const { switchDirection } = useSelector(state => state.general)
  const switchDirectionProp = switchDirection === 'left' ? 'progressiveness' : 'taxPressure'

  const orderedItems = orderByNumber({
    array: countries?.data,
    orderBy: switchDirectionProp
  })

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
        <Sidebar items={orderedItems} />

        <div className={styles.map}>
          <Map countries={orderedItems} />
        </div>

        <Info info={info} />
      </Container>
    </section>
  )
}

export default Progressivity