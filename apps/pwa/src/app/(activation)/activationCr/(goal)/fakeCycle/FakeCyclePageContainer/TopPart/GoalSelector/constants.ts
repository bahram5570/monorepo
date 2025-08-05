import { InstallationPurposeEnum } from '@constants/activation.constants';

import { GoalsListTypes } from './types';

export const GOALS_LIST: GoalsListTypes = [
  { title: 'اقدام به بارداری', value: InstallationPurposeEnum.intention },
  { title: 'پریود ترکر', value: InstallationPurposeEnum.tracker },
  { title: 'بارداری', value: InstallationPurposeEnum.pregnancy },
];

export const GOAL_SELECTOR_WIDTH = 130;

export const GOAL_SELECTOR_HEIGHT = 30;
