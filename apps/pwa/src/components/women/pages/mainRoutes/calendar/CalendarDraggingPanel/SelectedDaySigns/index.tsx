import { currentDate } from '@utils/dates';

import WidgetCardContainer from '@components/women/Widgets/WidgetCardContainer';
import moment from 'moment-jalaali';

import SelectedDaySignsContainer from './SelectedDaySignsContainer';
import SelectedDaySignsNotAllowed from './SelectedDaySignsNotAllowed';
import { SelectedDaySignsProps } from './types';

const { gDate } = currentDate();

const SelectedDaySigns = ({ selectedDateInfo }: SelectedDaySignsProps) => {
  const todayMoment = moment(gDate, 'YYYY-MM-DD');
  const selectedDayMoment = moment(selectedDateInfo.gregorianDate, 'YYYY-MM-DD');
  const isAfterToday = selectedDayMoment.isAfter(todayMoment);

  return (
    <>
      <WidgetCardContainer title="نشانه های امروز">
        {isAfterToday && <SelectedDaySignsNotAllowed />}
        {!isAfterToday && <SelectedDaySignsContainer selectedDateInfo={selectedDateInfo} />}
      </WidgetCardContainer>
    </>
  );
};

export default SelectedDaySigns;
