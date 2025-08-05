import { useMemo } from 'react';

import moment from 'moment-jalaali';

import { EmptyCellsProps } from './types';

const EmptyCells = ({ firstDayOfMonth, dateType }: EmptyCellsProps) => {
  const startingDayOfWeek = useMemo(() => {
    switch (dateType) {
      case 'jalaaliDate':
        return moment(firstDayOfMonth.jalaaliDate, 'jYYYY/jMM/jDD').day();
      case 'gregorianDate':
        return moment(firstDayOfMonth.gregorianDate, 'YYYY-MM-DD').day() - 1;
      default:
        return moment(firstDayOfMonth.jalaaliDate, 'jYYYY/jMM/jDD').day();
    }
  }, [dateType]);

  let emptyCellsList = [];
  for (let i = 0; i <= startingDayOfWeek; i++) {
    emptyCellsList.push('');
  }

  return (
    <>
      {emptyCellsList.map((_, index) => (
        <div key={index} />
      ))}
    </>
  );
};

export default EmptyCells;
