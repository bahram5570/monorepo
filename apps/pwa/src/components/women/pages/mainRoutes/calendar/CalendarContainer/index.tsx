import { Swiper, SwiperSlide } from 'swiper/react';

import CalendarHeading from './CalendarHeading';
import MonthGenerator from './MonthGenerator';
import ResetBtn from './ResetBtn';
import WeekTitles from './WeekTitles';
import useCalendarHeading from './__hooks__/useCalendarHeading';
import useInitialSlide from './__hooks__/useInitialSlide';
import { CalendarContainerProps, MonthsListTypes } from './types';

const CalendarContainer = ({
  selectedDateHandler,
  calendarData,
  selectedDate,
  hasResetBtn,
}: CalendarContainerProps) => {
  const monthsList: MonthsListTypes = Object.entries(calendarData);
  const reverseMonthsList = [...monthsList].reverse();

  const { resetKey, resetKeyHandler, initialSlide } = useInitialSlide({
    monthsList,
    selectedDate,
    selectedDateHandler,
  });

  const { swiperRef, navigateHandler, slideHandler, headingScript } = useCalendarHeading({
    resetKey,
    initialSlide,
    monthsList: reverseMonthsList,
  });

  return (
    <div className="relative">
      <CalendarHeading headingScript={headingScript} navigateHandler={navigateHandler} />

      <WeekTitles />

      <Swiper
        key={resetKey}
        initialSlide={initialSlide || 0}
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => slideHandler(s.activeIndex)}
      >
        {reverseMonthsList.map((item, index) => (
          <SwiperSlide key={index}>
            <MonthGenerator monthList={item[1]} selectedDate={selectedDate} selectedDateHandler={selectedDateHandler} />
          </SwiperSlide>
        ))}
      </Swiper>

      {hasResetBtn && <ResetBtn selectedDate={selectedDate} resetKeyHandler={resetKeyHandler} />}
    </div>
  );
};

export default CalendarContainer;
