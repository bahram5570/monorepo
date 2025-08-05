'use client';

import { COLORS_LIST } from '@theme/colors';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { useRef } from 'react';

import ArrowIcon from '@assets/icons/arrow2.svg';
import CustomImage from '@components/ui/CustomImage';

import { ArrowGeneratorTypes } from './types';

const slidesList = [
  '/assets/images/careers/slide1.webp',
  '/assets/images/careers/slide2.webp',
  '/assets/images/careers/slide3.webp',
  '/assets/images/careers/slide4.webp',
  '/assets/images/careers/slide5.webp',
  '/assets/images/careers/slide6.webp',
  '/assets/images/careers/slide7.webp',
  '/assets/images/careers/slide1.webp',
  '/assets/images/careers/slide2.webp',
  '/assets/images/careers/slide3.webp',
  '/assets/images/careers/slide4.webp',
  '/assets/images/careers/slide5.webp',
  '/assets/images/careers/slide6.webp',
  '/assets/images/careers/slide7.webp',
];

const CareersSlides = () => {
  const ref = useRef<SwiperRef>(null);

  const slidesHandler = (isNextSlide: boolean) => {
    const el = ref.current;

    if (el) {
      isNextSlide ? el.swiper.slideNext() : el.swiper.slidePrev();
    }
  };

  return (
    <div
      className="relative w-full py-6 my-10 border-y-[1px]"
      style={{ borderColor: COLORS_LIST.Surface_OutlineVariant }}
    >
      <Swiper ref={ref} loop={true} autoplay={true} spaceBetween={4} slidesPerView={'auto'} modules={[Autoplay]}>
        {slidesList.map((item, index) => (
          <SwiperSlide className="md:w-fit" key={index}>
            <div className="relative w-full h-[370px] md:w-[260px] md:h-[240px]">
              <CustomImage src={item} alt="" fill={true} sizes="100vw" style={{ objectFit: 'cover' }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <ArrowGenerator isNextSlide={false} slidesHandler={slidesHandler} />
      <ArrowGenerator isNextSlide={true} slidesHandler={slidesHandler} />
    </div>
  );
};

export default CareersSlides;

const ArrowGenerator = ({ isNextSlide, slidesHandler }: ArrowGeneratorTypes) => {
  return (
    <div
      onClick={() => slidesHandler(isNextSlide)}
      style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
      className={`
                    absolute 
                    top-[calc(50%-16px)] 
                    w-8 
                    h-8 
                    flex 
                    items-center 
                    justify-center 
                    rounded-full 
                    cursor-pointer
                    z-10 
                    ${isNextSlide ? 'left-6 md:left-[20%]' : 'right-6 md:right-[20%]'}
                `}
    >
      <ArrowIcon
        style={{ fill: COLORS_LIST.Surface_InverseSurface }}
        className={`w-3 h-auto  ${isNextSlide ? '-rotate-90' : 'rotate-90'}`}
      />
    </div>
  );
};
