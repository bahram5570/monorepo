import { toGregorianData } from '@utils/dates';

import { CalendarTypeEnum } from '@constants/date.constants';
import useUpdateCycleCard from '@hooks/__cycle__/useUpdateCycleCard';
import useApi from '@hooks/useApi';
import useCulture from '@hooks/useCulture';

import { UseSubmitLastPeriodTypes } from './types';

const useSubmitLastPeriod = (editPageHandler: UseSubmitLastPeriodTypes) => {
  const { culture } = useCulture();
  const { cycleCardStatusHandler } = useUpdateCycleCard();

  const successHandler = ({ valid }: { valid: boolean }) => {
    if (valid) {
      editPageHandler('finishPeriod');
      cycleCardStatusHandler('refetch');
    }
  };

  const { callApi, isLoading } = useApi({ api: 'info/add/cycle/bystart', method: 'PUT', onSuccess: successHandler });

  const submitHandler = (v: string) => {
    let startTime = v;

    if (culture.calendarType === CalendarTypeEnum.Jalali) {
      startTime = toGregorianData(startTime);
    }

    callApi({ startTime });
  };

  return { submitHandler, isLoading };
};

export default useSubmitLastPeriod;
