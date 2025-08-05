import BinaryModule from '@components/activation/BinaryModule';
import MainActivationModule from '@components/activation/MainActivationModule';
import { ChildTypeEnum } from '@constants/activation.constants';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Breastfeeding3ContainerProps } from './types';

const Breastfeeding3Container = ({
  payloadHandler,
  payload,
  info,
  activationData,
  isLoading,
  onRegister,
}: Breastfeeding3ContainerProps) => {
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, payload, info, activationData });

  if (options === undefined) {
    return <></>;
  }

  const binaryOptions = [
    { ...options[0], index: 0, isSingleSelect: true },
    { ...options[1], index: 1, isSingleSelect: true },
    { ...options[2], index: 2, isSingleSelect: true },
  ];

  const valueHandler = (v: number) => {
    if (v === ChildTypeEnum.Twin) {
      nextPageHandler({
        rewardId: pageInfo.nextActivationList.condition2?.rewardId,
        nextActivation: pageInfo.nextActivationList.condition2?.url || '',
      });
    } else {
      nextPageHandler({
        rewardId: pageInfo.nextActivationList.condition1?.rewardId,
        nextActivation: pageInfo.nextActivationList.condition1?.url || '',
      });
    }

    payloadHandler({ childType: v });
  };

  const showContinueBtn = payload.childType > -1;

  return (
    <>
      <MainActivationModule
        isLoading={isLoading}
        onRegister={onRegister}
        showContinueBtn={showContinueBtn}
        {...pageInfo}
      >
        <BinaryModule binaryOptions={binaryOptions} valueHandler={valueHandler} />
      </MainActivationModule>
    </>
  );
};

export default Breastfeeding3Container;
