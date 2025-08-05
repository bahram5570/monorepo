'use client';

import useBreakPoint from '@hooks/useBreakPoint';

import StatisticsDesktopGenerator from './StatisticsDesktopGenerator';
import StatisticsMobileGenerator from './StatisticsMobileGenerator';
import { StatisticsMakerTypes } from './types';

const StatisticsMaker = ({ list }: StatisticsMakerTypes) => {
  const { breakPoint } = useBreakPoint();

  return (
    <div className="relative w-full flex py-8">
      {breakPoint.laptop && <StatisticsMobileGenerator list={list} />}
      {breakPoint.desktop && <StatisticsDesktopGenerator list={list} />}
    </div>
  );
};

export default StatisticsMaker;
