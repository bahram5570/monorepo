import { useMemo } from 'react';

import { toGregorianData } from '@utils/dates';

import { CalendarTypeEnum } from '@constants/date.constants';
import useApi from '@hooks/useApi';
import useCulture from '@hooks/useCulture';
import useCustomToast from '@hooks/useCustomToast';
import { useRouter } from 'next/navigation';

import { SuccessHandlerTypes } from './types';

const useSubmitFinishPeriod = (endTime: string) => {
  const router = useRouter();
  const { culture } = useCulture();
  const { onToast } = useCustomToast();

  const updatedEndTime = useMemo(() => {
    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        return toGregorianData(endTime);
      case CalendarTypeEnum.Gregorian:
        return endTime;
      default:
        return toGregorianData(endTime);
    }
  }, [culture.calendarType, endTime]);

  const successHandler: SuccessHandlerTypes = (v) => {
    if (v.valid) {
      router.back();
    } else {
      onToast({ message: v.message });
    }
  };

  const { callApi, isLoading } = useApi({
    method: 'GET',
    fetchOnMount: false,
    queryKey: ['endTime'],
    onSuccess: successHandler,
    api: `info/edit/endperiod/${updatedEndTime}`,
  });

  return { callApi, isLoading };
};

export default useSubmitFinishPeriod;
