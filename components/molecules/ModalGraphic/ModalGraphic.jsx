import styles from './ModalGraphic.module.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { CloseModal } from '@/components/atoms';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenModalGraphic } from '../../../actions/general';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { EffectFade, Navigation } from 'swiper';

const ModalGraphic = () => {
  const { isOpenModalGraphic, modalGraphicId, switchDirection } = useSelector(state => state.general)
  const [swiperInstance, setSwiperInstance] = useState();
  const { countries } = useSelector(state => state.country)
  const areThereCountries = countries.length !== 0;
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(setOpenModalGraphic())
  }
  
  const swiperProps = {
		loop: true,
		slidesPerView: 1,
		effect: 'fade',
		modules: [EffectFade, Navigation],
		watchOverflow: true,
    autoHeight: true,
		fadeEffect: {
			crossFade: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	};

  console.log('countr', countries)

  useEffect(() => {
    swiperInstance?.slideTo(modalGraphicId, 0)
  }, [swiperInstance, modalGraphicId])

  Modal.setAppElement('#__next');
  
  return (
    <Modal
      isOpen={isOpenModalGraphic}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      {areThereCountries &&
        <div className={styles['modal-graphic']}>
          <CloseModal onClick={closeModal} />
          
          <Swiper {...swiperProps} onSwiper={setSwiperInstance}>
            {countries.map(({id, attributes: {name, progressiveness, taxPressure}}) => {
              return (
                <SwiperSlide key={id} className={styles.content}>
                  <div className={styles['text-container']}>
                    <p className={styles.number}>
                      {switchDirection === 'left' ? progressiveness : taxPressure}%
                    </p>
                    <p className={styles.name}>{name}</p>
                  </div>
                  <div className={styles['img-container']}>
                    <Image src='/img/graph.png' alt='Graphic' width={388} height={103} />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>

          <div className='swiper-button-prev' />
          <div className='swiper-button-next' />
        </div>
      }
    </Modal>
  )
}

export default ModalGraphic