import styles from './Progressivity.module.scss'
import { Container, Switch, Map, Info, Button } from "../../atoms"
import { Heading, Sidebar } from "../../molecules"
import { useDispatch, useSelector } from 'react-redux'
import { orderByNumber } from 'utils/orderByNumber'
import { setModalBigGraphic, setOpenModalBigGraphic } from 'actions/general'

const Progressivity = ({ title, description, countries, info, ctaText, ctaText2, graphic, graphic2 }) => {
  const dispatch = useDispatch()
  const { switchDirection } = useSelector(state => state.general)
  const switchDirectionProp = switchDirection === 'left' ? 'progressiveness' : 'taxPressure'

  const orderedItems = orderByNumber({
    array: countries?.data,
    orderBy: switchDirectionProp
  })

  console.log('oredred', orderedItems)

  const handleModalBigGraphic = (graphic) => {
    dispatch(setOpenModalBigGraphic(true))
    dispatch(setModalBigGraphic(graphic))
  }

  return (
    <section className={styles.progressivity}>
      <Container className={styles['heading-container']}>
        <Heading
          title={title}
          description={description}
        />

        {
          graphic?.data || graphic2?.data ?
            <div className={styles['button-container']}>
              {ctaText &&
                <Button type='outline' color='primary' onClick={() => handleModalBigGraphic(graphic)}>
                  {ctaText}
                </Button>
              }

              {ctaText2 &&
                <Button type='outline' color='primary' onClick={() => handleModalBigGraphic(graphic2)}>
                  {ctaText2}
                </Button>
              }
            </div>
          : null
        }

        {/* <Switch className={styles['switch-mobile']} /> */}
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