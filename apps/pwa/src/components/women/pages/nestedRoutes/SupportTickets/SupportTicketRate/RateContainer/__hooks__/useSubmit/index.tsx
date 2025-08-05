import useApi from '@hooks/useApi';
import { useParams } from 'next/navigation';

import { SubmitHandlerPropsType } from './type';

const useSubmit = () => {
  const { ticketId } = useParams();

  const successHandler = () => {
    window.history.go(-2);
  };

  const { callApi, isLoading } = useApi({
    api: `support/ticket/${ticketId}/rate`,
    method: 'POST',
    onSuccess: successHandler,
  });

  const submitHandler = (payload: SubmitHandlerPropsType) => {
    callApi(payload);
  };
  return { submitHandler, isLoading };
};

export default useSubmit;
