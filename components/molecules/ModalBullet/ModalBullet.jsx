import styles from './ModalBullet.module.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenModalBullet } from '../../../actions/general';
import ReactMarkdown from 'react-markdown';
import { CloseModal, P, Title } from '@/components/atoms';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper';
import { useEffect, useState } from 'react';
import { animateScroll } from "react-scroll";

const ModalBullet = ({ items }) => {
  const { isOpenModalBullet, modalBulletId } = useSelector(state => state.general)
  const [swiperInstance, setSwiperInstance] = useState();
  const areThereAliquots = items.length !== 1;
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(setOpenModalBullet())
    animateScroll.scrollMore(1);
  }

  const swiperProps = {
		loop: areThereAliquots,
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
    swiperInstance?.slideTo(modalBulletId, 0)
  }, [swiperInstance, modalBulletId])

  Modal.setAppElement('#__next');
  
  return (
    <Modal
      isOpen={isOpenModalBullet}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      // className='modal-bullet'
    >
      {items.length !== 0 &&
        <div className={styles['modal-bullet']}>
          <CloseModal onClick={closeModal} />

          <Swiper {...swiperProps} onSwiper={setSwiperInstance}>
            {items && items.map(({id, attributes: {name, description}}) => {
              return (
              <SwiperSlide key={id} className={styles.content}>
                <Title className={styles.title} size='xs'>{name}</Title>
                <P as="div" className={styles.description}>
                  <ReactMarkdown className={styles.markdown}>
                    {description}
                  </ReactMarkdown>
                </P>
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

export default ModalBullet