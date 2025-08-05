import { COLORS_LIST } from '@theme/colors';

import { JaanPanahHaveChildrenEnum } from '@components/pages/landing/JaanPanahPage/enum';
import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import { MOVIE_PART1, MOVIE_PART2, MOVIE_PART3 } from './constants';
import { MoviePropsType } from './type';

const Movie = ({ children }: MoviePropsType) => {
  return (
    <>
      <div style={{ background: COLORS_LIST.Surface_SurfaceVariant }} className=" rounded-2xl py-6 px-4">
        <div className="flex flex-col gap-1">
          <CustomTypography fontSize="Title_Medium" style={{ color: '#076747' }}>
            دنیای قصه‌های رنگی؛ فیلم
          </CustomTypography>

          <CustomTypography fontSize="Lable_MediumProminet" color={'Neutral_OnBackground'}>
            چرا تماشای فیلم می‌تونه کمک‌کننده باشه؟
          </CustomTypography>
          <CustomTypography fontSize="Body_Medium" color="Surface_InverseSurface">
            فیلم می تونه پناه موقتی باشه برای چند دقیقه نفس‌کشیدن.
          </CustomTypography>
        </div>

        <div className="my-2">
          <CustomTypography fontSize="Lable_MediumProminet" color={'Neutral_OnBackground'}>
            تاثیر تماشای فیلم روی ذهن:
          </CustomTypography>
          <CustomImage
            height={0}
            width={500}
            sizes="500px"
            alt="distract"
            src="/assets/images/jaanPanah/JaanPanahTab/distract/1.webp"
            className="pt-4 md:p-0 w-full md:max-w-[280px] lg:min-w-[220px] lg:max-w-[320px] xl:max-w-[400px] my-3"
            hasPreviewImage
            previewBackground={COLORS_LIST.White}
          />
        </div>
      </div>

      <div className=" rounded-2xl py-6 px-4 bg-gradient-to-b from-[#E3FBF4] to-[#F7F7F7]">
        <div className="flex flex-col gap-1">
          <CustomTypography fontSize="Title_Medium" style={{ color: '#076747' }}>
            چند تا فیلم‌ حال خوب‌کُن مناسب این روزها
          </CustomTypography>
        </div>

        <div className="flex flex-col gap-1 my-3">
          <CustomTypography fontSize="Lable_MediumProminet" color={'Neutral_OnBackground'}>
            فیلم‌هایی که حالت رو خوب و آروم می‌کنن:
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

        {children === JaanPanahHaveChildrenEnum.Yes && (
          <>
            <div className="w-full my-3" style={{ border: `1px solid #8BAD7820` }}></div>
            <div className="flex flex-col gap-1">
              <CustomTypography fontSize="Lable_MediumProminet" color={'Neutral_OnBackground'}>
                این فیلم‌ها رو می‌تونی کنار فرزندانت ببینی:
              </CustomTypography>
              <ul className="px-5 w-full grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                {MOVIE_PART2.map((item, index) => {
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
            انیمیشن‌؛ پناه بردن به دنیای رنگ و قصه
          </CustomTypography>
          <ul className="px-5 w-full grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {MOVIE_PART3.map((item, index) => {
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

        {children === JaanPanahHaveChildrenEnum.Yes && (
          <>
            <div className="w-full my-3" style={{ border: `1px solid #8BAD7820` }}></div>
            <div className="flex flex-col gap-1">
              <CustomTypography fontSize="Lable_MediumProminet" color={'Neutral_OnBackground'}>
                از کجا می‌تونی این انیمیشن‌ها رو ببینی؟
              </CustomTypography>

              <CustomTypography fontSize="Body_Medium" color="Surface_InverseSurface">
                فرزند عزیزت می‌تونه انیمیشن‌های بالا رو از «فیلم‌نت» و به‌صورت رایگان، تماشا کنه. چون فیلم‌نت در راستای
                آرامش فرزندان ایران، استفاده از بخش کودکان این اپ رو رایگان کرده.
              </CustomTypography>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Movie;
