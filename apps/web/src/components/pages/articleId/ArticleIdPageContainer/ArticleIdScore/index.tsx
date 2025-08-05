'use client';

import useBreakPoint from '@hooks/useBreakPoint';

import CustomTypography from '@components/ui/CustomTypography';

import { ArticleIdScoreTypes } from './types';

const ArticleIdScore = ({ rate, rateCount }: ArticleIdScoreTypes) => {
  const { breakPoint } = useBreakPoint();

  return (
    <div className="w-full flex justify-between">
      <CustomTypography fontSize={breakPoint.mobile ? 'Headline_Small' : 'Headline_Medium'}>
        امتیاز شما:
      </CustomTypography>

      <CustomTypography
        fontSize={breakPoint.mobile ? 'Headline_Small' : 'Headline_Medium'}
      >{`${rate.toFixed(2)} - (${rateCount} امتیاز)`}</CustomTypography>
    </div>
  );
};

export default ArticleIdScore;
