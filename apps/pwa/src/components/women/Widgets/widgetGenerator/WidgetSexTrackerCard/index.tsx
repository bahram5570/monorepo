import { currentDate } from '@utils/dates';

import { SIGNS_LIST } from '@components/women/SignGenerator/constants';
import CategoryGenerator from '@components/women/pages/nestedRoutes/signs/SignsContainer/SignsLists/CategoryGenerator';

import { WidgetSexTrackerCardProps } from './types';

const { gDate } = currentDate();

const WidgetSexTrackerCard = ({ data }: WidgetSexTrackerCardProps) => {
  const category = 6;
  const signs = SIGNS_LIST[category].signs;
  const info = { gregorianDate: gDate, initialSelectedSigns: data.signs };

  return (
    <>
      <CategoryGenerator category={category} title={data.title} signs={signs} info={info} />
    </>
  );
};

export default WidgetSexTrackerCard;
