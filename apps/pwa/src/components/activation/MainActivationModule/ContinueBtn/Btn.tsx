import Button from '@components/ui/Button';
import { ACTIVATION_REWARD_QUERY_NAME } from '@constants/activation.constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { BtnProps } from './types';

const Btn = ({ hasReward, nextHandler, isLoading, nextActivation }: BtnProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();

  const continueHandler = () => {
    if (hasReward) {
      newQueryParamsHandler({ [ACTIVATION_REWARD_QUERY_NAME]: 'true' });
    } else {
      nextHandler();
    }
  };

  const navigationLoadingId = typeof nextActivation === 'string' ? 'MainActivationContinueBtn' : undefined;

  return (
    <div className="flex mx-auto w-[204px] min-w-fit">
      <Button
        size="large"
        variant="fill"
        color="primary"
        isLoading={isLoading}
        onClick={continueHandler}
        navigationLoadingId={navigationLoadingId}
      >
        ادامه
      </Button>
    </div>
  );
};

export default Btn;
