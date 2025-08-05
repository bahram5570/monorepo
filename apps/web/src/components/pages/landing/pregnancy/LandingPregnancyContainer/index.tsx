import { COLORS_LIST } from '@theme/colors';

import BlueTickIcon from '@assets/icons/blueTick2.svg';
import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { TEST_ONLINE_DOCTOR_INFO } from './constants';

const LandingPregnancyContainer = () => {
  return (
    <div
      className="
                  w-full 
                  rounded-2xl 
                  px-4 
                  sm:px-6 
                  py-5 
                  bg-[url(/assets/images/coverHollow.png)] 
                  bg-cover 
                  bg-center 
                  sm:rounded-2xl 
                  sm:shadow-[0_0_8px_#00000022]
                "
    >
      <CustomTypography fontSize="Headline_Medium" tagType="h1">
        تست بارداری آنلاین
      </CustomTypography>

      <div className="flex items-center gap-4 pt-4 pb-5">
        <div
          className="relative w-[60px] h-[60px] rounded-full border-2"
          style={{ borderColor: COLORS_LIST.Primary_Primary }}
        >
          <CustomImage
            fill={true}
            alt="doctor"
            quality={100}
            src={TEST_ONLINE_DOCTOR_INFO.image}
            className="object-cover rounded-full"
          />

          <BlueTickIcon className="absolute -bottom-[5px] -left-[8px] w-[26px]" />
        </div>

        <div>
          <CustomTypography fontSize="Body_Medium" color={'Surface_Outline'}>
            {TEST_ONLINE_DOCTOR_INFO.title}
          </CustomTypography>

          <CustomTypography fontSize="Lable_Large" className="pt-1">
            {TEST_ONLINE_DOCTOR_INFO.name}
          </CustomTypography>
        </div>
      </div>

      <CustomTypography fontSize="Body_Large" className="text-justify">
        پریودت عقب افتاده؟ نشونه‌های بارداری رو داری؟ این تست حاملگی آنلاین در چند مرحله ساده، احتمال بارداریت رو محاسبه
        می‌کنه.
      </CustomTypography>

      <CustomImage
        width={380}
        height={380}
        alt="onlineTestPregnancy"
        className="mx-auto pt-2 pb-10"
        src="/assets/images/onlineTestPregnancy.webp"
      />

      <CustomLink
        href="/landing/pregnancy/testOnline"
        className="w-full p-[10px] rounded-full flex justify-center"
        style={{ backgroundColor: COLORS_LIST.Primary_Primary }}
      >
        <CustomTypography fontSize="Lable_Medium" color={'White'}>
          شروع تست آنلاین
        </CustomTypography>
      </CustomLink>
    </div>
  );
};

export default LandingPregnancyContainer;
