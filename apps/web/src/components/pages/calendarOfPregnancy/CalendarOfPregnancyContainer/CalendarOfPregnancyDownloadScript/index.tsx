import CustomTypography from '@components/ui/CustomTypography';

import CalendarOfPregnancySeperator from '../CalendarOfPregnancySeperator';

const CalendarOfPregnancyDownloadScript = () => {
  return (
    <>
      <CustomTypography fontSize="Headline_Medium" tagType="h2" className="pb-2 text-center">
        دانلود تقویم بارداری هفته به هفته
      </CustomTypography>

      <CustomTypography fontSize="Body_Large" className="text-justify">
        فاز بارداری اپلیکیشن ایمپو، تغییرات مادر و رشد جنین را در هر هفته نمایش داده و سن بارداری را به‌صورت دقیق محاسبه
        می‌کند. ویژگی های زیر باعث شده که اپلیکیشن ایمپو با بیش از 1 میلیون کاربر به‌عنوان بهترین تقویم بارداری شناخته
        شود:
      </CustomTypography>

      <ul className="flex flex-col gap-1 pr-6 pt-3">
        <CustomTypography tagType="li" className="list-disc">
          توصیه‌های خود مراقبتی تخصصی
        </CustomTypography>
        <CustomTypography tagType="li" className="list-disc">
          محاسبه دقیق سن بارداری
        </CustomTypography>
        <CustomTypography tagType="li" className="list-disc">
          نمایش اندازه و رشد جنین در هر هفته
        </CustomTypography>
        <CustomTypography tagType="li" className="list-disc">
          دسترسی آنلاین به بهترین پزشکان متخصص زنان و زایمان
        </CustomTypography>
        <CustomTypography tagType="li" className="list-disc">
          دسترسی آنلاین به بهترین کارشناسان مامایی
        </CustomTypography>
        <CustomTypography tagType="li" className="list-disc">
          اطلاع‌رسانی وضعیت بارداری در ایمپو آقایان از طریق همدلی
        </CustomTypography>
        <CustomTypography tagType="li" className="list-disc">
          امکان تبادل نظر با دیگر کاربران در بخش اشتراک تجربه
        </CustomTypography>
      </ul>

      <CalendarOfPregnancySeperator />
    </>
  );
};

export default CalendarOfPregnancyDownloadScript;
