import useApi from '@hooks/useApi';
import { useRouter } from 'next/navigation';

import { EditActivationPayloadTypes } from '../useEditActivationPayload/types';

const useEditActivationSubmit = () => {
  const router = useRouter();

  const successHandler = () => {
    router.back();
  };

  const { isLoading, callApi } = useApi({ api: 'info/activation/update', method: 'PUT', onSuccess: successHandler });

  const submitHandler = (v: EditActivationPayloadTypes) => {
    let payload = {};
    const list = Object.entries(v);

    list.forEach((item) => {
      const keyName = item[0];
      const value = item[1].value;
      payload = { ...payload, [keyName]: value };
    });

    callApi(payload);
  };

  return { submitHandler, isLoading };
};

export default useEditActivationSubmit;
