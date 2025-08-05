'use client';

import { toEnglishNumbers } from '@utils/numbers';

import MainActivationModule from '@components/activation/MainActivationModule';
import Spinner from '@components/ui/Spinner';
import useIsRendered from '@hooks/useIsRendered';

import Codes from './Codes';
import CountDown from './CountDown';
import EditLink from './EditIdentyLink';
import LoginSuccess from './LoginSuccess';
import useCode from './__hooks__/useCode';
import useLogin from './__hooks__/useLogin';
import useOtpInfo from './__hooks__/useOtpInfo';
import useOtpStatus from './__hooks__/useOtpStatus';
import useValidation from './__hooks__/useValidation';
import { Otp2ContainerProps } from './types';

const Otp2Container = ({
  isRegisterLoading = false,
  isRegisterSuccess = false,
  applyOtpStatus = null,
  onSubmitRegister,
  onSubmitLogin,
}: Otp2ContainerProps) => {
  const { identity, isPhone, isRegister, password } = useOtpInfo();
  const { otpStatus, otpStatusHandler } = useOtpStatus(applyOtpStatus);

  const { resetCodeHandler } = useCode({ identity, isRegister });

  const { loginHandler, loginLoading, isLoginSuccess } = useLogin({
    identity,
    password,
    onSubmitLogin,
    otpStatusHandler,
  });

  const validationCompleteHandler = () => {
    if (isRegister) {
      loginHandler();
    } else {
      onSubmitRegister();
    }
  };

  const { submitHandler, isValidateLoading } = useValidation({
    isRegister,
    otpStatusHandler,
    validationCompleteHandler,
    identity: toEnglishNumbers(identity || ''),
  });

  const subtitle = `کد 6 رقمی ارسال شده به ${isPhone ? 'شماره' : 'ایمیل'} ${identity} رو وارد کن`;
  const customPageInfo = {
    scripts: { title: 'کد عبور رو وارد کن', description: '', subtitle },
    orderOfQuestionScripts: { title: 1, subtitle: 3, description: 2 },
    showContinueBtn: false,
    nextActivationList: {},
    nextActivation: '',
    payloadKeys: [],
    firstName: '',
  };

  const isLoading = isValidateLoading || loginLoading || isRegisterLoading;
  const isLoginRegisterSuccess = isLoginSuccess || isRegisterSuccess;

  const { isRendered } = useIsRendered();

  if (!isRendered) {
    return <></>;
  }

  return (
    <MainActivationModule {...customPageInfo} className="pt-5">
      <div className="flex flex-col items-center">
        <Codes submitHandler={submitHandler} isLoading={isLoading} otpStatus={otpStatus} />

        <CountDown resetCodeHandler={resetCodeHandler} />

        {!isLoading && !isLoginRegisterSuccess && <EditLink isPhone={isPhone ? true : false} />}

        {isLoading && <Spinner color="primary" />}

        {isLoginRegisterSuccess && <LoginSuccess />}
      </div>
    </MainActivationModule>
  );
};

export default Otp2Container;
