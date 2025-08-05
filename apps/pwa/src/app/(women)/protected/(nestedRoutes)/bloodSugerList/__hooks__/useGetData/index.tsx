import { useEffect, useState } from 'react';

import { CalendarWidgetEnums } from '@components/women/pages/mainRoutes/calendar/__hooks__/useCalendarGetData/CalendarEnums';
import {
  BloodSugerType,
  InfoCalendarResponseTypes,
  ItemsTypes,
} from '@components/women/pages/mainRoutes/calendar/__hooks__/useCalendarGetData/types';
import useApi from '@hooks/useApi';
import useCurrentDateInSigns from '@hooks/useCurrentDateInSigns';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

const useGetData = () => {
  const [initailBloodSugerList, setInitailBloodSugerList] = useState<BloodSugerType[]>([]);

  const { getQuery } = useCustomReactQuery();
  const queryData = getQuery<InfoCalendarResponseTypes>({ queryKey: ['signsInfoCalendar'] });
  const { calendarInitailSelectedDate } = useCurrentDateInSigns();

  const selectedDate = calendarInitailSelectedDate;

  const findCurrentList = (data: InfoCalendarResponseTypes) => {
    if (selectedDate) {
      if (data) {
        const itemList: ItemsTypes = data?.days[selectedDate]?.items;
        const typeFind = itemList.find((item) => item.type === CalendarWidgetEnums.Sign);

        if (typeFind) {
          setInitailBloodSugerList(typeFind?.data.bloodSugers);
        } else {
          setInitailBloodSugerList([]);
        }
      }
    }
  };

  const { isLoading, callApi } = useApi<InfoCalendarResponseTypes>({
    method: 'GET',
    api: 'info/calendar',
    onSuccess: (v) => findCurrentList(v),
    queryKey: ['signsInfoCalendar'],
    fetchOnMount: false,
  });

  useEffect(() => {
    if (queryData) {
      findCurrentList(queryData);
    } else {
      callApi();
    }
  }, [queryData]);

  return { initailBloodSugerList, isLoading };
};

export default useGetData;
