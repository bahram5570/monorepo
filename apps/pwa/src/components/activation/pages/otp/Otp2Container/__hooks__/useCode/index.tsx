import { useEffect } from 'react';

import { getFirebaseCookieToken } from '@utils/cookies';
import { toEnglishNumbers } from '@utils/numbers';

import useApi from '@hooks/useApi';
import useCustomToast from '@hooks/useCustomToast';

import { SuccessHandlerTypes, UseCodeProps } from './types';

const useCode = ({ identity, isRegister }: UseCodeProps) => {
  const { onToast } = useCustomToast();

  const successHandler: SuccessHandlerTypes = ({ result }) => {
    if (result) {
      onToast({ message: 'کد 6 رقمی ارسال شد' });
    }
  };

  const method = isRegister ? 'POST' : 'PUT';
  const payload = {
    token: '',
    phoneModel: '',
    deviceToken: getFirebaseCookieToken(),
    identity: toEnglishNumbers(identity || ''),
  };
  const api = isRegister ? 'customerAccount/GetIdentity' : 'customerAccount/setIdentity';

  const { callApi } = useApi({
    onSuccess: successHandler,
    method,
    api,
  });

  useEffect(() => {
    if (identity !== undefined) {
      callApi(payload);
    }
  }, [identity]);

  const resetCodeHandler = () => {
    callApi(payload);
  };

  return { resetCodeHandler };
};

export default useCode;
