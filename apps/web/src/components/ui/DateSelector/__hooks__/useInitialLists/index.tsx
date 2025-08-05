import { useEffect } from 'react';

import { addZero } from '@utils/numbers';

import { ListTypes } from '../useListsMaker/types';
import { MONTH_LIST } from './constants';
import { UseInitialListsProps } from './types';

const useInitialLists = ({ startDate, endDate, onInitialLists }: UseInitialListsProps) => {
  const listHandler = () => {
    const startYear = Number(startDate.split('/')[0]);
    const endYear = Number(endDate.split('/')[0]);

    const years: ListTypes = [];
    for (let i = startYear; i <= endYear; i++) {
      years.push({ title: i.toString(), value: i.toString() });
    }

    const months: ListTypes = MONTH_LIST;

    const days: ListTypes = [];
    for (let i = 1; i <= 31; i++) {
      days.push({ title: i.toString(), value: addZero(i.toString()) });
    }

    return { years, months, days };
  };

  useEffect(() => {
    const result = listHandler();
    onInitialLists(result);
  }, []);
};

export default useInitialLists;
