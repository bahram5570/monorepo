'use client';

import useBreakPoint from '@hooks/useBreakPoint';
import useOperatingSystem from '@hooks/useOperatingSystem';
import { COLORS_LIST } from '@theme/colors';

import { JaanPanahHaveChildrenEnum } from '@components/pages/landing/JaanPanahPage/enum';
import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { typographyMaker } from '@components/ui/CustomTypography/__utils__';

import { BOOK_PART1, BOOK_PART2 } from '../Movie/constants';
import useCopy from '../__hooks__/useCopy';
import { BookPropsType } from './type';

const Book = ({ children }: BookPropsType) => {
  const { copylink } = useCopy();
  const { breakPoint } = useBreakPoint();
  const { operatingSystem } = useOperatingSystem();

  const typographyDetails = typographyMaker({
    fontSize: 'Lable_LargeProminet',
    operatingSystem,
    isWeb: !breakPoint.laptop,
  });

  return (
    <div className=" rounded-2xl py-6 px-4 bg-gradient-to-b from-[#E3FBF4] to-[#F7F7F7]">
      <div className="flex flex-col gap-1">
        <CustomTypography fontSize="Title_Medium" style={{ color: '#076747' }}>
          یار مهربان؛ کتاب
        </CustomTypography>

        <CustomTypography fontSize="Lable_MediumProminet" color={'Neutral_OnBackground'}>
          کتاب چطور می‌تونه بهمون کمک کنه؟
        </CustomTypography>
        <CustomTypography fontSize="Body_Medium" color="Surface_InverseSurface">
          وقتی ذهن درگیر اضطراب و تکرار نگرانی‌هاست، خوندن چند صفحه کتاب می‌تونه بهت کمک کنه.
        </CustomTypography>
      </div>

      <div className="my-2">
        <CustomTypography fontSize="Lable_MediumProminet" color={'Neutral_OnBackground'}>
          تاثیر مطالعه روی ذهن:
        </CustomTypography>
        <CustomImage
          height={0}
          width={520}
          sizes="520px"
          alt="distract2"
          src="/assets/images/jaanPanah/JaanPanahTab/distract/2.webp"
          className="pt-4 md:p-0 w-full md:max-w-[280px] lg:min-w-[220px] lg:max-w-[320px] xl:max-w-[400px] my-3"
          hasPreviewImage
          previewBackground={COLORS_LIST.White}
        />
      </div>
      <div className="w-full my-3" style={{ border: `1px solid #8BAD7820` }}></div>
      <div className="flex flex-col gap-1">
        <CustomTypography fontSize="Lable_MediumProminet" color={'Neutral_OnBackground'}>
          چه کتاب‌هایی برای این روزها مناسب‌ترن؟
        </CustomTypography>

        <ul className="px-5 w-full grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {BOOK_PART1.map((item, index) => {
            return (
              <li
                className=" list-disc flex flex-col justify-center items-center gap-2  last:col-span-2 last:justify-self-center md:last:col-span-1 md:last:justify-self-auto"
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

      {children === JaanPanahHaveChildrenEnum.Yes && (
        <>
          <div className="w-full my-3" style={{ border: `1px solid #8BAD7820` }}></div>
          <div className="flex flex-col gap-1">
            <CustomTypography fontSize="Lable_MediumProminet" color={'Neutral_OnBackground'}>
              ین کتاب‌ها برای پرت کردن حواس فرزندت از جنگ، مناسبن:
            </CustomTypography>
            <ul className="px-5 w-full grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
              {BOOK_PART2.map((item, index) => {
                return (
                  <li className=" list-disc flex flex-col justify-center items-center gap-2" key={index}>
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
        </>
      )}

      <div className="w-full my-3" style={{ border: `1px solid #8BAD7820` }}></div>
      <div className="flex flex-col gap-1">
        <CustomTypography fontSize="Lable_MediumProminet" color={'Neutral_OnBackground'}>
          از کجا می‌تونی کتاب خوب پیدا کنی؟
        </CustomTypography>

        {/* <CustomLink
          target="_blank"
          href="https://fidibo.com/"
          // className="md:mb-5"
          color="Success_Success"
          // className="rounded-full w-full h-12 lg:h-[60px] mx-auto flex items-center justify-center gap-2 relative z-10"
        >
          فیدیبو
        </CustomLink> */}
        <CustomTypography fontSize="Body_Medium" color="Surface_InverseSurface">
          با همراهی ایمپو، لیست کتاب‌های بالا رو می‌تونی به صورت رایگان از{' '}
          {/* <CustomLink
            target="_blank"
            href="https://fidibo.com/"
            className=""
            color="Surface_InverseSurface"
            style={{ textDecorationLine: 'underline' }}
            // className="rounded-full w-full h-12 lg:h-[60px] mx-auto flex items-center justify-center gap-2 relative z-10"
          > */}
          فیدیبو
          {/* </CustomLink> */} به‌صورت صوتی و متنی دریافت کنی.
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
            Janpanah
          </u>
        </div>
      </div>
    </div>
  );
};

export default Book;
