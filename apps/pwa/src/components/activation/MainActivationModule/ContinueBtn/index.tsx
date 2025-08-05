import { RewardBtnTypes } from '@components/activation/RewardModule/types';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

import { CONTINUE_BTN_HEIGHT } from '../../ActivationHeading/constants';
import Btn from './Btn';
import Reward from './Reward';
import useContinueBtnNextActivation from './__hooks__/useContinueBtnNextActivation';
import { ContinueBtnProps } from './types';

const ContinueBtn = (props: ContinueBtnProps) => {
  const { resetKey, nextActivationHandler } = useContinueBtnNextActivation();
  const { colors } = useTheme();

  const nextHandler: RewardBtnTypes = (v) => {
    if (v?.isBtn2) {
      //
    }

    nextActivationHandler({
      invalidMessage: props.invalidMessage,
      nextActivation: props.nextActivation,
      onRegister: props.onRegister,
    });
  };

  return (
    <>
      <div
        className="fixed left-0 right-0 mx-auto px-4 pt-4 duration-200 z-30"
        style={{
          bottom: props.showContinueBtn ? '0' : '-100%',
          backgroundColor: colors.Transparent,
          height: CONTINUE_BTN_HEIGHT,
          maxWidth: MAX_SCREEN_WIDTH,
        }}
      >
        <Btn
          hasReward={props.currentRewardData !== undefined}
          nextActivation={props.nextActivation}
          isLoading={props.isLoading}
          nextHandler={nextHandler}
          key={resetKey + '1'}
        />
      </div>

      <Reward
        orderOfRewardElements={props.orderOfRewardElements}
        currentRewardData={props.currentRewardData}
        noBackButton={props.noBackButton}
        firstName={props.firstName}
        isLoading={props.isLoading}
        nextHandler={nextHandler}
        key={resetKey + '2'}
      />
    </>
  );
};

export default ContinueBtn;
