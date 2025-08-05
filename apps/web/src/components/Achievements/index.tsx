import StatisticsMaker from '@components/StatisticsMaker';
import CustomTypography from '@components/ui/CustomTypography';
import { addComma } from '@utils/numbers';

import styles from './styles.module.css';
import { AchievementsTypes } from './types';

const Achievements = ({ list }: AchievementsTypes) => {
  const result = list.map((item, index) => (
    <div
      key={`Achievements-${index}`}
      className={`flex flex-col items-center gap-1 mx-auto w-[194px] ${styles.textGradient}`}
    >
      <CustomTypography fontSize="Headline_Medium">{addComma(item.title)}</CustomTypography>

      <CustomTypography fontSize="Title_Medium" color="Surface_Outline">
        {item.subTitle}
      </CustomTypography>
    </div>
  ));

  return <StatisticsMaker list={result} />;
};

export default Achievements;
