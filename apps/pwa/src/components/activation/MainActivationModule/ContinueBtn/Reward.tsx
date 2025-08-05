import RewardModule from '@components/activation/RewardModule';
import { ACTIVATION_REWARD_QUERY_NAME } from '@constants/activation.constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { RewardProps } from './types';

const Reward = ({
  orderOfRewardElements,
  currentRewardData,
  noBackButton,
  nextHandler,
  firstName,
  isLoading,
}: RewardProps) => {
  const { getQueryParams } = useQueryParamsHandler();

  const isOpenReward = getQueryParams(ACTIVATION_REWARD_QUERY_NAME) === 'true';

  return (
    <>
      {isOpenReward && (
        <RewardModule
          firstName={firstName}
          isLoading={isLoading}
          btnHandler={nextHandler}
          noBackButton={noBackButton}
          currentRewardData={currentRewardData}
          orderOfRewardElements={orderOfRewardElements}
        />
      )}
    </>
  );
};

export default Reward;
