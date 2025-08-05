import useApi from '@hooks/useApi';

import { FormDataTypes } from '../../type';
import { UseSubmitPropsType } from './type';

const useSubmit = ({ openModalHandler }: UseSubmitPropsType) => {
  const successHandler = () => {
    openModalHandler();
  };

  const { isLoading, callApi } = useApi({
    onSuccess: successHandler,
    url: `support/finantial/paypal/create`,
    method: 'POST',
  });

  const handleSubmit = (payload: FormDataTypes) => {
    callApi({ payload });
  };
  return { handleSubmit, isLoading };
};

export default useSubmit;
