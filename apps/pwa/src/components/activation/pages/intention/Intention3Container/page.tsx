import MainActivationModule from '@components/activation/MainActivationModule';
import RadioModule from '@components/activation/RadioModule';
import { OnFertilitySexEnum } from '@constants/activation.constants';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Intention3ContainerProps } from './types';

const Intention3Container = ({
  info,
  payload,
  payloadHandler,
  activationData,
  isLoading,
  onRegister,
}: Intention3ContainerProps) => {
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, info, payload, activationData });

  if (options === undefined) {
    return <></>;
  }

  const selectHandler = (id: number) => {
    let result = {};

    switch (id) {
      case 1:
        result = { onFertilitySex: OnFertilitySexEnum.haveSex };
        nextPageHandler({
          rewardId: info.nextActivationList.condition1?.rewardId,
          nextActivation: info.nextActivationList.condition1?.url || '',
        });
        break;
      case 2:
        result = { onFertilitySex: OnFertilitySexEnum.dontKnow };
        nextPageHandler({
          rewardId: info.nextActivationList.condition2?.rewardId,
          nextActivation: info.nextActivationList.condition2?.url || '',
        });
        break;
    }

    payloadHandler(result);
  };

  const showContinueBtn = payload.onFertilitySex > -1;

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

export default Intention3Container;
