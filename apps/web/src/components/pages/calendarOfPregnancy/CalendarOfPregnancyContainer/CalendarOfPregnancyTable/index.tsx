import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import CalendarOfPregnancySeperator from '../CalendarOfPregnancySeperator';

const CalendarOfPregnancyTable = () => {
  return (
    <>
      <CustomTypography fontSize="Headline_Medium" tagType="h2" className="pb-2 text-center">
        جدول ماه‌های بارداری
      </CustomTypography>

      <CustomTypography className="!text-center pt-2 pb-6">
        جدول زیر به شما کمک می‌کند بدانید، هر هفته بارداری معادل کدام ماه است:
      </CustomTypography>

      <CustomImage src="/assets/images/tabelOfPregnancy.webp" alt="" width={600} height={0} />

      <CalendarOfPregnancySeperator />
    </>
  );
};

export default CalendarOfPregnancyTable;
