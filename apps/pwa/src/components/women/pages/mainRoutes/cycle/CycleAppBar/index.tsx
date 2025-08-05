import WomenPageLayoutHeader from '@components/women/WomenPageLayout/WomenPageLayoutHeader';

import { CycleAppBarProps } from './types';

const CycleAppBar = ({ date, appBarBackground }: CycleAppBarProps) => {
  return (
    <WomenPageLayoutHeader
      middleScript={date}
      leftElement1="Profile"
      rightElement="Calendar"
      hasScalingAnimation={true}
      headerBackgroundColor={appBarBackground}
    />
  );
};

export default CycleAppBar;
