import CrossIcon from '@assets/icons/plus.svg';

import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/navigation';

import PopupTwoStepsContainerProgressBar from './PopupTwoStepsContainerProgressBar';
import { PopupTwoStepsContainerProps } from './types';

const PopupTwoStepsContainer = ({ children, currentStep }: PopupTwoStepsContainerProps) => {
  const router = useRouter();
  const { colors } = useTheme();

  return (
    <div
      className="relative w-full h-full flex flex-col items-center"
      style={{ backgroundColor: colors.Surface_SurfaceVariant }}
    >
      <div className="flex w-full px-8 py-6">
        <CrossIcon
          onClick={() => router.back()}
          className="w-6 h-6 rotate-45 cursor-pointer"
          style={{ stroke: colors.Surface_OnSurfaceVariant }}
        />
      </div>

      {currentStep !== null && <PopupTwoStepsContainerProgressBar currentStep={currentStep} />}

      <>{children}</>
    </div>
  );
};

export default PopupTwoStepsContainer;
