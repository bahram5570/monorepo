'use client';

import { COLORS_LIST } from '@theme/colors';

import StarIcon from '@assets/icons/Stars.svg';
import CustomButton from '@components/ui/CustomButton';
import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import useDownloadPdf from './__hooks__/useDownloadPdf';

const CriticalSituation = () => {
  const { downloadFileFromUrl } = useDownloadPdf();
  return (
    <div className="p-4 flex flex-col gap-2">
      <CustomTypography fontSize="Lable_Large" color="Neutral_OnBackground" className="p-4  text-center">
        آمادگی برای شرایط بحرانی
      </CustomTypography>
      <div style={{ backgroundColor: '#ECFBE3' }} className="p-4 rounded-2xl flex items-start gap-1">
        <div className="flex justify-start items-center gap-2">
          <StarIcon />
          {/* <CustomTypography fontSize="Lable_Medium">پیام همدلانه</CustomTypography> */}
        </div>

        <CustomTypography fontSize="Body_Medium" className="text-justify ">
          «واقعیت اینه که ما نمی‌تونیم جلوی همه‌چیز رو بگیریم… نمی‌تونیم آینده رو پیش‌بینی کنیم، یا همه اتفاقات رو کنترل
          کنیم. ولی می‌تونیم برای بعضی چیزها از قبل فکر کنیم، تا تو لحظه بحران، یه کم خیالمون راحت‌تر باشه. آماده‌بودن
          یعنی ساختن یه نقطه اتکا، وقتی همه‌چی داره تکون می‌خوره.»
        </CustomTypography>
      </div>

      <div className=" rounded-2xl pt-4 pr-4 md:h-[216px] bg-gradient-to-b from-[#E3FBF4] to-[#F7F7F7]">
        <div className="flex flex-row gap-1 md:justify-between">
          <div className="flex flex-col gap-4 md:justify-around">
            <CustomTypography fontSize="Lable_Medium">
              این فایل شامل نکات‌ ایمنی و البته آمادگی برای شرایط بحرانیه، بهتره دانلودش کنی و همراهت داشته‌ باشی.
            </CustomTypography>

            <CustomButton
              varient="fill"
              className="rounded-full w-full md:w-[350px] h-12 lg:h-[50px] mx-auto flex items-center justify-center gap-2 relative z-10"
              onClick={downloadFileFromUrl}
            >
              <CustomTypography
                fontSize="Body_Medium"
                color="Surface_InverseSurface"
                numbersMode="english"
                style={{ background: COLORS_LIST.Primary_Primary, color: COLORS_LIST.White }}
                className="px-6 h-10   rounded-full text-center flex justify-center items-center"
              >
                {/* دریافت فایل pdf */}
                برای روز مبادا
              </CustomTypography>
            </CustomButton>
          </div>

          <CustomImage
            height={0}
            width={300}
            sizes="150px"
            alt="criticalSituation"
            src="/assets/images/jaanPanah/JaanPanahTab/criticalSituation/1.webp"
            className="md:max-w-[200px] md:max-h-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CriticalSituation;
