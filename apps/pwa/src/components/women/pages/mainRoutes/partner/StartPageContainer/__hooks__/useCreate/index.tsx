import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useCustomToast from '@hooks/useCustomToast';
import { useRouter } from 'next/navigation';

import { DataResponseType } from './type';

const useCreate = () => {
  const { refetchQuery } = useCustomReactQuery();
  const { onToast } = useCustomToast();

  const router = useRouter();

  const successHandler = (data: DataResponseType) => {
    if (!data.valid) {
      return onToast({
        message: 'شماره / ایمیلی که وارد کردی مشکل داره. لطفا یک شماره یا ایمیل دیگه رو وارد کن',
        type: 'error',
      });
    }
    refetchQuery({ queryKey: ['partnerRequest'] });

    router.back();
  };
  const {
    data,
    callApi: create,
    isLoading,
  } = useApi({
    api: 'partner/create',
    method: 'POST',
    onSuccess: (data: DataResponseType) => successHandler(data),
  });

  const createHandler = (code: string) => {
    const payload = {
      code,
    };

    create(payload);
  };

  return { createHandler, isLoading };
};

export default useCreate;
