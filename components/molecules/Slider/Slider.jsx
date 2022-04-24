import styles from './Slider.module.scss'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { AliquotBox } from "../../atoms"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper';

export const Slider = ({ items }) => {
  const swiperProps = {
		modules: [Navigation],
		navigation: {
			nextEl: '.swiper-aliquot-button-next',
			prevEl: '.swiper-aliquot-button-prev',
		},
	};

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={21}
        className={`mySwiper ${styles.slider}`}
        {...swiperProps}
      >
        {items && items.map(({ attributes, id }, index) => {
          return (
            <SwiperSlide key={id} className={styles.slide}>
              <AliquotBox index={index + 1} {...attributes} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default Slider