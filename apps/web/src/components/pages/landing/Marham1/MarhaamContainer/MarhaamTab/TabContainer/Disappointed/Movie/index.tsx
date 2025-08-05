import { COLORS_LIST } from '@theme/colors';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import { MOVIE_PART1 } from './constants';

const Movie = () => {
  return (
    <>
      <div className=" rounded-2xl py-6 px-4 bg-gradient-to-b from-[#ECFBE3] to-[#F7F7F7]">
        <div className="flex flex-col gap-1">
          <CustomTypography fontSize="Headline_Medium" style={{ color: '#076747' }}>
            تاثیر فیلم
          </CustomTypography>
          <CustomTypography fontSize="Body_Medium" color={'Surface_InverseSurface'}>
            دیدن فیلم‌های امیدبخش می‌تونه تأثیرات عمیق و مثبتی روی روان بذاره، مخصوصاً در شرایطی که فرد با ناامیدی یا
            خستگی روانی دست‌و‌پنجه نرم می‌کنه
          </CustomTypography>
        </div>

        <div className="flex flex-col gap-1 my-3">
          <CustomTypography fontSize="Lable_MediumProminet" color={'Neutral_OnBackground'}>
            در ادامه چند تا فیلم که انگیزه و امید رو به رگ‌هات تزریق می‌کنن، معرفی می‌کنیم.
          </CustomTypography>
          <ul className="px-5 w-full grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 justify-items-center">
            {MOVIE_PART1.map((item, index) => (
              <li
                className="list-disc flex flex-col justify-center items-center gap-2
                 "
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
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Movie;
