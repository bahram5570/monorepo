import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { PayloadTypes } from './type';

const useReadMessage = () => {
  const { refetchQuery } = useCustomReactQuery();

  const successHandler = () => {
    refetchQuery({ queryKey: ['messageNotRead'] });
  };

  const { callApi, isLoading } = useApi({
    method: 'POST',
    onSuccess: successHandler,
    api: 'message',
  });

  const submitHandler = ({ messageIds }: PayloadTypes) => {
    const payload = {
      messageIds,
    };
    callApi(payload);
  };

  return { submitHandler, isLoading };
};

export default useReadMessage;
