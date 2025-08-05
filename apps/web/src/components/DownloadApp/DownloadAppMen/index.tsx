'use client';

import useBreakPoint from '@hooks/useBreakPoint';
import { COLORS_LIST } from '@theme/colors';

import ImpoIcon from '@assets/icons/impoMen.svg';
import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import { DOWNLOAD_APP_SECTION_ID } from '../DownloadAppWomen/constants';
import DownloadAppAndroid from './DownloadAppAndroid';
import DownloadAppIos from './DownloadAppIos';

const DownloadAppMen = () => {
  const { breakPoint } = useBreakPoint();

  return (
    <div
      id={DOWNLOAD_APP_SECTION_ID}
      style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
      className="flex flex-col md:flex-row items-center md:justify-center md:gap-6 lg:gap-14 xl:gap-32 rounded-3xl px-4 pt-8 pb-2 md:py-8 mx-auto w-full max-w-[360px] md:w-11/12 lg:w-10/12 md:max-w-full"
    >
      <div className="flex flex-col items-center w-full md:w-[400px]">
        <ImpoIcon className="w-[72px] mb-2 md:hidden" />

        <div className="flex gap-1">
          <CustomTypography tagType="span" fontSize="Headline_Medium" color={'Blue_500'}>
            ۷ روز
          </CustomTypography>

          <CustomTypography tagType="span" fontSize="Headline_Medium">
            اشتراک رایگان ایمپو آقایان
          </CustomTypography>
        </div>

        <section className="flex flex-col items-center">
          <CustomTypography
            fontSize={breakPoint.laptop ? 'Body_Medium' : 'Body_Large'}
            className="pt-2 pb-10 px-2 text-center"
          >
            ایمپو آقایان رو میتونی از معتبرترین استورها یا به صورت مستقیم از لینک زیر دانلود کنی.
          </CustomTypography>

          <DownloadAppAndroid />

          <div className="w-full h-[1px] mt-4 md:mt-8 mb-8" style={{ backgroundColor: COLORS_LIST.Neutral_Surface }} />

          <DownloadAppIos />
        </section>
      </div>

      <CustomImage
        height={0}
        width={520}
        sizes="520px"
        alt="downloadAppMainMen"
        src="/assets/images/downloadAppMainMen.webp"
        className="pt-6 md:p-0 w-full md:max-w-[280px] lg:min-w-[230px] lg:max-w-[430px] xl:max-w-[520px]"
      />
    </div>
  );
};

export default DownloadAppMen;
