import Button from '@components/ui/Button';
import VpnText from '@components/ui/VpnText';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

import useSubmitSubscription from './__hooks__/useSubmitSubscription';
import { SubmitBtnProps } from './types';

const SubmitBtn = ({ isFree, approvedCode, packageId, value, payButtonText }: SubmitBtnProps) => {
  const { colors } = useTheme();
  const { submitHandler, isLoading } = useSubmitSubscription();

  return (
    <div
      className="fixed left-0 right-0 bottom-0 mx-auto shadow-[0_0_16px_0_#6c23371f] py-3 z-30"
      style={{
        maxWidth: MAX_SCREEN_WIDTH,
        backgroundColor: colors.Neutral_Background,
      }}
    >
      <div className="flex flex-col justify-center gap-2 px-4">
        <VpnText />

        <Button
          size="medium"
          variant="fill"
          color="primary"
          isLoading={isLoading}
          onClick={() => submitHandler(isFree, { discount: approvedCode, isWeb: true, packageId, value })}
        >
          {payButtonText}
        </Button>
      </div>
    </div>
  );
};

export default SubmitBtn;
