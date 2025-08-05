import { GoalNamesEnum } from '@constants/activation.constants';
import { ActivationPayloadTypes } from '@providers/__activation__/types';

type SelectedGoalTitleTypes = 'پریود ترکر' | 'اقدام به بارداری' | 'بارداری';

export type GoalInfoTypes = {
  selectedGoalTitle: SelectedGoalTitleTypes;
  topPartBackgroundColor: string;
  selectDatesBottomText: string;
  selectedGoal: GoalNamesEnum;
  selectDatesBtnText: string;
  selectDatesTopText: string;
  selectDatesBottomIcon: any;
  createCycleImage: string;
  inputsTitleColor: string;
  selectDatesTopIcon: any;
  backgroundColor: string;
  inputsTitle: string;
  title: string;
};

type StatusTypes = Pick<ActivationPayloadTypes, 'status' | 'periodStatus'>;
export interface UseGoalFinderProps extends StatusTypes {}
