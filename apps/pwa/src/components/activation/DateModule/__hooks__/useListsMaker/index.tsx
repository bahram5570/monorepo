import { useState } from 'react';

import useInitialLists from '../useInitialLists';
import useListsUpdate from '../useListsUpdate';
import useStartEndDate from '../useStartEndDate';
import { InitialListsTypes, ListTypes, UseListsMakerProps } from './types';

const useListsMaker = (props: UseListsMakerProps) => {
  const [monthsList, setMonthsList] = useState<ListTypes | null>(null);
  const [yearsList, setYearsList] = useState<ListTypes | null>(null);
  const [daysList, setDaysList] = useState<ListTypes | null>(null);

  const [initialLists, setInitialLists] = useState<InitialListsTypes>(null);
  const dateInfo = useStartEndDate();

  const startDate = props.startDate || dateInfo.startDate;
  const endDate = props.endDate || dateInfo.endDate;

  useInitialLists({
    onInitialLists: (v) => {
      setMonthsList(v.months);
      setYearsList(v.years);
      setDaysList(v.days);
      setInitialLists(v);
    },
    calendarType: dateInfo.calendarType,
    startDate,
    endDate,
  });

  useListsUpdate({
    onListsUpdate: (v) => {
      setMonthsList(v.months);
      setDaysList(v.days);
    },
    calendarType: dateInfo.calendarType,
    values: props.values,
    initialLists,
    startDate,
    endDate,
  });

  return { yearsList, monthsList, daysList };
};

export default useListsMaker;
