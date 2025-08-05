import { useState } from 'react';

import useInitialLists from '../useInitialLists';
import useListsUpdate from '../useListsUpdate';
import { InitialListsTypes, ListTypes, UseListsMakerProps } from './types';

const useListsMaker = ({ values, startDate, endDate }: UseListsMakerProps) => {
  const [monthsList, setMonthsList] = useState<ListTypes | null>(null);
  const [yearsList, setYearsList] = useState<ListTypes | null>(null);
  const [daysList, setDaysList] = useState<ListTypes | null>(null);

  const [initialLists, setInitialLists] = useState<InitialListsTypes>(null);

  useInitialLists({
    onInitialLists: (v) => {
      setMonthsList(v.months);
      setYearsList(v.years);
      setDaysList(v.days);
      setInitialLists(v);
    },
    startDate,
    endDate,
  });

  useListsUpdate({
    values,
    endDate,
    startDate,
    initialLists,
    onListsUpdate: (v) => {
      setMonthsList(v.months);
      setDaysList(v.days);
    },
  });

  return { yearsList, monthsList, daysList };
};

export default useListsMaker;
