'use client';

import MainActivationModule from '@components/activation/MainActivationModule';
import RadioModule from '@components/activation/RadioModule';
import { PeriodSituationEnum } from '@constants/activation.constants';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Tracker2ContainerProps } from './types';

const Tracker2Container = ({
  payload,
  payloadHandler,
  info,
  activationData,
  isLoading,
  onRegister,
}: Tracker2ContainerProps) => {
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, info, payload, activationData });

  if (options === undefined) {
    return <></>;
  }

  const selectHandler = (id: number) => {
    let result = {};

    switch (id) {
      case 1:
        result = { periodSituation: PeriodSituationEnum.regular };
        nextPageHandler({
          rewardId: info.nextActivationList.condition1?.rewardId,
          nextActivation: info.nextActivationList.condition1?.url || '',
        });
        break;
      case 2:
        result = { periodSituation: PeriodSituationEnum.irregular };
        nextPageHandler({
          rewardId: info.nextActivationList.condition2?.rewardId,
          nextActivation: info.nextActivationList.condition2?.url || '',
        });
        break;
      case 3:
        result = { periodSituation: PeriodSituationEnum.dontKnow };
        nextPageHandler({
          rewardId: info.nextActivationList.condition3?.rewardId,
          nextActivation: info.nextActivationList.condition3?.url || '',
        });
        break;
    }

    payloadHandler(result);
  };

  const showContinueBtn = payload.periodSituation > -1;

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

export default Tracker2Container;
