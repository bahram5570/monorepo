'use client';

import { COLORS_LIST } from '@theme/colors';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ArticleCardGenerator from '@components/Articles/ArticleCardGenerator';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { LandingArticlesContainerTypes } from './types';

const LandingArticlesContainer = ({ data, title, subTitle, showAllArticlesLinkTo }: LandingArticlesContainerTypes) => {
  const hasSubtitle = typeof subTitle !== 'undefined';

  return (
    <div
      className="w-full max-w-[100vw] overflow-hidden flex flex-col items-center py-8 lg:py-9"
      style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
    >
      <CustomTypography
        tagType="h2"
        fontSize="Title_Medium"
        className={`text-center w-[350px] lg:w-[370px] ${!hasSubtitle && 'pb-6 lg:pb-10'}`}
      >
        {title}
      </CustomTypography>

      {hasSubtitle && (
        <CustomTypography
          tagType="span"
          fontSize="Body_Large"
          color={'Surface_OnSurfaceVariant'}
          className="pt-2 lg:pt-4 pb-6 lg:pb-10 text-center w-[360px] lg:w-[610px]"
        >
          {subTitle}
        </CustomTypography>
      )}

      {data && (
        <section className="w-full pb-6 lg:pb-10">
          <Swiper slidesPerView={'auto'} freeMode={true} modules={[FreeMode]}>
            {data.map((item, index) => (
              <SwiperSlide key={index} className="w-fit px-3">
                <ArticleCardGenerator data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      <CustomLink
        href={showAllArticlesLinkTo}
        className="h-[40px] lg:h-[60px] p-6 flex items-center justify-center rounded-full"
        style={{ backgroundColor: COLORS_LIST.Primary_Primary }}
      >
        <CustomTypography fontSize="Lable_Large" color="Primary_OnPrimary">
          مشاهده همه مقالات
        </CustomTypography>
      </CustomLink>
    </div>
  );
};

export default LandingArticlesContainer;
