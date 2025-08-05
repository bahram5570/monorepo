import useApi from '@hooks/useApi';
import useCurrentDateInSigns from '@hooks/useCurrentDateInSigns';
import { useRouter } from 'next/navigation';

import { InputValueType } from '../../type';

const useSubmit = () => {
  const router = useRouter();
  const { calendarInitailSelectedDate } = useCurrentDateInSigns();

  const successHandler = () => {
    router.back();
  };

  const { callApi, isLoading } = useApi({
    api: 'info/woman/bloodpressure/add',
    method: 'POST',
    onSuccess: successHandler,
  });

  const submitHandler = ({ high, low }: InputValueType) => {
    const selectedDate = calendarInitailSelectedDate;
    const payload = {
      high,
      low,
      date: selectedDate,
    };
    callApi(payload);
  };
  return { isLoading, submitHandler };
};

export default useSubmit;
