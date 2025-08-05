import { ChildTypeEnum } from '@constants/activation.constants';
import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';

import { UserInfoValueRadioBtnType } from '../UserInfoContainer/type';

interface UserInfoValueInputType extends Pick<ProfileResponseTypes, 'childName' | 'childBirthDate' | 'childType'> {}

type ValueNamesType = keyof UserInfoValueInputType;
type ValueNameRadioBtnType = keyof UserInfoValueRadioBtnType;

export type InputType = {
  type: 'input';
  label: string;
  description: string;
  name: ValueNamesType;
};

export type ModalType = {
  type: 'modal';
  label: string;
  description: string;
  name: ValueNamesType;
};

export type RadioButtonType = {
  type: 'RadioButton';
  label: string;
  description: string;
  name: ValueNamesType;
  listLabel: { name: string; value: ChildTypeEnum }[];
};

export type BreastfeedingSettingInputGeneratorListType = InputType | ModalType | RadioButtonType;
