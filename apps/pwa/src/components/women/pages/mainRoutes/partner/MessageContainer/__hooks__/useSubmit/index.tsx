import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { SubmitHandlerPropsType } from './type';

const useSubmit = () => {
  const { refetchQuery } = useCustomReactQuery();

  const successHandler = () => {
    refetchQuery({ queryKey: ['messagePartner'] });
  };

  const { callApi, isLoading } = useApi({
    method: 'PUT',
    onSuccess: successHandler,
    api: 'message',
  });

  const submitHandler = ({ title, text }: SubmitHandlerPropsType) => {
    const payload = {
      title,
      text,
    };
    callApi(payload);
  };

  return { submitHandler, isLoading };
};

export default useSubmit;
