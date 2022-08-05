import styles from './Trivia.module.scss'
import { P, Title } from '@/components/atoms'
import { TriviaItem, TriviaResult } from '@/components/molecules'
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper';

const Trivia = ({ items, answersToWin }) => {
  const [result, setResult] = useState({
    correct: 0,
    answered: 0
  })
  const [gameFinished, setGameFinished] = useState(false)
  const isLastQuestion = result.answered === items.length
  const [swiperInstance, setSwiperInstance] = useState();
  const [swiperIndex, setSwiperIndex] = useState(1);

  const swiperProps = {
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
    onSlideChange: (swiperCore) => setSwiperIndex(swiperCore.activeIndex + 1)
	};

  return (
    <div className={styles.trivia}>
      {!gameFinished ?
        <div>
          <Title size='xs' h='3' className={styles.title}>Trivia tributaria</Title>

          <Swiper {...swiperProps} onSwiper={setSwiperInstance}>
            {items.length ?
              items.map(({ id, triviaQuestion, TriviaOptions, answer }) => (
                <SwiperSlide key={id}>
                  <TriviaItem 
                    options={TriviaOptions} 
                    question={triviaQuestion}
                    setResult={setResult}
                    swiperInstance={swiperInstance}
                    setGameFinished={setGameFinished}
                    isLastQuestion={isLastQuestion}
                    answer={answer}
                  />
                </SwiperSlide>
              ))
            : null}
          </Swiper>

          <div className={`swiper-button-prev ${styles.prev}`} />
          <div className={`swiper-button-next ${styles.next}`} />

          <div className={styles.index}>
            <P color='white'><strong>{swiperIndex}</strong>/{items.length}</P>
          </div>
        </div>
      : 
        result.correct >= answersToWin
        ? <TriviaResult won setGameFinished={setGameFinished} setSwiperIndex={setSwiperIndex} />
        : <TriviaResult won={false} setGameFinished={setGameFinished} setSwiperIndex={setSwiperIndex} setResult={setResult} />
      }
    </div>
  )
}

export default Trivia