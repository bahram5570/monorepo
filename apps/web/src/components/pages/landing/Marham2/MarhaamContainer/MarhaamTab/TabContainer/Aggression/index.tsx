'use client';

import { COLORS_LIST } from '@theme/colors';

import { useEffect, useState } from 'react';

import StarIcon from '@assets/icons/Stars.svg';
import CtaBanner from '@components/CtaBanner';
import { CraBannerItemTypes } from '@components/CtaBanner/types';
import CustomTypography from '@components/ui/CustomTypography';
import { ctaBannerService } from '@services/ctaBannerServices';

import Movie from './Movie';

const Aggression = () => {
  const [banner, setBanner] = useState<CraBannerItemTypes | undefined>();

  const getCtaBanner = async () => {
    const { ctaData } = await ctaBannerService('janpanah3');
    setBanner(ctaData);
  };

  useEffect(() => {
    getCtaBanner();
  }, []);

  return (
    <>
      <div
        className="p-4 flex flex-col gap-2  rounded-2xl"
        style={{ border: `1px solid ${COLORS_LIST.Surface_OutlineVariant}` }}
      >
        <CustomTypography fontSize="Lable_Large" color="Neutral_OnBackground" className="p-4  text-center">
          اگه زود از کوره در می‌ری، اینجا برای توئه
        </CustomTypography>
        <div style={{ backgroundColor: '#ECFBE3' }} className="p-4 rounded-2xl flex items-start gap-1">
          <div className="flex justify-start items-center gap-2">
            <StarIcon />
            {/* <CustomTypography fontSize="Lable_Medium">پیام همدلانه</CustomTypography> */}
          </div>

          <CustomTypography fontSize="Body_Medium" className="text-justify ">
            افزایش پرخاشگری بعد از تجربه‌ جنگ یا بحران‌های شدید، واکنشی طبیعی و رایج در بسیاری از افراده. این واکنش،
            بخشی از تلاش روان برای بقا، تخلیه‌ فشارهای درونی، یا حتی بازسازی حس کنترل و امنیت از‌ دست‌رفته‌ست.
          </CustomTypography>
        </div>

        <Movie />
      </div>
      {banner && <CtaBanner {...banner} />}
    </>
  );
};

export default Aggression;
