import styles from './Slider.module.scss'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { AliquotBox } from "../../atoms"
import { Swiper, SwiperSlide } from "swiper/react"

export const Slider = ({ items }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={21}
      className={`mySwiper ${styles.slider}`}
    >
      {items && items.map(({ attributes, id }, index) => {
        return (
          <SwiperSlide key={id} className={styles.slide}>
            <AliquotBox index={index + 1} {...attributes} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Slider