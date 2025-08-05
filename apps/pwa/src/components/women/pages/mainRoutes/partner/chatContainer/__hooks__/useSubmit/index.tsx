import useApi from '@hooks/useApi';

import { SubmitResponsePropsType, UseSubmitPropsType } from './type';

const useSubmit = ({ id, resetChild }: UseSubmitPropsType) => {
  const { callApi, isLoading, data } = useApi<SubmitResponsePropsType>({
    api: `challenge/${id}/chat`,
    method: 'POST',
    onSuccess: resetChild,
  });

  const submitHandler = ({ text }: { text: string }) => {
    const payload = { text };
    callApi(payload);
  };
  return { submitHandler, isLoading, data };
};

export default useSubmit;
