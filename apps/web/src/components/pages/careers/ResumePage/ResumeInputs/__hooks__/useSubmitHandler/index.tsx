import useApi from '@hooks/useApi';
import useCustomToast from '@hooks/useCustomToast';
import { useRouter } from 'next/navigation';

import { ResumeValuesTypes } from '../useValues/types';

const useSubmitHandler = () => {
  const router = useRouter();
  const { onToast } = useCustomToast();

  const successHandler = (v: { valid: boolean }) => {
    if (v.valid) {
      onToast({ type: 'success', message: 'رزومه شما با موفقیت ارسال شد، نتیجه رو بهتون اطلاع میدیم.' });
      router.push('/careers');
    }
  };

  const { callApi, isLoading } = useApi({ url: 'resume/add', method: 'POST', onSuccess: successHandler });

  const submitHandler = (v: ResumeValuesTypes) => {
    const payload = { ...v };
    payload.jobId = payload.jobId === 'null' ? '' : payload.jobId;

    callApi(payload);
  };

  return { submitHandler, isLoading };
};

export default useSubmitHandler;
