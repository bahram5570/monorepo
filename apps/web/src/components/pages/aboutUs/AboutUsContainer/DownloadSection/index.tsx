'use client';

import useBreakPoint from '@hooks/useBreakPoint';
import { COLORS_LIST } from '@theme/colors';

import DownloadIcon from '@assets/icons/document-upload.svg';
import LogoTypeIconMobileSize from '@assets/icons/logoType-mobile-size.svg';
import LogoTypeIcon from '@assets/icons/logoType.svg';
import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

const DownloadSection = () => {
  const { breakPoint } = useBreakPoint();

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1  w-full h-full">
      <div style={{ backgroundColor: COLORS_LIST.Blue_50 }}>
        <div className="flex justify-center items-center w-full h-full">
          <div className="flex flex-col gap-5 md:items-start items-center lg:mt-0 mt-28 lg:mb-0 mb-12">
            <div className="flex justify-center items-center md:gap-2 gap-0">
              {!breakPoint.mobile && (
                <CustomTypography fontSize="Headline_Large" tagType="span">
                  سلامتی و راحتی با
                </CustomTypography>
              )}
              {breakPoint.mobile && (
                <CustomTypography fontSize="Title_Large" tagType="span">
                  سلامتی و راحتی با
                </CustomTypography>
              )}

              {breakPoint.desktop && <LogoTypeIcon />}
              {!breakPoint.desktop && <LogoTypeIconMobileSize />}
            </div>

            {!breakPoint.mobile && (
              <CustomTypography fontSize="Headline_Small">ایمپو دوستته، مشاورته، مراقبته</CustomTypography>
            )}
            {breakPoint.mobile && (
              <CustomTypography fontSize="Title_Small">ایمپو دوستته، مشاورته، مراقبته</CustomTypography>
            )}

            <CustomLink
              href="#downloadAppId"
              aria-label="DownloadAppAndroid"
              style={{ backgroundColor: COLORS_LIST.White }}
              className="rounded-xl lg:h-[45px]  flex items-center justify-center py-2 px-6 gap-2 scroll-smooth"
              onClick={(e) => e.preventDefault()}
            >
              <DownloadIcon className="w-5 h-auto" style={{ stroke: COLORS_LIST.Neutral_OnBackground }} />
              <CustomTypography fontSize="Title_Small" color="Black">
                دانلود ایمپو
              </CustomTypography>
            </CustomLink>
          </div>
        </div>
      </div>
      <CustomImage
        src="/assets/images/aboutUs/1.webp"
        alt="aboutUs"
        width={1880}
        height={1566}
        className="w-full h-auto"
        priority={true}
      />
    </div>
  );
};

export default DownloadSection;
