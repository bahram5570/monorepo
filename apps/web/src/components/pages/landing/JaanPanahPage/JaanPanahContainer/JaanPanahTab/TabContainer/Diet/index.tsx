'use client';

import { COLORS_LIST } from '@theme/colors';

import { useEffect, useState } from 'react';

import StarIcon from '@assets/icons/Stars.svg';
import CtaBanner from '@components/CtaBanner';
import { CraBannerItemTypes } from '@components/CtaBanner/types';
import { CALENDAR_OF_PREGNANCY_BANNER_NAME } from '@components/pages/calendarOfPregnancy/CalendarOfPregnancyContainer/constants';
import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import { ctaBannerService } from '@services/ctaBannerServices';

import { DIET_LIST } from './constant';

const Diet = () => {
  const [banner, setBanner] = useState<CraBannerItemTypes | undefined>();

  const getCtaBanner = async () => {
    const { ctaData } = await ctaBannerService('janpanah1');
    setBanner(ctaData);
  };

  useEffect(() => {
    getCtaBanner();
  }, []);

  return (
    <div className="p-4 flex flex-col gap-2">
      <CustomTypography fontSize="Lable_Large" color="Neutral_OnBackground" className="p-4  text-center">
        غذای جسم و روح؛ هر دو مهمه
      </CustomTypography>

      <div style={{ backgroundColor: '#ECFBE3' }} className="p-4 rounded-2xl flex items-start gap-1">
        <div className="flex justify-start items-center gap-2">
          <StarIcon />
          {/* <CustomTypography fontSize="Lable_Medium">پیام همدلانه</CustomTypography> */}
        </div>

        <CustomTypography fontSize="Body_Medium" className="text-justify ">
          این روزا که شرایط طبیعی نیست، احتمالا توجه به غذا و خواب کافی یکی از آخرین چیزایی هست که بهش فکر می‌کنی. اما
          اینو بدون که توجه به رژیم غذایی در کاهش استرس و افزایش آرامش موثره.
        </CustomTypography>
      </div>

      <div className=" rounded-2xl py-6 px-4 bg-gradient-to-b from-[#E3FBF4] to-[#F7F7F7]">
        <div className="flex flex-col gap-1">
          <CustomTypography fontSize="Title_Medium" style={{ color: '#076747' }}>
            چرا تغذیه و روتین‌های رفتاری مهمن؟
          </CustomTypography>
          <CustomTypography fontSize="Body_Medium" color="Surface_InverseSurface">
            توی شرایط بحرانی، ذهن اولین جاییه که خسته می‌شه… ولی یک بدن ضعیف میتونه این خستگی رو تشدید کنه.
          </CustomTypography>
          <CustomTypography fontSize="Lable_MediumProminet" color={'Neutral_OnBackground'}>
            چه کارهایی ساده و مفید هستن؟
          </CustomTypography>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-[0.75rem] md:gap-3 my-3">
          {DIET_LIST.map((item, index) => {
            return (
              <div className="flex flex-col md:justify-center items-center gap-3" key={index}>
                <CustomImage
                  height={0}
                  width={200}
                  sizes="200px"
                  alt="diet1"
                  src={item.image}
                  className="pt-4 md:p-0 w-[120px] md:w-[200px] lg:max-w-[320px] xl:max-w-[300px] my-3"
                />
                <CustomTypography fontSize="Body_Small" color="Surface_InverseSurface" className="text-center">
                  {item.description}
                </CustomTypography>
              </div>
            );
          })}
        </div>
      </div>

      {banner && <CtaBanner {...banner} />}
    </div>
  );
};

export default Diet;
