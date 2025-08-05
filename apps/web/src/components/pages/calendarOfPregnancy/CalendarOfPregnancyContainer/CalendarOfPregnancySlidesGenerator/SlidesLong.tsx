import useBreakPoint from '@hooks/useBreakPoint';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { useRef, useState } from 'react';

import ItemGenerator from './ItemGenerator';
import SlidesArrow from './SlidesArrow';
import { SlidesLongTypes } from './types';

const SlidesLong = ({ list }: SlidesLongTypes) => {
  const ref = useRef<SwiperRef>(null);
  const { breakPoint } = useBreakPoint();
  const [activeIndex, setActiveIndex] = useState(0);

  const slidesHandler = (isNextSlide: boolean) => {
    const el = ref.current;

    if (el) {
      isNextSlide ? el.swiper.slideNext() : el.swiper.slidePrev();
    }
  };

  const slidesPerView = breakPoint.mobile ? 3 : 5;

  return (
    <div className="relative w-full flex justify-between items-center">
      <SlidesArrow isNextSlide={false} isDisabled={activeIndex === 0} onClick={() => slidesHandler(false)} />

      <Swiper ref={ref} slidesPerView={slidesPerView} onSlideChange={(e) => setActiveIndex(e.activeIndex)}>
        {list.map((item, index) => (
          <SwiperSlide className=" h-fit flex justify-center" key={index}>
            <ItemGenerator {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SlidesArrow
        isNextSlide={true}
        onClick={() => slidesHandler(true)}
        isDisabled={activeIndex + slidesPerView === list.length}
      />
    </div>
  );
};

export default SlidesLong;
