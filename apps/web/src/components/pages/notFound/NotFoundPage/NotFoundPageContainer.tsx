'use client';

import { LottieCanvas } from '@lib/LottieCanvas';

import NotFoundIcon from '@assets/images/404.svg';
import CustomTypography from '@components/ui/CustomTypography';

const NotFoundPageContainer = () => {
  return (
    <div className="relative w-full flex flex-col items-center h-full px-4 pt-[360px] sm:pt-[460px] pb-[80px]">
      <div className="absolute top-0 sm:top-10 left-0 right-0 flex justify-center z-0">
        <LottieCanvas
          loop={true}
          width="100%"
          autoplay={true}
          className="w-[360px]"
          src="/assets/lottie/notFound.lottie"
        />
      </div>

      <div className="relative flex flex-col items-center gap-2 z-10">
        <NotFoundIcon className="w-[200px] sm:w-[250px]" />

        <CustomTypography fontSize="Headline_Medium">به نظر می‌رسه گم شدی</CustomTypography>

        <CustomTypography fontSize="Body_Medium">صفحه ای که به دنبالش هستی در دسترس نیست</CustomTypography>
      </div>
    </div>
  );
};

export default NotFoundPageContainer;
