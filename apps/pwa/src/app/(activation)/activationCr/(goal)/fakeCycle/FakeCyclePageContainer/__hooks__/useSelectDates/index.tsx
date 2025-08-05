import { GoalNamesEnum } from '@constants/activation.constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { FAKE_CYCLE_QUESTIONS_NAME } from '../../constants';
import { FakeCycleDatesEnums } from '../../enums';
import { OpenDatesHandlerTypes, UseSelectDatesProps } from './types';

const useSelectDates = ({ selectedGoal }: UseSelectDatesProps) => {
  const { getQueryParams, newQueryParamsHandler } = useQueryParamsHandler();

  const openDatesHandler: OpenDatesHandlerTypes = () => {
    let value = '';

    if ([GoalNamesEnum.INTENTION, GoalNamesEnum.TRACKER].includes(selectedGoal)) {
      value = FakeCycleDatesEnums.startPeriodDate;
    }
    if (selectedGoal === GoalNamesEnum.PREGNANCY) {
      value = FakeCycleDatesEnums.pregnancyDate;
    }

    newQueryParamsHandler({ [FAKE_CYCLE_QUESTIONS_NAME]: value });
  };

  const fakeCycleDates = getQueryParams(FAKE_CYCLE_QUESTIONS_NAME) as FakeCycleDatesEnums | null;

  return { openDatesHandler, fakeCycleDates };
};

export default useSelectDates;
