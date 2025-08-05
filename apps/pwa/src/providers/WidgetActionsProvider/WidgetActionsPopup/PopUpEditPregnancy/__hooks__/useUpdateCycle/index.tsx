import { toGregorianData } from '@utils/dates';

import { CalendarTypeEnum } from '@constants/date.constants';
import useUpdateCycleCard from '@hooks/__cycle__/useUpdateCycleCard';
import useApi from '@hooks/useApi';
import useCulture from '@hooks/useCulture';
import { useRouter } from 'next/navigation';

import { SubmitHandlerTypes } from './types';

const useUpdateCycle = () => {
  const router = useRouter();
  const { culture } = useCulture();
  const { cycleCardStatusHandler } = useUpdateCycleCard();

  const successHandler = () => {
    router.back();
    cycleCardStatusHandler('refetch');
  };

  const { callApi, isLoading } = useApi({
    method: 'PUT',
    onSuccess: successHandler,
    api: 'info/pregnancy/edit',
  });

  const submitHandler: SubmitHandlerTypes = (v) => {
    let pregnancyDate = v.pregnancyDate;

    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        pregnancyDate = toGregorianData(v.pregnancyDate);
        break;
      case CalendarTypeEnum.Gregorian:
        pregnancyDate = v.pregnancyDate;
        break;
      default:
        pregnancyDate = toGregorianData(v.pregnancyDate);
        break;
    }

    callApi({ pregnancyDate, isDelivery: v.isDelivery });
  };

  return { submitHandler, isLoading };
};

export default useUpdateCycle;
