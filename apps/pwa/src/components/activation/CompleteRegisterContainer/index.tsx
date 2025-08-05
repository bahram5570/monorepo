import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useGoalFinder from '@hooks/__activation__/useGoalFinder';
import useApi from '@hooks/useApi';
import useTheme from '@hooks/useTheme';

import AccessNotificationContainer from '../pages/AccessNotificationContainer';
import PartnerCodeContainer from '../pages/PartnerCodeContainer';
import CompleteRegisterCycleLoading from './CompleteRegisterCycleLoading';
import useCompleteRegisterCookie from './__hooks__/useCompleteRegisterCookie';
import useCompleteRegisterSteps from './__hooks__/useCompleteRegisterSteps';
import { CompleteRegisterStepsEnum } from './enums';
import { CompleteRegisterContainerProps } from './types';

const CompleteRegisterContainer = ({
  accessNotificationData,
  clearStorage,
  partnerData,
  fetchedUser,
  payload,
}: CompleteRegisterContainerProps) => {
  const { colors } = useTheme();
  useCompleteRegisterCookie({ fetchedUser, clearStorage });
  const { step, stepHandler } = useCompleteRegisterSteps({ accessNotificationData, partnerData });
  const { goalInfo } = useGoalFinder({ status: payload.status, periodStatus: payload.periodStatus });

  const accessNotificationCompleteHandler = () => {
    const hasPartnerData = typeof partnerData !== 'undefined';

    if (hasPartnerData) {
      stepHandler(CompleteRegisterStepsEnum.Partner);
    } else {
      stepHandler(CompleteRegisterStepsEnum.Loading);
    }
  };

  const partnerCodeCompleteHandler = () => {
    stepHandler(CompleteRegisterStepsEnum.Loading);
  };

  const successHandler = () => {
    partnerCodeCompleteHandler();
  };

  const { callApi, isLoading } = useApi({ api: 'partner/create', method: 'POST', onSuccess: successHandler });

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 w-full h-full mx-auto z-50"
      style={{ maxWidth: MAX_SCREEN_WIDTH, backgroundColor: colors.Neutral_Background }}
    >
      {step === CompleteRegisterStepsEnum.AccessNotification && accessNotificationData && (
        <AccessNotificationContainer
          {...accessNotificationData}
          firstName={payload.firstName}
          onComplete={accessNotificationCompleteHandler}
        />
      )}

      {step === CompleteRegisterStepsEnum.Partner && partnerData?.question && partnerData?.reward && (
        <PartnerCodeContainer
          onSubmit={callApi}
          isLoading={isLoading}
          reward={partnerData.reward}
          firstName={payload.firstName}
          question={partnerData.question}
          onComplete={partnerCodeCompleteHandler}
        />
      )}

      {step === CompleteRegisterStepsEnum.Loading && (
        <CompleteRegisterCycleLoading createCycleImage={goalInfo.createCycleImage} />
      )}
    </div>
  );
};

export default CompleteRegisterContainer;
