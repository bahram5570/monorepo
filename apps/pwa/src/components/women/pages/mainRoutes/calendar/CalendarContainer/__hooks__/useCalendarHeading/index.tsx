import { useEffect, useMemo, useRef, useState } from 'react';

import { gregorianFarsiMonthNames, jalaaliMonthNames } from '@utils/dates';

import { CalendarTypeEnum, DATE_SEPERATOR_REGEX } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import { Swiper as SwiperTypes } from 'swiper/types';

import { NavigateHandlerTypes, UseCalendarHeadingProps } from './types';

const useCalendarHeading = ({ monthsList, initialSlide, resetKey }: UseCalendarHeadingProps) => {
  const { culture } = useCulture();
  const [slideIndex, setSlideIndex] = useState(0);
  const swiperRef = useRef<SwiperTypes | null>(null);

  useEffect(() => {
    if (initialSlide !== null) {
      setSlideIndex(initialSlide);
    }
  }, [initialSlide, resetKey]);

  const navigateHandler: NavigateHandlerTypes = (nextSlide) => {
    if (nextSlide) {
      if (slideIndex < monthsList.length - 1) {
        setSlideIndex((state) => state + 1);
      }
    } else {
      if (slideIndex > 0) {
        setSlideIndex((state) => state - 1);
      }
    }
  };

  const slideHandler = (v: number) => {
    setSlideIndex(v);
  };

  useEffect(() => {
    swiperRef.current?.slideTo(slideIndex);
  }, [swiperRef.current, slideIndex]);

  const date = monthsList[slideIndex][0].split(DATE_SEPERATOR_REGEX);

  const currentMonthNames = useMemo(() => {
    switch (culture.calendarType) {
      case CalendarTypeEnum.Gregorian:
        return gregorianFarsiMonthNames;
      case CalendarTypeEnum.Jalali:
        return jalaaliMonthNames;
      default:
        return jalaaliMonthNames;
    }
  }, [culture.calendarType]);

  const headingScript = `${currentMonthNames(+date[1] - 1)} ${date[0]}`;

  return { swiperRef, navigateHandler, slideHandler, headingScript };
};

export default useCalendarHeading;
