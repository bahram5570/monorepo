import { FAKE_CYCLE_FOOTER_HEIGTH } from '@app/(activation)/activationCr/(goal)/fakeCycle/FakeCyclePageContainer/PageContainer/FakeCycleContainer/constants';
import Button from '@components/ui/Button';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/navigation';

import { SAMPLE_CYCLE_CONTINUE_BTN_HEIGHT } from './constants';

const ContinueBtn = () => {
  const router = useRouter();
  const { colors } = useTheme();

  const nextHandler = () => {
    router.push('otp_1');
  };

  return (
    <div
      className="fixed left-0 right-0 bottom-0 mx-auto px-4 pt-4 z-30"
      style={{
        height: SAMPLE_CYCLE_CONTINUE_BTN_HEIGHT,
        // height: FAKE_CYCLE_FOOTER_HEIGTH + SAMPLE_CYCLE_CONTINUE_BTN_HEIGHT,
        backgroundColor: colors.Neutral_Background,
        maxWidth: MAX_SCREEN_WIDTH,
      }}
    >
      <div className="flex mx-auto w-[204px] min-w-fit">
        <Button variant="fill" size="large" color="primary" navigationLoadingId="ContinueBtn" onClick={nextHandler}>
          مرحله بعد
        </Button>
      </div>

      {/* <div className="h-[1px] mt-2" style={{ backgroundColor: colors.Neutral_Surface }} /> */}
    </div>
  );
};

export default ContinueBtn;
