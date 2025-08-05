import useApi from '@hooks/useApi';
import { useRouter } from 'next/navigation';

import { UseSubmitProps } from './types';

const useSubmit = ({ image, text, topicId, onSuccessNewHandler }: UseSubmitProps) => {
  const router = useRouter();

  const successHandler = () => {
    router.back();
    setTimeout(() => {
      router.back();
      onSuccessNewHandler();
    }, 0);
  };

  const { isLoading: isSubmitLoading, callApi } = useApi({
    api: 'shareeexperience/v3/experience',
    onSuccess: successHandler,
    method: 'POST',
  });

  const submitHandler = () => {
    callApi({ image, text, topicId });
  };

  return { submitHandler, isSubmitLoading };
};

export default useSubmit;
