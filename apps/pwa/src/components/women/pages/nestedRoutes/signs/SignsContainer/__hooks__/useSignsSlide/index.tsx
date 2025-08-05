import { useEffect, useState } from 'react';

import useCurrentDateInSigns from '@hooks/useCurrentDateInSigns';

import { SlideHandlerTypes, UseSignsSlideProps } from './types';

const useSignsSlide = ({ infoList }: UseSignsSlideProps) => {
  const [slide, setSlide] = useState(0);
  const { changeCurrentDate, calendarInitailSelectedDate } = useCurrentDateInSigns();

  const initialSelectedDateHandler = (i: number) => {
    const date = infoList[i].gregorianDate;
    changeCurrentDate(date);
  };

  useEffect(() => {
    const selectedDate = calendarInitailSelectedDate;
    if (selectedDate) {
      const initialSlideIndex = infoList.findIndex((item) => item.gregorianDate === selectedDate);
      if (initialSlideIndex > -1) {
        initialSelectedDateHandler(initialSlideIndex);
        setSlide(initialSlideIndex);
      } else {
        initialSelectedDateHandler(0);
        setSlide(infoList.length - 1);
      }
    } else {
      setSlide(infoList.length - 1);
    }
  }, []);

  const slideHandler: SlideHandlerTypes = (v) => {
    initialSelectedDateHandler(v);
    setSlide(v);
  };

  return { slide, slideHandler };
};

export default useSignsSlide;
