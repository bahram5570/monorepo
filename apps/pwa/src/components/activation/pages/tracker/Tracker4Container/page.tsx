import { useRef } from 'react';

import MainActivationModule from '@components/activation/MainActivationModule';
import RadioModule from '@components/activation/RadioModule';
import { InstallationPurposeEnum } from '@constants/activation.constants';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Tracker4ContainerProps } from './types';

const Tracker4Container = ({
  payload,
  info,
  payloadHandler,
  activationData,
  isLoading,
  onRegister,
}: Tracker4ContainerProps) => {
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, info, payload, activationData });
  const isValuesChanged = useRef(false);

  if (options === undefined) {
    return <></>;
  }

  const selectHandler = (id: number) => {
    let result = {};
    isValuesChanged.current = true;

    switch (id) {
      case 1:
        result = InstallationPurposeEnum.tracker;
        nextPageHandler({
          nextActivation: info.nextActivationList.condition1?.url || '',
          rewardId: info.nextActivationList.condition1?.rewardId,
        });
        break;
      case 2:
        result = InstallationPurposeEnum.prevention;
        nextPageHandler({
          nextActivation: info.nextActivationList.condition2?.url || '',
          rewardId: info.nextActivationList.condition2?.rewardId,
        });
        break;
    }

    payloadHandler(result);
  };

  const showContinueBtn = payload.status > -1 && payload.periodStatus > -1 && isValuesChanged.current;

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

export default Tracker4Container;
