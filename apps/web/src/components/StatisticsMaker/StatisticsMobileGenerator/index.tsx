import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import CustomImage from '@components/ui/CustomImage';

import { StatisticsMobileGeneratorTypes } from './types';

const StatisticsMobileGenerator = ({ list }: StatisticsMobileGeneratorTypes) => {
  const isSingleSlide = list.length === 1;

  return (
    <div className="w-full flex justify-center">
      <div className="flex items-center justify-between w-[280px]">
        <CustomImage alt="impo" width={33} height={0} src="/assets/images/leafRight.webp" />

        <Swiper
          loop={isSingleSlide ? false : true}
          autoplay={isSingleSlide ? false : true}
          modules={[Autoplay, EffectFade]}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          allowTouchMove={false}
        >
          {list.map((item, index) => (
            <SwiperSlide key={index}>{item}</SwiperSlide>
          ))}
        </Swiper>

        <CustomImage alt="impo" width={33} height={0} src="/assets/images/leafLeft.webp" />
      </div>
    </div>
  );
};

export default StatisticsMobileGenerator;
