import styles from './Trivia.module.scss'
import { P, Title } from '@/components/atoms'
import { TriviaItem, TriviaResult } from '@/components/molecules'
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper';

const Trivia = ({ items, answersToWin, titleWin, descriptionWin, titleLose, descriptionLose }) => {
  const [result, setResult] = useState({
    correct: 0,
    answered: 0,
    solved: []
  })

  const [gameFinished, setGameFinished] = useState(false)
  const isLastQuestion = result.answered === items.length
  const [swiperInstance, setSwiperInstance] = useState();
  const [swiperIndex, setSwiperIndex] = useState(1);
  const enableNextSlide = result?.solved.some((indexItem) => indexItem === swiperIndex)

  const swiperProps = {
		slidesPerView: 1,
    allowSlideNext: enableNextSlide,
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
      <div className={styles.content}>
        {!gameFinished ?
          <>
            <Title size='xs' h='3' className={styles.title}>Trivia tributaria</Title>

            <Swiper {...swiperProps} onSwiper={setSwiperInstance}>
              {items.length ?
                items.map(({ id, triviaQuestion, TriviaOptions, answer }, index) => (
                  <SwiperSlide key={id}>
                    <TriviaItem 
                      index={index + 1}
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
          </>
        : 
        <TriviaResult 
            won={result.correct >= answersToWin}
            setGameFinished={setGameFinished} 
            setSwiperIndex={setSwiperIndex} 
            setResult={result.correct >= answersToWin ? null : setResult}
            titleWin={titleWin} 
            descriptionWin={descriptionWin} 
            titleLose={titleLose} 
            descriptionLose={descriptionLose}
          />
        }
      </div>
      <div>
        {!gameFinished ?
          <>
            <div className={`swiper-button-prev ${styles.prev}`} />
            <div className={`swiper-button-next ${styles.next} ${enableNextSlide ? '' : 'swiper-button-disabled'}`} />
            <div className={styles.index}>
              <P color='white'><strong>{swiperIndex}</strong>/{items.length}</P>
            </div>
          </>
        : null}
      </div>
    </div>
  )
}

export default Trivia