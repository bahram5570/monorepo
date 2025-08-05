import useApi from '@hooks/useApi';

import { OtpInfoTypes } from '../../types';
import { useRegisterStatusProps } from './types';

const useRegisterStatus = ({ identity, isPhone, otp1CompleteHandler }: useRegisterStatusProps) => {
  const successHandler = ({ isRegister }: { isRegister: boolean }) => {
    const info: OtpInfoTypes = {
      password: Math.random().toString().slice(2),
      isRegister,
      identity,
      isPhone,
    };

    otp1CompleteHandler(info);
  };

  const {
    data,
    callApi,
    isLoading: loading,
  } = useApi({
    api: `customerAccount/status/${identity}`,
    onSuccess: successHandler,
    queryKey: ['identity'],
    fetchOnMount: false,
    method: 'GET',
  });

  const fetchHandler = () => {
    callApi();
  };

  const isLoading = loading || data ? true : false;

  return { fetchHandler, isLoading };
};

export default useRegisterStatus;
