import { useState } from 'react';

import { UserCookieTypes, cookieCreatedTime, getFirebaseCookieToken } from '@utils/cookies';
import { toEnglishNumbers } from '@utils/numbers';

import { APP_VERSION } from '@constants/app.constants';
import useApi from '@hooks/useApi';
import useCountDown from '@hooks/useCountDown';
import useCulture from '@hooks/useCulture';

import { OTP_COUNT_DOWN_TIME } from '../../constants';
import { ForgotSuccessHandlerTypes, LoginSuccessHandlerTypes, UseLoginPros } from './types';

let userCookieValue: UserCookieTypes;

const useLogin = ({ identity, password, otpStatusHandler, onSubmitLogin }: UseLoginPros) => {
  const { cultureHandler } = useCulture();
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const { startCounter } = useCountDown({
    time: OTP_COUNT_DOWN_TIME,
    onCallBack: () => onSubmitLogin(userCookieValue),
  });

  const loginSuccessHandler: LoginSuccessHandlerTypes = (v) => {
    userCookieValue = {
      installationPurpose: { periodStatus: v.periodStatus, status: v.status },
      createdTime: cookieCreatedTime(),
      identity: identity || '',
      password: password || '',
      cycleTheme: v.cycleTheme,
      token: v.token,
    };

    cultureHandler('calendarType', v.calendarType);
    otpStatusHandler('correct');
    setIsLoginSuccess(true);
    startCounter();
  };

  const { isLoading: isLoginLoading, callApi: callLoginApi } = useApi({
    onError: () => otpStatusHandler('wrong'),
    api: 'CustomerAccount/Loginv6',
    onSuccess: loginSuccessHandler,
    method: 'POST',
  });

  const forgotSuccessHandler: ForgotSuccessHandlerTypes = ({ result }) => {
    if (result) {
      callLoginApi({
        identity,
        password,
        phoneModel: '',
        channelVersion: '',
        version: APP_VERSION,
        deviceToken: getFirebaseCookieToken(),
      });
    } else {
      otpStatusHandler('wrong');
    }
  };

  const { isLoading: forgotLoading, callApi: callForgetApi } = useApi({
    onError: () => otpStatusHandler('wrong'),
    onSuccess: forgotSuccessHandler,
    api: 'CustomerAccount/forgot',
    method: 'POST',
  });

  const loginHandler = () => {
    const result = { identity: toEnglishNumbers(identity || '').toString(), password };
    callForgetApi(result);
  };

  const loginLoading = forgotLoading || isLoginLoading;

  return { loginHandler, loginLoading, isLoginSuccess };
};

export default useLogin;
