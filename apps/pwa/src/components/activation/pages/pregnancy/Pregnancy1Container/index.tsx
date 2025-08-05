import MainActivationModule from '@components/activation/MainActivationModule';
import RadioModule from '@components/activation/RadioModule';
import { PragnencyHistoryTypeEnum } from '@constants/activation.constants';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Pregnancy1ContainerProps } from './types';

const Pregnancy1Container = ({
  payloadHandler,
  payload,
  info,
  activationData,
  isLoading,
  onRegister,
}: Pregnancy1ContainerProps) => {
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, payload, info, activationData });

  if (options === undefined) {
    return <></>;
  }

  const selectHandler = (id: number) => {
    let result = {};

    switch (id) {
      case 1:
        result = { pragnencyHistoryType: PragnencyHistoryTypeEnum.Caesarean };
        nextPageHandler({
          rewardId: pageInfo.nextActivationList.condition1?.rewardId,
          nextActivation: pageInfo.nextActivationList.condition1?.url || '',
        });
        break;
      case 2:
        result = { pragnencyHistoryType: PragnencyHistoryTypeEnum.Natural };
        nextPageHandler({
          rewardId: pageInfo.nextActivationList.condition2?.rewardId,
          nextActivation: pageInfo.nextActivationList.condition2?.url || '',
        });
        break;
      case 3:
        result = { pragnencyHistoryType: PragnencyHistoryTypeEnum.NoExperienc };
        nextPageHandler({
          rewardId: pageInfo.nextActivationList.condition3?.rewardId,
          nextActivation: pageInfo.nextActivationList.condition3?.url || '',
        });
        break;
    }

    payloadHandler(result);
  };

  const showContinueBtn = payload.pragnencyHistoryType > -1;

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

export default Pregnancy1Container;
