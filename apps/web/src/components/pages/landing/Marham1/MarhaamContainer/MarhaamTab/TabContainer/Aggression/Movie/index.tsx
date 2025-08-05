import useBreakPoint from '@hooks/useBreakPoint';
import useOperatingSystem from '@hooks/useOperatingSystem';
import { COLORS_LIST } from '@theme/colors';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { typographyMaker } from '@components/ui/CustomTypography/__utils__';

import useCopy from '../../Depression/Book/__hooks__/useCopy';
import { MOVIE_PART1 } from './constants';

const Movie = () => {
  const { copylink } = useCopy();
  const { breakPoint } = useBreakPoint();
  const { operatingSystem } = useOperatingSystem();
  const typographyDetails = typographyMaker({
    fontSize: 'Lable_LargeProminet',
    operatingSystem,
    isWeb: !breakPoint.laptop,
  });
  return (
    <div className=" rounded-2xl py-6 px-4 bg-gradient-to-b from-[#ECFBE3] to-[#F7F7F7]">
      <div className="flex flex-col gap-1">
        <CustomTypography fontSize="Headline_Medium" style={{ color: '#076747' }}>
          مدیتیشن
        </CustomTypography>
        <CustomTypography fontSize="Body_Medium" color={'Surface_InverseSurface'}>
          مدیتیشن کمک می‌کنه مغز از حالت دفاع و واکنش سریع بیرون بیاد، مدیتیشن یه مکث می‌ندازه بین احساس و عمل،‌وقتی کم
          کم داری پرخاشگر میشی.
        </CustomTypography>
      </div>

      <div className="flex flex-col gap-1 my-3">
        <CustomTypography fontSize="Lable_MediumProminet" color={'Neutral_OnBackground'}>
          این مدیتیشن‌ها کمکت می‌کنن زود از کوره در نری.
        </CustomTypography>
        <ul className="px-5 w-full grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 justify-items-center">
          {MOVIE_PART1.map((item, index) => (
            <li
              className="list-disc flex flex-col justify-center items-center gap-2
                  last:col-span-2 last:justify-self-center md:last:col-span-1 md:last:justify-self-auto"
              key={index}
            >
              <CustomImage
                height={0}
                width={500}
                sizes="500px"
                alt="distract"
                src={item.image}
                className="pt-4 md:p-0 w-[96px] md:w-[150px] lg:max-w-[320px] xl:max-w-[300px] my-3"
                hasPreviewImage
                previewBackground={COLORS_LIST.White}
              />
              <CustomTypography fontSize="Lable_Small" color="Surface_InverseSurface" className="text-center">
                {item.description}
              </CustomTypography>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full my-3" style={{ border: `1px solid #8BAD7820` }}></div>
      <div className="flex flex-col gap-1">
        <CustomLink
          target="_blank"
          href="https://aramia.me/"
          className="md:mb-5"
          color="Success_Success"
          style={{ textDecorationLine: 'underline' }}
        >
          آرامیا
        </CustomLink>

        <CustomTypography fontSize="Body_Medium" color="Surface_InverseSurface">
          می‌تونه مرهمی باشه برای این روزهات؛
        </CustomTypography>
        <CustomTypography fontSize="Body_Medium" color="Surface_InverseSurface">
          مدیتیشن‌های آرامیا رو با کد تخفیف ۱۰۰٪ می‌تونین استفاده کنین.
        </CustomTypography>

        <div className="flex  gap-1 justify-start items-center">
          <CustomTypography fontSize="Lable_MediumProminet" color={'Neutral_OnBackground'}>
            کد تخفیف 100 درصدی:
          </CustomTypography>
          <u
            style={{ ...typographyDetails, color: COLORS_LIST.Primary_Primary }}
            className=" cursor-pointer"
            onClick={copylink}
          >
            Marham
          </u>
        </div>
      </div>
    </div>
  );
};

export default Movie;
