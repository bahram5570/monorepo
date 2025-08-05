import Button from '@components/ui/Button';
import CalendarContainer from '@components/women/pages/mainRoutes/calendar/CalendarContainer';

import CalendarSkeleton from './CalendarSkeleton';
import useCalendar from './__hooks__/useCalendar';
import { CalendarModalPropsType } from './type';

const CalendarModal = ({ dateTime, onChangeHandler, onCloseModalHandler }: CalendarModalPropsType) => {
  const { isLoading, calendarData, selectedDate, selectedDateHandler } = useCalendar({ dateTime });

  return (
    <div>
      {isLoading && <CalendarSkeleton />}
      {!isLoading && calendarData && (
        <>
          <CalendarContainer
            selectedDateHandler={selectedDateHandler}
            calendarData={calendarData}
            selectedDate={selectedDate}
            hasResetBtn={false}
          />
          <div className="flex px-3 gap-2">
            <Button
              size="medium"
              variant="fill"
              color="primary"
              className="mt-auto py-3 px-2"
              onClick={() => {
                onChangeHandler(selectedDate, 'time');
                onCloseModalHandler();
              }}
              isLoading={isLoading}
            >
              تایید
            </Button>
            <Button
              size="medium"
              variant="fill"
              color="surface"
              className="mt-auto py-3 px-2"
              onClick={onCloseModalHandler}
              isLoading={isLoading}
            >
              انصراف
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CalendarModal;
