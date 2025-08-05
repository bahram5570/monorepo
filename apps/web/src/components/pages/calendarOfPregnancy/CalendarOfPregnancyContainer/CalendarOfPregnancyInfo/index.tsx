import CustomTypography from '@components/ui/CustomTypography';

import CalendarOfPregnancySeperator from '../CalendarOfPregnancySeperator';

const CalendarOfPregnancyInfo = () => {
  return (
    <>
      <CustomTypography fontSize="Body_Large" className="text-justify">
        تقویم بارداری آنلاین ایمپو، در هر هفته بارداری، اطلاعات تخصصی زیر را در اختیار شما قرار می‌دهد:
      </CustomTypography>

      <ul className="flex flex-col gap-1 pr-6 pt-3 pb-8">
        <CustomTypography tagType="li" className="list-disc">
          تغییراتی بدن مادر و جنین
        </CustomTypography>
        <CustomTypography tagType="li" className="list-disc">
          آزمایشات ضروری
        </CustomTypography>
        <CustomTypography tagType="li" className="list-disc">
          مراقبت‌های تخصصی
        </CustomTypography>
        <CustomTypography tagType="li" className="list-disc">
          رژیم غذایی مناسب
        </CustomTypography>
        <CustomTypography tagType="li" className="list-disc">
          بایدها و نبایدهای بارداری
        </CustomTypography>
      </ul>

      <CustomTypography fontSize="Body_Small" color="Surface_Outline" className="text-center">
        برای دسترسی به این اطلاعات تخصصی تنها کافیست بر روی هفته یا ماه مورد نظر خود در بخش زیر کلیک کنید.
      </CustomTypography>

      <CalendarOfPregnancySeperator />
    </>
  );
};

export default CalendarOfPregnancyInfo;
