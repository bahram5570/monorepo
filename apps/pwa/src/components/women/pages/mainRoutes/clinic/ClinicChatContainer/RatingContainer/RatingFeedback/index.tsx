import { useEffect, useRef } from 'react';

import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import RatingFeedbackListGenerator from './RatingFeedbackListGenerator';
import RatingTabGenerator from './RatingTabGenerator';
import useSelectTab from './__hooks__/useSelectTab';
import { RatingFeedbackProps } from './types';

const RatingFeedback = ({ rate, positive, negative, feedbackValues, feedbackValuesHandler }: RatingFeedbackProps) => {
  const { tab, tabHandler } = useSelectTab({ rate });

  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      const targetIndex = tab === 'negative' ? 0 : 1;
      swiperRef.current.slideTo(targetIndex);
    }
  }, [tab]);

  return (
    <>
      {tab !== null && (
        <div className="w-full">
          <div className="relative w-full grid grid-cols-2">
            <RatingTabGenerator tab={tab} tabHandler={tabHandler} tabType="negative" />
            <RatingTabGenerator tab={tab} tabHandler={tabHandler} tabType="positive" />
          </div>

          <Swiper
            pagination={false}
            slidesPerView={1}
            loop={false}
            autoplay={false}
            onSlideChange={(swiper) => tabHandler(swiper.activeIndex === 0 ? 'negative' : 'positive')}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              swiper.slideTo(tab === 'negative' ? 0 : 1);
            }}
          >
            <SwiperSlide>
              <RatingFeedbackListGenerator
                list={negative}
                tabType="negative"
                feedbackValues={feedbackValues}
                feedbackValuesHandler={feedbackValuesHandler}
              />
            </SwiperSlide>

            <SwiperSlide>
              <RatingFeedbackListGenerator
                list={positive}
                tabType="positive"
                feedbackValues={feedbackValues}
                feedbackValuesHandler={feedbackValuesHandler}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </>
  );
};

export default RatingFeedback;
