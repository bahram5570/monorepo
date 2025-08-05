import MainActivationModule from '@components/activation/MainActivationModule';
import RadioModule from '@components/activation/RadioModule';
import { PreventionSexCommitedEnum } from '@constants/activation.constants';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Prevention1ContainerProps } from './types';

const Prevention1Container = ({
  info,
  payload,
  payloadHandler,
  activationData,
  isLoading,
  onRegister,
}: Prevention1ContainerProps) => {
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, info, payload, activationData });

  if (options === undefined) {
    return <></>;
  }

  const selectHandler = (id: number) => {
    let result = {};

    switch (id) {
      case 1:
        result = { preventionSexCommited: PreventionSexCommitedEnum.safeDays };
        nextPageHandler({
          rewardId: info.nextActivationList.condition1?.rewardId,
          nextActivation: info.nextActivationList.condition1?.url || '',
        });
        break;
      case 2:
        result = { preventionSexCommited: PreventionSexCommitedEnum.dontCare };
        nextPageHandler({
          rewardId: info.nextActivationList.condition2?.rewardId,
          nextActivation: info.nextActivationList.condition2?.url || '',
        });
        break;
      case 3:
        result = { preventionSexCommited: PreventionSexCommitedEnum.dontKnow };
        nextPageHandler({
          rewardId: info.nextActivationList.condition3?.rewardId,
          nextActivation: info.nextActivationList.condition3?.url || '',
        });
        break;
    }

    payloadHandler(result);
  };

  const showContinueBtn = payload.preventionSexCommited > -1;

  return (
    <>
      <MainActivationModule
        isLoading={isLoading}
        onRegister={onRegister}
        showContinueBtn={showContinueBtn}
        {...pageInfo}
      >
        <RadioModule options={options} onSelect={selectHandler} />
      </MainActivationModule>
    </>
  );
};

export default Prevention1Container;
