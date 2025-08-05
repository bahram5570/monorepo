import ArrowIcon from '@assets/icons/calendarArrow.svg';

import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/navigation';

import useNameSelectorActivationSteps from '../../__hooks__/useNameSelectorActivationSteps';

const NameSelectorActivationProgressBar = () => {
  const router = useRouter();
  const { colors } = useTheme();
  const { stepInfo } = useNameSelectorActivationSteps();

  const progressPercent = stepInfo.progressPercent;

  return (
    <>
      {progressPercent !== null && (
        <div className="w-full flex items-center">
          <div className="w-[40px] h-[30px] pl-[12px] cursor-pointer" onClick={() => router.back()}>
            <ArrowIcon className="w-full h-full -rotate-180 ml-auto" style={{ stroke: colors.Black }} />
          </div>

          <div className="relative w-full h-1 rounded-full overflow-hidden" style={{ backgroundColor: colors.White }}>
            <div
              className="w-full h-full rounded-full"
              style={{
                backgroundColor: colors.PrimaryWoman_Primary,
                transform: `translateX(${100 - progressPercent}%)`,
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NameSelectorActivationProgressBar;
