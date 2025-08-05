'use client';

import { PWA_LINK_WOMEN_URL } from '@constants/links.constants';
import { COLORS_LIST } from '@theme/colors';

import LogoIcon from '@assets/icons/impo2.svg';
import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import TestOnlineWrapper from '../TestOnlineWrapper';
import useTestOnlineResult from './__hooks__/useTestOnlineResult';

const TestOnlineResultContainer = () => {
  const { data } = useTestOnlineResult();

  return (
    <TestOnlineWrapper>
      <LogoIcon className="w-20 h-20 mt-6" />

      {data && (
        <div className="relative w-full">
          <CustomTypography fontSize="Lable_Large" tagType="h1" className="pt-10 pb-2 text-center">
            {data.title}
          </CustomTypography>

          <CustomTypography className="!text-center pt-2 pb-6">{data.message}</CustomTypography>

          <CustomImage
            alt=""
            height={0}
            width={490}
            className="mx-auto px-1"
            src="/assets/images/pregnancyTestOnline.webp"
          />

          <CustomLink
            color={'White'}
            style={{ backgroundColor: COLORS_LIST.Primary_Primary }}
            className="w-full h-12 sm:h-14 flex justify-center items-center rounded-full"
            href={`${PWA_LINK_WOMEN_URL}/?utm_source=website&utm_medium=cta&utm_campaign=cta-click`}
          >
            <CustomTypography color={'White'} fontSize="Lable_Large">
              دانلود اپلیکیشن ایمپو
            </CustomTypography>
          </CustomLink>
        </div>
      )}
    </TestOnlineWrapper>
  );
};

export default TestOnlineResultContainer;
