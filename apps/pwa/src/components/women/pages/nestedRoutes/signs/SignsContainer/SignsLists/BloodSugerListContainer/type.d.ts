import { BloodSugerType } from '@app/(women)/protected/(mainRoutes)/calendar/__hooks__/useCalendarGetData/types';

export type BloodSugerListPropsType = {
  bloodSugerList: BloodSugerType[];
};

type BloodSugarState = {
  text: string;
  border: string;
  result: string;
};

export type InitailBloodSugerContextType = {
  normal: BloodSugarState;
  suspicious: BloodSugarState;
  danger: BloodSugarState;
};

export type CheckBloodSugerStatusType = (condition: number, value: number) => keyof InitailBloodSugerContextType;
