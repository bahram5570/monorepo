import useApi from '@hooks/useApi';
import { useRouter } from 'next/navigation';

import { UseDeletePropsType } from './type';

const useDelete = ({ api, onSuccess }: UseDeletePropsType) => {
  const router = useRouter();

  const successHandler = (v: boolean) => {
    if (v) {
      if (onSuccess) {
        onSuccess();
      }
      router.back();
    }
  };

  const { callApi } = useApi({
    method: 'POST',
    onSuccess: (v: boolean) => successHandler(v),
    api,
  });

  const deleteHandler = () => {
    const payload = { filename: '' };
    callApi(payload);
  };

  return { deleteHandler };
};

export default useDelete;
