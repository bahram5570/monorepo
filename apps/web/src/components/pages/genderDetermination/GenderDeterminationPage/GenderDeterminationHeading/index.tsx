'use client';

import { LottieJson } from '@lib/LottieJson';
import { COLORS_LIST } from '@theme/colors';

import genderDeterminationLottie from '@assets/lottie/genderDetermination.json';
import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

const GenderDeterminationHeading = () => {
  return (
    <div
      className="
                  w-full 
                  pt-[40px] 
                  md:pt-[100px] 
                  px-4 
                  pb-20
                  sm:pb-2
                  mb-10
                  xl:mb-0
                  md:py-8 
                  mx-auto 
                  md:w-11/12 
                  lg:w-10/12 
                  md:max-w-full 
                  grid 
                  grid-rows-2 
                  md:grid-rows-1 
                  grid-cols-1 
                  md:grid-cols-12
                "
    >
      <div className="w-full row-start-2 row-end-3 md:row-start-1 md:row-end-2 col-span-1 md:col-span-7 lg:col-span-6 md:my-auto">
        <CustomTypography tagType="h1" fontSize="Headline_Medium" className="text-center md:text-start">
          <div>برای تعیین جنسیت فرزندت،</div>
          <div>ماما مهدیه قدم‌به‌قدم همراهته</div>
        </CustomTypography>

        <div className="w-full flex flex-col gap-6 pt-8">
          {list.map((item, index) => (
            <ItemsGenerator no={index + 1} script={item} key={index} />
          ))}
        </div>
      </div>

      <div className="relative w-full max-w-[400px] md:max-w-full col-span-1 md:col-span-5 lg:col-span-6 mx-auto">
        <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
          <CustomImage
            alt=""
            fill={true}
            className="object-cover object-center"
            src="/assets/images/genderDeterminationHollow.webp"
          />
        </div>

        <LottieJson animationData={genderDeterminationLottie} className="relative pointer-events-none w-full z-10" />
      </div>
    </div>
  );
};

export default GenderDeterminationHeading;

const ItemsGenerator = ({ no, script }: { no: number; script: string }) => {
  return (
    <div className="flex items-center gap-3 md:gap-4">
      <div
        style={{ backgroundColor: COLORS_LIST.Blue_100 }}
        className="
                    w-[40px] 
                    h-[40px] 
                    min-w-[40px] 
                    min-h-[40px] 
                    md:w-[48px] 
                    md:h-[48px] 
                    md:min-w-[48px] 
                    md:min-h-[48px] 
                    rounded-full 
                    flex 
                    items-center 
                    justify-center
                  "
      >
        <CustomTypography fontSize="Headline_Medium" color="Blue_600">
          {no}
        </CustomTypography>
      </div>

      <CustomTypography fontSize="Body_Large">{script}</CustomTypography>
    </div>
  );
};

const list = [
  'اگه جنسیت بچه برات مهمه و دلت دختر یا پسر می‌خواد.',
  'ماما مهدیه کمکت می‌کنه این مسیر رو با احتمال بیشتری برای رسیدن به هدفت طی کنی.',
  'از همه مهمتر اینه که سالم به دنیا بیاد و خوشحال بزرگ بشه',
];
