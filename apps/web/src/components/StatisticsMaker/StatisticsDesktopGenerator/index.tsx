import { Fragment } from 'react';

import CustomImage from '@components/ui/CustomImage';

import { StatisticsDesktopGeneratorTypes } from './types';

const StatisticsDesktopGenerator = ({ list }: StatisticsDesktopGeneratorTypes) => {
  return (
    <div className="w-full flex justify-center gap-8">
      <CustomImage alt="impo" width={54} height={0} src="/assets/images/leafRight.webp" />

      <div className="flex items-center gap-20">
        {list.map((item, index) => (
          <Fragment key={index}>{item}</Fragment>
        ))}
      </div>

      <CustomImage alt="impo" width={54} height={0} src="/assets/images/leafLeft.webp" />
    </div>
  );
};

export default StatisticsDesktopGenerator;
