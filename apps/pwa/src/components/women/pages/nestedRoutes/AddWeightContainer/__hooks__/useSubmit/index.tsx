import useApi from '@hooks/useApi';
import useCurrentDateInSigns from '@hooks/useCurrentDateInSigns';
import { useRouter } from 'next/navigation';

const useSubmit = () => {
  const router = useRouter();
  const { calendarInitailSelectedDate } = useCurrentDateInSigns();

  const successHandler = () => {
    router.back();
  };
  const { callApi, isLoading } = useApi({ api: 'info/woman/weight', method: 'POST', onSuccess: successHandler });

  const submitHandler = (weight: number) => {
    const selectedDate = calendarInitailSelectedDate;
    const payload = {
      weight,
      date: selectedDate,
    };

    callApi(payload);
  };
  return { submitHandler, isLoading };
};

export default useSubmit;
