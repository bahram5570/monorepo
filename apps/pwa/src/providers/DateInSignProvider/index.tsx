'use client';

import { createContext } from 'react';

import useHasSignsChanged from './__hooks__/useHasSignsChanged';
import useInitailSelectedDate from './__hooks__/useInitailSelectedDate';
import { DateInSignContextTypes } from './type';

export const DateInSignContext = createContext<DateInSignContextTypes>({
  calendarInitailSelectedDate: '',
  hasSignsChanged: false,
  changeCurrentDate: () => {},
  changeSignsStaus: () => {},
});

const CurrentDateInSignProvider = ({ children }: { children: React.ReactNode }) => {
  const { calendarInitailSelectedDate, changeCurrentDate } = useInitailSelectedDate();
  const { changeSignsStaus, hasSignsChanged } = useHasSignsChanged();

  return (
    <DateInSignContext.Provider
      value={{ calendarInitailSelectedDate, changeCurrentDate, hasSignsChanged, changeSignsStaus }}
    >
      <>{children}</>
    </DateInSignContext.Provider>
  );
};

export default CurrentDateInSignProvider;
