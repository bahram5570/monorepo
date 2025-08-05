import { useEffect, useState } from 'react';

import { ResetKeyHandlerTypes, UseInitialSlideProps } from './types';

const useInitialSlide = ({ selectedDate, selectedDateHandler, monthsList }: UseInitialSlideProps) => {
  const [resetKey, setResetKey] = useState(Math.random().toString());
  const [initialSlide, setInitialSlide] = useState<number | null>(null);

  const initialSlideHandler = (date: string) => {
    const initialMonthAndYear = date.slice(0, 7);
    const initialMonthAndYearIndex = monthsList.findIndex((item) => item[0] === initialMonthAndYear);

    const monthsListTotalIndex = monthsList.length - 1;

    const slide = monthsListTotalIndex - initialMonthAndYearIndex;
    setInitialSlide(slide);
  };

  useEffect(() => {
    initialSlideHandler(selectedDate);
  }, []);

  const resetKeyHandler: ResetKeyHandlerTypes = (date) => {
    setResetKey(Math.random().toString());
    selectedDateHandler(date);
    initialSlideHandler(date);
  };

  return { resetKey, initialSlide, resetKeyHandler };
};

export default useInitialSlide;
