import CtaBanner from '@components/CtaBanner';
import CustomTypography from '@components/ui/CustomTypography';
import { ctaBannerService } from '@services/ctaBannerServices';

import CalendarOfPregnancyDrProfile from '../CalendarOfPregnancyDrProfile';
import CalendarOfPregnancySeperator from '../CalendarOfPregnancySeperator';
import PregnancyAgeCalculator from '../PregnancyAgeCalculator';
import { CALENDAR_OF_PREGNANCY_BANNER_NAME_3 } from '../constants';

const CalendarOfPregnancyHeading = async () => {
  const { ctaData } = await ctaBannerService(CALENDAR_OF_PREGNANCY_BANNER_NAME_3);
  return (
    <>
      <CustomTypography fontSize="Headline_Medium" tagType="h1" className="pb-2 text-center">
        محاسبه سن بارداری و تقویم بارداری آنلاین
      </CustomTypography>
      <PregnancyAgeCalculator />

      <CalendarOfPregnancySeperator />

      <CalendarOfPregnancyDrProfile />
      <CustomTypography fontSize="Headline_Medium" tagType="h2" className="pb-2 text-center">
        محاسبه هفته بارداری آنلاین با اپلیکیشن ایمپو
      </CustomTypography>
      <CustomTypography className="!text-center pt-2 pb-6">
        اپلیکیشن ایمپو همواره به دنبال راه‌هایی است که مسیر بارداری را برای مادران آسان‌تر و زیباتر کند. ایمپو در طول
        این سفر همراه مادر و پدر است و مانند یک مسیریاب حرفه‌ای تاریخ و زمان زایمان را محاسبه کرده و اطلاعات لازم برای
        هر دوره از این سفر را در اختیار آن‌ها قرار می‌دهد. ایمپو در تلاش است شما با کمترین نگرانی و دردسر این سفر منحصر
        به فرد را سپری کنید و از آن لذت ببرید. فقط کافیست اطلاعات آخرین قاعدگی خود را وارد کنید تا هفته بارداری شما را
        به طور دقیق حساب کند. ایمپو یک برنامه محاسبه سن بارداری ساده نیست و علاوه بر آن، اندازه و شکل جنین را در هر هفته
        به شما نشان می‌دهد و آزمایشات ضروری را به شما یادآوری می‌کند.
      </CustomTypography>

      {ctaData && <CtaBanner {...ctaData} />}
    </>
  );
};

export default CalendarOfPregnancyHeading;
