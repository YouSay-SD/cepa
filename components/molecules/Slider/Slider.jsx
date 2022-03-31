import styles from './Slider.module.scss'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { AliquotBox } from "../../atoms"
import { Swiper, SwiperSlide } from "swiper/react"
import { useSelector } from 'react-redux'

export const Slider = () => {
  const { countries } = useSelector(state => state.country)

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={21}
      className={`mySwiper ${styles.slider}`}
    >
      {countries.map(({ attributes, id }) => {
        return (
          <SwiperSlide key={id} className={styles.slide}>
            <AliquotBox id={id} {...attributes} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Slider