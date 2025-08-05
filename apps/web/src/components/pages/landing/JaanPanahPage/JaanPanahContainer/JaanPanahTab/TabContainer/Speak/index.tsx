'use client';

import { COLORS_LIST } from '@theme/colors';

import { useEffect, useState } from 'react';

import StarIcon from '@assets/icons/Stars.svg';
import CtaBanner from '@components/CtaBanner';
import { CraBannerItemTypes } from '@components/CtaBanner/types';
import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import { ctaBannerService } from '@services/ctaBannerServices';

const Speak = () => {
  const [banner, setBanner] = useState<CraBannerItemTypes | undefined>();

  const getCtaBanner = async () => {
    const { ctaData } = await ctaBannerService('janpanah2');
    setBanner(ctaData);
  };

  useEffect(() => {
    getCtaBanner();
  }, []);
  return (
    <div className="p-4 flex flex-col gap-2">
      <CustomTypography fontSize="Lable_Large" color="Neutral_OnBackground" className="p-4  text-center">
        بگو ای یار بگو
      </CustomTypography>
      <div style={{ backgroundColor: '#ECFBE3' }} className="p-4 rounded-2xl flex items-start gap-1">
        <div className="flex justify-start items-center gap-2">
          <StarIcon />
          {/* <CustomTypography fontSize="Lable_Medium">پیام همدلانه</CustomTypography> */}
        </div>

        <CustomTypography fontSize="Body_Medium" className="text-justify ">
          حرف‌ها، نگرانی‌ها و احساسات وقتی گفته نشه، تو دلت سنگین و سنگین‌تر میشن. گاهی باید حرف زد تا ذهن و بدن آروم
          بشن.
        </CustomTypography>
      </div>

      <div className=" rounded-2xl py-6 px-4 bg-gradient-to-b from-[#E3FBF4] to-[#F7F7F7]">
        <div className="flex flex-col gap-1">
          <CustomTypography fontSize="Title_Medium" style={{ color: '#076747' }}>
            تاثیر حرف زدن روی ذهن:
          </CustomTypography>
          <CustomImage
            height={0}
            width={520}
            sizes="520px"
            alt="speak"
            src="/assets/images/jaanPanah/JaanPanahTab/speak/1.webp"
            className="pt-4 md:p-0 w-full md:max-w-[280px] lg:min-w-[220px] lg:max-w-[320px] xl:max-w-[400px] my-3"
            hasPreviewImage
            previewBackground={COLORS_LIST.White}
          />
        </div>
      </div>

      {banner && <CtaBanner {...banner} />}
    </div>
  );
};

export default Speak;
