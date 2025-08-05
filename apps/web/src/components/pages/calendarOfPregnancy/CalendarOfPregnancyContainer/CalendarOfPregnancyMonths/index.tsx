import CalendarOfPregnancySeperator from '../CalendarOfPregnancySeperator';
import CalendarOfPregnancySlidesGenerator from '../CalendarOfPregnancySlidesGenerator';
import { CALENDAR_OF_PREGNANCY_MONTHS_LIST } from '../constants';

const CalendarOfPregnancyMonths = () => {
  return (
    <section>
      <CalendarOfPregnancySlidesGenerator
        title="تقویم ماه‌های بارداری"
        description="رشد جنین در ماه‌های مختلف بارداری"
        list={CALENDAR_OF_PREGNANCY_MONTHS_LIST}
      />

      <CalendarOfPregnancySeperator />
    </section>
  );
};

export default CalendarOfPregnancyMonths;
