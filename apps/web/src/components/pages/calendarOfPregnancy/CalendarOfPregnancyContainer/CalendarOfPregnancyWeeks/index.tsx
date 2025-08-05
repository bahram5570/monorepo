import CalendarOfPregnancySeperator from '../CalendarOfPregnancySeperator';
import CalendarOfPregnancySlidesGenerator from '../CalendarOfPregnancySlidesGenerator';
import { CALENDAR_OF_PREGNANCY_WEEKS_LIST } from '../constants';

const CalendarOfPregnancyWeeks = () => {
  return (
    <section>
      <CalendarOfPregnancySlidesGenerator
        title="تقویم هفته‌های بارداری"
        description="رشد جنین در هفته‌های مختلف بارداری"
        list={CALENDAR_OF_PREGNANCY_WEEKS_LIST}
      />

      <CalendarOfPregnancySeperator />
    </section>
  );
};

export default CalendarOfPregnancyWeeks;
