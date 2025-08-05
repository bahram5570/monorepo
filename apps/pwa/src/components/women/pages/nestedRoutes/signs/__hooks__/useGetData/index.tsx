import { useState } from 'react';

import { signsDaysListMaker, signsItemsListMaker, sortedSignsListMaker } from './__utils__';

import { InfoCalendarResponseTypes } from '@components/women/pages/mainRoutes/calendar/__hooks__/useCalendarGetData/types';
import useApi from '@hooks/useApi';
import useCulture from '@hooks/useCulture';

import { InfoListTypes } from './types';

const useGetData = () => {
  const { culture } = useCulture();
  const [infoList, setInfoList] = useState<null | InfoListTypes>(null);

  const successHandler = (v: InfoCalendarResponseTypes) => {
    const signsItemsList = signsItemsListMaker(v.start, v.end, v.days, culture.calendarType);

    const daysList = signsDaysListMaker(signsItemsList, v.havePregnency, culture.calendarType);

    const sortedSignsLis = sortedSignsListMaker(daysList, culture.calendarType);

    setInfoList(sortedSignsLis);
  };

  const { isLoading } = useApi<InfoCalendarResponseTypes>({
    method: 'GET',
    api: 'info/calendar',
    onSuccess: successHandler,
    queryKey: ['signsInfoCalendar'],
  });

  return { isLoading, infoList };
};

export default useGetData;
