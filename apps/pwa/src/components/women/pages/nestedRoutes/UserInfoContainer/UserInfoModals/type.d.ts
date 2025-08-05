import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';

import { ChangeHandlerType } from '../type';

type ModalPropsType = {
  value: string | number;
  name: string;
  changeValueHandler: ChangeHandlerType;
  onCloseModal: () => void;
};

type UserInfoModalPropsType = {
  values: ProfileResponseTypes;
  changeValueHandler: ChangeHandlerType;
};

type PeriodModalPropsType = ModalPropsType & {
  totalCycleLength: number;
};

type CycleModalPropsType = ModalPropsType;

type BirthDateModalPropsType = ModalPropsType;
