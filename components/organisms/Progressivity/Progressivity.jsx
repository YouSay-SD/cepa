import styles from './Progressivity.module.scss'
import { Container, Switch, Map, Info, Button } from "../../atoms"
import { Heading, Sidebar } from "../../molecules"
import { useDispatch, useSelector } from 'react-redux'
import { orderByNumber } from 'utils/orderByNumber'
import { setModalBigGraphic, setOpenModalBigGraphic } from 'actions/general'
import { useBreakpoint } from 'hooks/useBreakpoint'
import { useEffect, useState } from 'react'
import { orderAlphabetically } from 'utils/orderAlphabetically'

const Progressivity = ({ title, description, countries, info, ctaText, ctaText2, graphic, graphic2 }) => {
  const dispatch = useDispatch()
  const { switchDirection } = useSelector(state => state.general)
  const switchDirectionProp = switchDirection === 'left' ? 'progressiveness' : 'taxPressure'
  const { isBreakpoint } = useBreakpoint('sm')
  const [orderedCountries, setOrderedCountries] = useState(null);

  // const orderedItems = orderByNumber({
  //   array: countries?.data,
  //   orderBy: switchDirectionProp
  // })

  useEffect(() => {
    if (isBreakpoint) {
      const orderedItems = orderAlphabetically({
        array: countries?.data,
        orderBy: 'name'
      })

      setOrderedCountries(orderedItems)
    } else {
      const orderedItems = orderByNumber({
        array: countries?.data,
        orderBy: switchDirectionProp
      })

      setOrderedCountries(orderedItems)
    }
  }, [isBreakpoint, countries?.data, switchDirectionProp])

  // const orderedItemsMobile = orderAlphabetically({
  //   array: countries?.data,
  //   orderBy: 'name'
  // })

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
        {orderedCountries ?
          <Sidebar items={orderedCountries} />
        : null}

        <div className={styles.map}>
          {orderedCountries ?
            <Map countries={orderedCountries} />
          : null}
        </div>

        <Info info={info} />
      </Container>
    </section>
  )
}

export default Progressivity