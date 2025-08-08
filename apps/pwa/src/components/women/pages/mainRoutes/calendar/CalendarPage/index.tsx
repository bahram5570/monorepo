'use client';

import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';

import CalendarContainer from '../CalendarContainer';
import CalendarDraggingPanel from '../CalendarDraggingPanel';
import CalendarGuides from '../CalendarGuides';
import CalendarSkeleton from '../CalendarSkeleton';
import SignsChangedToast from '../SignsChangedToast';
import useCalendar from '../__hooks__/useCalendar';

const CalendarPage = () => {
  const { colors } = useTheme();
  const { isLoading, calendarData, calendarGuideInfo, selectedDate, selectedDateHandler } = useCalendar();

  return (
    <WomenPageLayout leftElement1="Profile" paddingTop={0}>
      <SignsChangedToast />

      <div
        className="relative h-full min-h-[100dvh] max-h-[100dvh] overflow-hidden z-0"
        style={{
          paddingBottom: FOOTER_HEIGTH + 16,
          paddingTop: HEADER_HEIGHT + 16,
          backgroundColor: colors.White,
        }}
      >
        {isLoading && <CalendarSkeleton />}

        {!isLoading && calendarData && selectedDate && (
          <>
            <CalendarContainer
              selectedDateHandler={selectedDateHandler}
              calendarData={calendarData}
              selectedDate={selectedDate}
              hasResetBtn
            />

            <CalendarGuides calendarGuideInfo={calendarGuideInfo} />

            <CalendarDraggingPanel calendarData={calendarData} selectedDate={selectedDate} />
          </>
        )}
      </div>
    </WomenPageLayout>
  );
};

export default CalendarPage;
