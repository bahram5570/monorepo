import MainActivationModule from '@components/activation/MainActivationModule';
import RadioModule from '@components/activation/RadioModule';
import { InstallationPurposeEnum } from '@constants/activation.constants';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import useInitialDelay from './__hooks__/useInitialDelay';
import { Goal3ContainerProps } from './types';

const Goal3Container = ({
  payload,
  payloadHandler,
  info,
  activationData,
  isLoading,
  onRegister,
}: Goal3ContainerProps) => {
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, payload, info, activationData });
  const { isInitialRendered } = useInitialDelay();

  if (options === undefined) {
    return <></>;
  }

  const selectHandler = (id: number) => {
    let result = {};

    switch (id) {
      case 1:
        result = InstallationPurposeEnum.tracker;
        nextPageHandler({
          nextActivation: pageInfo.nextActivationList.condition1?.url || '',
          rewardId: pageInfo.nextActivationList.condition1?.rewardId,
        });
        break;
      case 2:
        result = InstallationPurposeEnum.intention;
        nextPageHandler({
          nextActivation: pageInfo.nextActivationList.condition2?.url || '',
          rewardId: pageInfo.nextActivationList.condition2?.rewardId,
        });
        break;
      case 3:
        result = InstallationPurposeEnum.pregnancy;
        nextPageHandler({
          nextActivation: pageInfo.nextActivationList.condition3?.url || '',
          rewardId: pageInfo.nextActivationList.condition3?.rewardId,
        });
        break;
    }

    payloadHandler(result);
  };

  const showContinueBtn = payload.status > -1 && payload.periodStatus > -1;

  return (
    <>
      {isInitialRendered && (
        <MainActivationModule
          isLoading={isLoading}
          onRegister={onRegister}
          showContinueBtn={showContinueBtn}
          {...pageInfo}
        >
          <RadioModule options={options} onSelect={selectHandler} />
        </MainActivationModule>
      )}
    </>
  );
};

export default Goal3Container;
