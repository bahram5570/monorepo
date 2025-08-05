import MainActivationModule from '@components/activation/MainActivationModule';
import RadioModule from '@components/activation/RadioModule';
import { PmsStatusEnum } from '@constants/activation.constants';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Tracker1ContainerProps } from './types';

const Tracker1Container = ({
  payload,
  payloadHandler,
  activationData,
  info,
  isLoading,
  onRegister,
}: Tracker1ContainerProps) => {
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, payload, activationData, info });

  if (options === undefined) {
    return <></>;
  }

  const selectHandler = (id: number) => {
    let result = {};

    switch (id) {
      case 1:
        result = { pmsStatus: PmsStatusEnum.None };
        nextPageHandler({
          rewardId: info.nextActivationList.condition1?.rewardId,
          nextActivation: info.nextActivationList.condition1?.url || '',
        });
        break;
      case 2:
        result = { pmsStatus: PmsStatusEnum.Pms };
        nextPageHandler({
          rewardId: info.nextActivationList.condition2?.rewardId,
          nextActivation: info.nextActivationList.condition2?.url || '',
        });
        break;
      case 3:
        result = { pmsStatus: PmsStatusEnum.Pmdd };
        nextPageHandler({
          rewardId: info.nextActivationList.condition3?.rewardId,
          nextActivation: info.nextActivationList.condition3?.url || '',
        });
        break;
    }

    payloadHandler(result);
  };

  const showContinueBtn = payload.pmsStatus > -1;

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

export default Tracker1Container;
