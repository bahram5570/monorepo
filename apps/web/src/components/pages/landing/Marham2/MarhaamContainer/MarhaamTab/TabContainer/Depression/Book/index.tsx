'use client';

import useBreakPoint from '@hooks/useBreakPoint';
import useOperatingSystem from '@hooks/useOperatingSystem';
import { COLORS_LIST } from '@theme/colors';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { typographyMaker } from '@components/ui/CustomTypography/__utils__';

import { BOOK_PART1 } from '../../PsychologicalAnesthesia/Movie/constants';
import useCopy from './__hooks__/useCopy';

const Book = () => {
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
        <div className="flex flex-col gap-1">
          <CustomTypography fontSize="Title_Medium" style={{ color: '#076747' }}>
            تاثیر کتاب طنز
          </CustomTypography>
          <CustomTypography fontSize="Body_Medium" color="Surface_InverseSurface">
            مطالعه کتاب طنز، با ایجاد خنده و آرامش ذهنی، به کاهش افسردگی ناشی از جنگ و تقویت امید در دل کمک می‌کند.
          </CustomTypography>
          <CustomTypography fontSize="Lable_MediumProminet" color={'Neutral_OnBackground'}>
            این کتاب‌های صوتی، بهت کمک می‌کنن تا برای چند لحظه لبخند به لبت و چشم‌هات بیاد.
          </CustomTypography>
        </div>

        <ul className="px-5 w-full grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {BOOK_PART1.map((item, index) => {
            return (
              <li className=" list-disc flex flex-col justify-center items-center gap-2  " key={index}>
                <div className=" relative">
                  <CustomImage
                    height={0}
                    width={500}
                    sizes="500px"
                    alt="distract"
                    src={item.image}
                    className="pt-4 md:p-0 w-[96px] md:w-[150px] lg:max-w-[320px] xl:max-w-[300px] my-3 relative"
                    hasPreviewImage
                    previewBackground={COLORS_LIST.White}
                  />
                  {item.percent && (
                    <div
                      className="absolute bottom-0 left-0 w-8 h-8 flex justify-center items-center rounded-full"
                      style={{ background: COLORS_LIST.Primary_Primary, color: COLORS_LIST.White }}
                    >
                      <CustomTypography fontSize="Lable_Small" color="Primary_OnPrimary" className="text-center">
                        %{item.percent}
                      </CustomTypography>
                    </div>
                  )}
                </div>

                <CustomTypography fontSize="Lable_Small" color="Surface_InverseSurface" className="text-center">
                  {item.description}
                </CustomTypography>
                {item.englishName && (
                  <CustomTypography
                    fontSize="Lable_Small"
                    color="Surface_InverseSurface"
                    className="text-center"
                    numbersMode="english"
                  >
                    {item.englishName}
                  </CustomTypography>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="w-full my-3" style={{ border: `1px solid #8BAD7820` }}></div>
      <div className="flex flex-col gap-1">
        {/* <CustomTypography fontSize="Lable_MediumProminet" color={'Neutral_OnBackground'}>
          از کجا می‌تونی کتاب خوب پیدا کنی؟
        </CustomTypography> */}

        <CustomLink
          target="_blank"
          href="https://fidibo.com/page/marham?pageTitle=Marham&utm_source=impo&utm_medium=landing&utm_campaign=marham"
          // className="md:mb-5"
          color="Success_Success"
          style={{ textDecorationLine: 'underline' }}
          // className="rounded-full w-full h-12 lg:h-[60px] mx-auto flex items-center justify-center gap-2 relative z-10"
        >
          فیدیبو
        </CustomLink>
        <CustomTypography fontSize="Body_Medium" color="Surface_InverseSurface">
          می‌تونه مرهمی باشه برای این روزهات؛
        </CustomTypography>
        <CustomTypography fontSize="Body_Medium" color="Surface_InverseSurface">
          کتاب‌های صوتی بالا رو با کد تخفیف 70 تا 100% به مدت ۲ هفته می‌تونید استفاده کنین.
        </CustomTypography>

        {/* <div className="flex  gap-1 justify-start items-center">
          <CustomTypography fontSize="Lable_MediumProminet" color={'Neutral_OnBackground'}>
            کد تخفیف 70 درصدی:
          </CustomTypography>
          <u
            style={{ ...typographyDetails, color: COLORS_LIST.Primary_Primary }}
            className=" cursor-pointer"
            onClick={copylink}
          >
            Marham
          </u>
        </div> */}
      </div>
    </div>
  );
};

export default Book;
