import LinkIcon from '@assets/icons/calendarSignLink.svg';

import useCurrentDateInSigns from '@hooks/useCurrentDateInSigns';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import { CalendarInitialSelectedDateType } from '../../../__hooks__/useCalendar/types';
import { CalendarWidgetEnums } from '../../../__hooks__/useCalendarGetData/CalendarEnums';
import NoSigns from './NoSigns';
import SignsList from './SignsList';
import { SelectedDaySignsContainerProps } from './types';

const SelectedDaySignsContainer = ({ selectedDateInfo }: SelectedDaySignsContainerProps) => {
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { changeCurrentDate } = useCurrentDateInSigns();

  const signs = selectedDateInfo.items.find((item) => item.type === CalendarWidgetEnums.Sign)?.data.signs;

  const linkTo = () => {
    const date: CalendarInitialSelectedDateType = selectedDateInfo.gregorianDate;
    changeCurrentDate(date);

    pageNavigationHandler({
      showProgressBar: true,
      linkTo: `/protected/signs`,
      id: 'SelectedDaySignsContainer',
    });
  };

  return (
    <div className="relative w-full flex items-center justify-end">
      {signs && signs.length > 0 ? <SignsList signs={signs} /> : <NoSigns />}

      <div className="relative cursor-pointer" onClick={linkTo}>
        <LinkIcon className="w-14 h-auto" />
      </div>
    </div>
  );
};

export default SelectedDaySignsContainer;
