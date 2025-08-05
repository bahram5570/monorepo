'use client';

import useBreakPoint from '@hooks/useBreakPoint';
import { COLORS_LIST } from '@theme/colors';

import StarRoundedIcon from '@mui/icons-material/StarRounded';

import AppStoreIcon from '@assets/icons/downloads/appStore.svg';
import StatisticsMaker from '@components/StatisticsMaker';
import CustomTypography from '@components/ui/CustomTypography';

import styles from './styles.module.css';
import { ScoresTypes } from './types';

const Scores = ({ title }: ScoresTypes) => {
  const { breakPoint } = useBreakPoint();

  const list = [
    <div className={'flex flex-col items-center gap-2 lg:gap-5 mx-auto min-w-[194px] pb-6 lg:pb-0'}>
      <>
        <div className="flex lg:gap-1">
          {[1, 2, 3, 4, 5].map((item) => (
            <StarRoundedIcon className="!w-3 lg:!w-5 h-auto" style={{ fill: COLORS_LIST.Yellow }} key={item} />
          ))}
        </div>

        <div className={`flex gap-2 lg:gap-4 ${styles.textGradient}`}>
          <CustomTypography fontSize={breakPoint.laptop ? 'Headline_Medium' : 'Headline_Large'}>4.8</CustomTypography>
          <AppStoreIcon className="w-6 lg:w-12 h-auto" />
        </div>

        <CustomTypography
          className="text-center"
          color={'Surface_Outline'}
          fontSize={breakPoint.laptop ? 'Title_Small' : 'Title_Medium'}
        >
          {title}
        </CustomTypography>
      </>
    </div>,
  ];

  return <StatisticsMaker list={list} />;
};

export default Scores;
