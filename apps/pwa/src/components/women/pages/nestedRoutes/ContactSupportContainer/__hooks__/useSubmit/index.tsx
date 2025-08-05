import useApi from '@hooks/useApi';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import { SubmitHandlerPropsType } from './type';

const useSubmit = () => {
  const route = useRouter();
  const { getQueryParams } = useQueryParamsHandler();

  const categoryId = getQueryParams('id');
  const categoryName = getQueryParams('name');

  const successHandler = (id: string) => {
    route.replace(`/protected/supportTicket/${id}`);
  };

  const { callApi, isLoading } = useApi({
    method: 'POST',
    api: 'support/chat',
    onSuccess: (v: { id: string }) => successHandler(v.id),
  });

  const submitHandler = ({ text, fileName }: SubmitHandlerPropsType) => {
    const payload = {
      text,
      type: 0,
      fileName,
      categoryId,
      categoryName,
      ModelPhone: '',
      packageName: '',
      version: process.env.NEXT_PUBLIC_APP_VERSION || '',
    };
    callApi(payload);
  };
  return { submitHandler, isLoading };
};

export default useSubmit;
