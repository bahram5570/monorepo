import { COLORS_LIST } from '@theme/colors';

import CustomButton from '@components/ui/CustomButton';

import useProgress from './__hooks__/useProgress';
import useTabSizes from './__hooks__/useTabSizes';
import { AppFeaturesTabGeneratorTypes } from './types';

const AppFeaturesTabGenerator = ({
  currentTabHandler,
  currentTab,
  lastIndex,
  tabIndex,
  title,
}: AppFeaturesTabGeneratorTypes) => {
  const { tabSizes } = useTabSizes();
  const { progressPercentage } = useProgress({ currentTab, lastIndex, tabIndex, currentTabHandler });

  const isSelected = currentTab === tabIndex;
  const strokeDasharray = `${(progressPercentage * tabSizes.totalDashArray) / 100}px 1000px`;

  return (
    <div className="relative p-[1px]" style={{ width: tabSizes.width, height: tabSizes.height }}>
      <CustomButton
        varient="FREE_COLORS"
        className="!h-full !w-full"
        onClick={() => currentTabHandler(tabIndex)}
        fontSize={tabSizes.isMobile ? 'Lable_Large' : 'Title_Small'}
        backgroundColor={isSelected ? COLORS_LIST.Primary_Primary : COLORS_LIST.White}
        textColor={isSelected ? COLORS_LIST.Primary_OnPrimary : COLORS_LIST.Neutral_OnSurface}
        borderColor={isSelected ? COLORS_LIST.Primary_Primary : COLORS_LIST.Surface_OutlineVariant}
      >
        {title}
      </CustomButton>

      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full pointer-events-none"
      >
        <rect
          x="1%"
          y="3%"
          width="98%"
          height="94%"
          strokeWidth={2}
          rx={tabSizes.rx}
          stroke={COLORS_LIST.Primary_Primary}
          strokeDasharray={strokeDasharray}
        />
      </svg>
    </div>
  );
};

export default AppFeaturesTabGenerator;
