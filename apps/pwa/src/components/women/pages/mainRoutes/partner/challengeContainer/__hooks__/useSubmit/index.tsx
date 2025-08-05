import useApi from '@hooks/useApi';
import { useRouter } from 'next/navigation';

import { SubmitHandlerPropsType, UseSubmitPropsType } from './type';

const useSubmit = ({ id, btn }: UseSubmitPropsType) => {
  const router = useRouter();

  const successHandler = () => {
    if (btn && btn.nextStep === 1) {
      return router.replace(`/protected/partner/challenge/${id}`);
    }
    router.back();
  };
  const { callApi, isLoading } = useApi({
    api: `challenge/form/${id}`,
    method: 'POST',
    onSuccess: successHandler,
  });

  const submitHandler = ({ questionText, text }: SubmitHandlerPropsType) => {
    const payload = {
      questionText,
      text,
    };
    callApi(payload);
  };
  return { submitHandler, submitLoading: isLoading };
};

export default useSubmit;
