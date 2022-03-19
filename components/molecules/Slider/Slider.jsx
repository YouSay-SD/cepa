import styles from './Slider.module.scss'
import { AliquotBox } from "../../atoms"
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Swiper, SwiperSlide } from "swiper/react"

export const Slider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={21}
      className={`mySwiper ${styles.slider}`}
    >
      <SwiperSlide className={styles.slide}>
        <AliquotBox />
      </SwiperSlide>

      <SwiperSlide className={styles.slide}>
        <AliquotBox />
      </SwiperSlide>

      <SwiperSlide className={styles.slide}>
        <AliquotBox />
      </SwiperSlide>

      <SwiperSlide className={styles.slide}>
        <AliquotBox />
      </SwiperSlide>

      <SwiperSlide className={styles.slide}>
        <AliquotBox />
      </SwiperSlide>

      <SwiperSlide className={styles.slide}>
        <AliquotBox />
      </SwiperSlide>

      <SwiperSlide className={styles.slide}>
        <AliquotBox />
      </SwiperSlide>

      <SwiperSlide className={styles.slide}>
        <AliquotBox />
      </SwiperSlide>

      <SwiperSlide className={styles.slide}>
        <AliquotBox />
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider