import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CardsSmallScreenTypes } from './types';

const CardsSmallScreen = ({ list }: CardsSmallScreenTypes) => {
  return (
    <div className="-mx-4">
      <Swiper slidesPerView={'auto'} freeMode={true} modules={[FreeMode]} spaceBetween={12} className="px-4">
        {list.map((item, index) => (
          <SwiperSlide className="w-[120px]" key={index}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardsSmallScreen;
