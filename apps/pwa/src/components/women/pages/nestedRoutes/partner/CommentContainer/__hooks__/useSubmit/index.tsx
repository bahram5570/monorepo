import useApi from '@hooks/useApi';
import { useRouter } from 'next/navigation';

import { SubmitHandler } from './type';

const useSubmit = () => {
  const route = useRouter();

  const successHandler = () => {
    route.back();
  };
  const { callApi, isLoading } = useApi({
    method: 'POST',
    api: 'memory/comment',
    onSuccess: successHandler,
  });

  const submitHandler = ({ id, text }: SubmitHandler) => {
    const payload = {
      id,
      text,
    };

    callApi(payload);
  };
  return { submitHandler, isLoading };
};

export default useSubmit;
