import useApi from '@hooks/useApi';
import { useRouter } from 'next/navigation';

import { InputValueType } from '../../type';

const useSubmit = () => {
  const router = useRouter();

  const successHandler = () => {
    router.back();
  };
  const { callApi, isLoading } = useApi({
    method: 'PUT',
    onSuccess: successHandler,
    api: 'memory',
  });

  const createMemoryHandler = (values: InputValueType) => {
    callApi(values);
  };

  return { createMemoryHandler, isLoading };
};

export default useSubmit;
