import { CONTINUE_BTN_HEIGHT } from '@components/activation/ActivationHeading/constants';
import Button from '@components/ui/Button';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useCustomToast from '@hooks/useCustomToast';

import { PartnerCodeInputContinueBtnProps } from './types';

const PartnerCodeInputContinueBtn = ({
  showContinueBtn,
  invalidMessage,
  isLoading,
  onSubmit,
}: PartnerCodeInputContinueBtnProps) => {
  const { onToast } = useCustomToast();

  const clickHandler = () => {
    if (invalidMessage) {
      onToast({ message: invalidMessage, type: 'error' });
    } else {
      onSubmit();
    }
  };

  return (
    <div
      className="fixed left-0 right-0 mx-auto px-4 pt-4 duration-200 z-30"
      style={{
        bottom: showContinueBtn ? '0' : '-100%',
        height: CONTINUE_BTN_HEIGHT,
        maxWidth: MAX_SCREEN_WIDTH,
      }}
    >
      <div className="flex mx-auto w-[204px] min-w-fit">
        <Button size="medium" variant="fill" color="primary" isLoading={isLoading} onClick={clickHandler}>
          ادامه
        </Button>
      </div>
    </div>
  );
};

export default PartnerCodeInputContinueBtn;
