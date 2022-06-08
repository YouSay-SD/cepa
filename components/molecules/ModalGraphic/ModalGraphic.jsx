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
import { useBreakpoint } from 'hooks/useBreakpoint';
import { orderAlphabetically } from 'utils/orderAlphabetically';
import { orderByNumber } from 'utils/orderByNumber';

const ModalGraphic = ({ countries }) => {
  const { isOpenModalGraphic, modalGraphicId, switchDirection } = useSelector(state => state.general)
  const [swiperInstance, setSwiperInstance] = useState();
  const switchDirectionProp = switchDirection === 'left' ? 'progressiveness' : 'taxPressure'
  const areThereCountries = countries?.length !== 0;
  const isCarousel = countries?.length !== 1;
  const dispatch = useDispatch()
  const { isBreakpoint } = useBreakpoint('sm')
  const [orderedCountries, setOrderedCountries] = useState(null);

  const closeModal = () => {
    dispatch(setOpenModalGraphic())
  }

  useEffect(() => {
    if (isBreakpoint) {
      const orderedItems = orderAlphabetically({
        array: countries,
        orderBy: 'name'
      })

      setOrderedCountries(orderedItems)
    } else {
      const orderedItems = orderByNumber({
        array: countries,
        orderBy: switchDirectionProp
      })

      setOrderedCountries(orderedItems)
    }
  }, [isBreakpoint, countries, switchDirectionProp])
  
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
            {orderedCountries?.map(({id, attributes: {name, progressiveness, progressivenessFallback, taxPressure, taxPressureFallback, graphic}}) => {
              return (
                <SwiperSlide key={id} className={styles.content}>
                  <div className={styles['text-container']}>
                    <div className={styles['number-desktop']}>
                      <p className={styles.number}>
                        {switchDirection === 'left' ?
                          progressivenessFallback ? progressivenessFallback : progressiveness + '%'
                        : taxPressureFallback ? taxPressureFallback : taxPressure + '%'}
                      </p>
                    </div>

                    <p className={styles.name}>{name}</p>

                    <div className={styles['number-mobile']}>
                      <p className={styles.number}>
                        {taxPressureFallback ? taxPressureFallback : taxPressure + '%'}
                      </p>

                      <p className={`${styles.number} ${styles.red}`}>
                        {progressivenessFallback ? progressivenessFallback : progressiveness + '%'}
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