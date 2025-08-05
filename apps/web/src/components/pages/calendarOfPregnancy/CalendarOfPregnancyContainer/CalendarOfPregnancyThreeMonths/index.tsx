import CalendarOfPregnancySeperator from '../CalendarOfPregnancySeperator';
import CalendarOfPregnancySlidesGenerator from '../CalendarOfPregnancySlidesGenerator';
import { CALENDAR_OF_PREGNANCY_THREE_MONTHS_LIST } from '../constants';

const CalendarOfPregnancyThreeMonths = () => {
  return (
    <section>
      <CalendarOfPregnancySlidesGenerator
        title="تقویم سه ماهه بارداری"
        description="تغییرات مادر و جنین در سه ماهه اول، دوم و سوم بارداری"
        list={CALENDAR_OF_PREGNANCY_THREE_MONTHS_LIST}
      />

      <CalendarOfPregnancySeperator />
    </section>
  );
};

export default CalendarOfPregnancyThreeMonths;
