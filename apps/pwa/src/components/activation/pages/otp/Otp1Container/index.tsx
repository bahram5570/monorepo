import { useEffect } from 'react';

import InputModule from '@components/activation/InputModule';
import MainActivationModule from '@components/activation/MainActivationModule';
import useIsRendered from '@hooks/useIsRendered';

import ContinueBtn from './ContinueBtn';
import RegisterTypeBtn from './RegisterTypeBtn';
import useIsPhone from './__hooks__/useIsPhone';
import useRegisterStatus from './__hooks__/useRegisterStatus';
import useValidation from './__hooks__/useValidation';
import { Otp1ContainerProps } from './types';

const Otp1Container = ({ payload, payloadHandler, otp1CompleteHandler }: Otp1ContainerProps) => {
  const { isPhone, isPhoneToggleHandler, scripts } = useIsPhone();

  const valueHandler = (v: string) => {
    if (isPhone && v.length > 11) {
      return;
    }

    payloadHandler({ identity: v });
  };

  useEffect(() => {
    // # Reseting 'identity' value on changing the input type (isPhone)
    payloadHandler({ identity: '' });
  }, [isPhone]);

  const { fetchHandler, isLoading } = useRegisterStatus({
    identity: payload.identity,
    otp1CompleteHandler,
    isPhone,
  });

  const { invalidMessage } = useValidation({ isPhone, value: payload.identity });

  // # In this case, just "scripts" is required (others are set to default values)
  const customPageInfo = {
    scripts: { title: scripts.description, description: scripts.title, subtitle: scripts.subtitle },
    orderOfQuestionScripts: { title: 1, subtitle: 3, description: 2 },
    firstName: payload.firstName,
    showContinueBtn: false,
    nextActivationList: {},
    noBackButton: true,
    nextActivation: '',
    payloadKeys: [],
  };

  const showContinueBtn = payload.identity.trim().length > 0;
  const inputResetKey = isPhone ? 'k1' : 'k2';

  const { isRendered } = useIsRendered();

  if (!isRendered) {
    return <></>;
  }

  return (
    <>
      <RegisterTypeBtn isPhone={isPhone} isPhoneToggleHandler={isPhoneToggleHandler} />

      <MainActivationModule {...customPageInfo} className="pt-5">
        <>
          <InputModule
            valueHandler={valueHandler}
            placeHolder="اینجا بنویس"
            value={payload.identity}
            isTextTyps={!isPhone}
            key={inputResetKey}
          />

          <ContinueBtn
            showContinueBtn={showContinueBtn}
            invalidMessage={invalidMessage}
            nextHandler={fetchHandler}
            isLoading={isLoading}
          />
        </>
      </MainActivationModule>
    </>
  );
};

export default Otp1Container;
