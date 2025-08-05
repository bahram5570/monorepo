'use client';

import useBreakPoint from '@hooks/useBreakPoint';

import CustomTypography from '@components/ui/CustomTypography';

import { FeaturesIntruductionTitleTypes } from './types';

const FeaturesIntruductionTitle = ({ mainTitle }: FeaturesIntruductionTitleTypes) => {
  const { breakPoint } = useBreakPoint();

  return (
    <CustomTypography
      tagType="h2"
      className="text-center"
      fontSize={breakPoint.tablet ? 'Title_Medium' : 'Headline_Medium'}
    >
      {mainTitle}
    </CustomTypography>
  );
};

export default FeaturesIntruductionTitle;
