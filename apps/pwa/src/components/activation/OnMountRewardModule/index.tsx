import { useState } from 'react';

import RewardModule from '@components/activation/RewardModule';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import { LottieCanvas } from '@lib/LottieCanvas';

import { IsOpenHandlerTypes, OnMountRewardModuleProps } from './types';

const OnMountRewardModule = ({
  orderOfRewardElements,
  currentRewardData,
  showRewardLottie,
  noBackButton,
  firstName,
}: OnMountRewardModuleProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const isOpenHandler: IsOpenHandlerTypes = (t) => {
    if (t === 'close') {
      setIsOpen(false);
    }
  };

  return (
    <>
      {isOpen && (
        <RewardModule
          isLoading={false}
          firstName={firstName}
          isOnMountModule={true}
          noBackButton={noBackButton}
          currentRewardData={currentRewardData}
          btnHandler={() => isOpenHandler('close')}
          orderOfRewardElements={orderOfRewardElements}
        />
      )}

      {showRewardLottie && isOpen && (
        <LottieCanvas
          autoplay={true}
          style={{ maxWidth: MAX_SCREEN_WIDTH }}
          src={'/assets/lottie/Confetti.lottie'}
          className={`fixed left-0 right-0 bottom-[44%] w-full h-[50dvh] mx-auto select-none pointer-events-none z-40`}
        />
      )}
    </>
  );
};

export default OnMountRewardModule;
