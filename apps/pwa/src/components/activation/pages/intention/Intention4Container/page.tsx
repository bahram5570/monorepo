import MainActivationModule from '@components/activation/MainActivationModule';
import RadioModule from '@components/activation/RadioModule';
import { PregnancyHistoryStatusEnum } from '@constants/activation.constants';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Intention4ContainerProps } from './types';

const Intention4Container = ({
  info,
  payload,
  payloadHandler,
  activationData,
  isLoading,
  onRegister,
}: Intention4ContainerProps) => {
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, info, payload, activationData });

  if (options === undefined) {
    return <></>;
  }

  const selectHandler = (id: number) => {
    let result = {};

    switch (id) {
      case 1:
        result = { pragnencyHistoryStatus: PregnancyHistoryStatusEnum.fistTime };
        nextPageHandler({
          rewardId: info.nextActivationList.condition1?.rewardId,
          nextActivation: info.nextActivationList.condition1?.url || '',
        });
        break;
      case 2:
        result = { pragnencyHistoryStatus: PregnancyHistoryStatusEnum.haveKid };
        nextPageHandler({
          rewardId: info.nextActivationList.condition2?.rewardId,
          nextActivation: info.nextActivationList.condition2?.url || '',
        });
        break;
      case 3:
        result = { pragnencyHistoryStatus: PregnancyHistoryStatusEnum.abortingExperience };
        nextPageHandler({
          rewardId: info.nextActivationList.condition3?.rewardId,
          nextActivation: info.nextActivationList.condition3?.url || '',
        });
        break;
      case 4:
        result = { pragnencyHistoryStatus: PregnancyHistoryStatusEnum.notMatter };
        nextPageHandler({
          rewardId: info.nextActivationList.condition4?.rewardId,
          nextActivation: info.nextActivationList.condition4?.url || '',
        });
        break;
    }

    payloadHandler(result);
  };

  const showContinueBtn = payload.pragnencyHistoryStatus > -1;

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

export default Intention4Container;
