import styles from './Progressivity.module.scss'
import { Container, Switch, Map, Info, Button } from "../../atoms"
import { Heading, Sidebar } from "../../molecules"
import { useSelector } from 'react-redux'
import { orderByNumber } from 'utils/orderByNumber'

const Progressivity = ({ title, description, countries, info, ctaText, ctaLink, ctaText2, ctaLink2 }) => {
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

        <div className={styles['button-container']}>
          {ctaLink &&
            <a href={ctaLink} target='_blank' rel="noreferrer">
              <Button type='outline' color='primary'>{ctaText2}</Button>
            </a>
          }

          {ctaLink2 &&
            <a href={ctaLink2} target='_blank' rel="noreferrer">
              <Button type='outline' color='primary'>{ctaText2}</Button>
            </a>
          }
        </div>

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