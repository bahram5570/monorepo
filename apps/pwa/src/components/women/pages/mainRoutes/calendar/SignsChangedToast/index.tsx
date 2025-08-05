import { ReactElement, useEffect, useState } from 'react';

import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useCountDown from '@hooks/useCountDown';
import useCurrentDateInSigns from '@hooks/useCurrentDateInSigns';
import { LottieCanvas } from '@lib/LottieCanvas';

const SignsChangedToast = () => {
  const [showStatus, setShowStatus] = useState(false);
  const [el, setEl] = useState<ReactElement | null>(null);
  const { hasSignsChanged } = useCurrentDateInSigns();

  const { startCounter: startShow } = useCountDown({
    time: 7,
    onCallBack: () => {
      setShowStatus(false);
    },
  });

  useEffect(() => {
    if (hasSignsChanged) {
      startShow();
      setShowStatus(true);

      setEl(
        <div
          className="fixed left-0 right-0 px-4 w-full mx-auto animate-signsChangedToast z-40"
          style={{ maxWidth: MAX_SCREEN_WIDTH }}
        >
          <LottieCanvas src={'/assets/lottie/hasSignsChanged.lottie'} autoplay={true} />
        </div>,
      );
    }
  }, []);

  return <>{showStatus !== null && el}</>;
};

export default SignsChangedToast;
