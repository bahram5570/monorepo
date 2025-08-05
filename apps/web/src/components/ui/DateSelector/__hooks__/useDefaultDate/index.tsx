import { useEffect } from 'react';

import { currentDate } from '@utils/dates';
import { addZero } from '@utils/numbers';

import { UseDefaultDatePros } from './types';

const useDefaultDate = ({ defaultDate, onDefaultData }: UseDefaultDatePros) => {
  const datesHandler = () => {
    const { jDate } = currentDate();
    const date = (defaultDate || jDate).split('/');

    return {
      year: date[0].toString(),
      month: addZero(date[1]),
      day: addZero(date[2]),
    };
  };

  useEffect(() => {
    const result = datesHandler();
    onDefaultData(result);
  }, []);
};

export default useDefaultDate;
