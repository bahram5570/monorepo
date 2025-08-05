'use client';

import useBreakPoint from '@hooks/useBreakPoint';
import { COLORS_LIST } from '@theme/colors';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import CustomImage from '@components/ui/CustomImage';
// import { useState } from 'react';
import CustomTypography from '@components/ui/CustomTypography';

// import CommentsSliderDots from './CommentsSliderDots';
import { CommentsSliderTypes } from './types';

const CommentsSlider = ({ list }: CommentsSliderTypes) => {
  const { breakPoint } = useBreakPoint();
  // const [currentIndex, setCurrentIndex] = useState(0);

  const slidesPerView = breakPoint.mobile ? 1 : breakPoint.laptop ? 3 : 5;
  const key = breakPoint.mobile ? 'k1' : breakPoint.laptop ? 'k2' : 'k3';

  return (
    <section className="w-full flex justify-center overflow-hidden" key={key}>
      <div className="w-full sm:min-w-[1400px] lg:min-w-[2500px]">
        <Swiper
          loop={true}
          autoplay={true}
          modules={[Autoplay]}
          centeredSlides={true}
          slidesPerView={slidesPerView}
          // onSlideChangeTransitionEnd={(e) => setCurrentIndex(e.realIndex)}
        >
          {list.map((item, index) => (
            <SwiperSlide className="!h-auto" key={index}>
              {({ isActive }) => (
                <>
                  <div
                    className="flex flex-col items-center justify-between gap-8 px-4 sm:px-6 py-4 sm:py-8 rounded-3xl mx-auto w-[340px] sm:w-[450px] !h-full"
                    style={{
                      backgroundColor: COLORS_LIST.Surface_SurfaceVariant,
                      opacity: isActive ? '1' : '0.5',
                    }}
                  >
                    <CustomTypography
                      className="text-center"
                      color={'Neutral_OnSurface'}
                      fontSize={breakPoint.mobile ? 'Body_Large' : 'Body_Medium'}
                    >
                      {item.text}
                    </CustomTypography>

                    <div className="flex items-center gap-4">
                      <div dir="ltr">
                        <CustomTypography fontSize="Body_Small" color={'Neutral_OnSurface'} numbersMode="english">
                          {item.userName}
                        </CustomTypography>
                      </div>

                      <div className="relative w-10 h-10">
                        <CustomImage
                          fill={true}
                          sizes="40px"
                          alt="userImage"
                          src={item.userImage}
                          className="object-contain"
                        />

                        <div
                          className="absolute top-0 -right-3 w-6 h-6 min-w-6 min-h-6 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: COLORS_LIST.White }}
                        >
                          <CustomImage src={item.downloadPortIcon} width={14} height={14} sizes="20px" alt="port" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <CommentsSliderDots totalCount={COMMENTS_LIST.length} currentIndex={currentIndex} /> */}
      </div>
    </section>
  );
};

export default CommentsSlider;
