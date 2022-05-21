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

const ModalGraphic = ({ countries }) => {
  const { isOpenModalGraphic, modalGraphicId, switchDirection } = useSelector(state => state.general)
  const [swiperInstance, setSwiperInstance] = useState();
  const areThereCountries = countries?.length !== 0;
  const isCarousel = countries?.length !== 1;
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(setOpenModalGraphic())
  }
  
  const swiperProps = {
		loop: isCarousel,
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
            {countries?.map(({id, attributes: {name, progressiveness, taxPressure, graphic}}) => {
              return (
                <SwiperSlide key={id} className={styles.content}>
                  <div className={styles['text-container']}>
                    <div className={styles['number-desktop']}>
                      <p className={styles.number}>
                        {switchDirection === 'left' ? progressiveness : taxPressure}%
                      </p>
                    </div>

                    <p className={styles.name}>{name}</p>

                    <div className={styles['number-mobile']}>
                      <p className={styles.number}>
                        {taxPressure}%
                      </p>

                      <p className={`${styles.number} ${styles.red}`}>
                        {progressiveness}%
                      </p>
                    </div>
                  </div>
                  
                  {graphic?.data && 
                    <Image 
                      src={graphic.data?.attributes.url} 
                      alt={graphic.data?.attributes.alternativeText} 
                      width={388} 
                      height={150}
                      objectFit="contain"
                    />
                  }
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