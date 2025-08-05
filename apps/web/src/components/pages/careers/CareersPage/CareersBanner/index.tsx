import { COLORS_LIST } from '@theme/colors';

import LampIcon from '@assets/icons/careers/on-lamp.svg';
import { CAREER_CONTAINER_MAX_WIDTH } from '@components/pages/careers/constants';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

const CareersBanner = () => {
  return (
    <CustomLink href="/careers/null/resume">
      <div style={{ maxWidth: CAREER_CONTAINER_MAX_WIDTH }} className="w-full px-4 mx-auto">
        <div className="w-full flex flex-col gap-5 md:gap-2 rounded-2xl p-4 md:p-6 bg-gradient-to-br from-[#FFEAEE] to-[#EBFAFF]">
          <div className="w-full flex items-start gap-2">
            <LampIcon className="w-8 min-w-8 h-auto" />

            <CustomTypography fontSize="Body_Large">
              اگر زمینه کاریت بین فرصت‌های شغلی نبود، معنیش این نیست که هیچ‌وقت به تخصصت نیاز نداریم، از طریق لینک زیر
              رزومه‌ات رو برامون بفرست.
            </CustomTypography>
          </div>

          <CustomTypography
            color={'White'}
            fontSize="Lable_Large"
            style={{ backgroundColor: COLORS_LIST.Primary_Primary }}
            className="rounded-full py-[10px] px-[36px] mr-auto text-center w-full md:w-fit"
          >
            ارسال رزومه
          </CustomTypography>
        </div>
      </div>
    </CustomLink>
  );
};

export default CareersBanner;
