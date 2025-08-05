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
    api: 'info/woman/bloodsuger/add',
    method: 'POST',
    onSuccess: successHandler,
  });

  const submitHandler = ({ condition, value }: InputValueType) => {
    const selectedDate = calendarInitailSelectedDate;

    const payload = {
      condition,
      value,
      date: selectedDate,
    };
    callApi(payload);
  };
  return { isLoading, submitHandler };
};

export default useSubmit;
