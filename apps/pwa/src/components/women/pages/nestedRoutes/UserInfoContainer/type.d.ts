import { CalendarTypeEnum } from '@constants/date.constants';
import { SexualStatusEnum } from '@providers/ProfileProvider/__hooks__/useGetProfileData/enum';
import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';

interface UserInfoPropsType
  extends Pick<
    ProfileResponseTypes,
    'name' | 'birthDate' | 'periodLength' | 'cycleLength' | 'sexualStatus' | 'calendarType'
  > {}

interface UserInfoValueInputType
  extends Pick<UserInfoPropsType, 'name' | 'birthDate' | 'periodLength' | 'cycleLength'> {}

interface UserInfoValueRadioBtnType extends Pick<UserInfoPropsType, 'sexualStatus' | 'calendarType'> {}

type ValueNamesType = keyof UserInfoValueInputType;
type ValueNameRadioBtnType = keyof UserInfoValueRadioBtnType;
type ChangeHandlerType = (v: number | string, name: string) => void;

type UserInfoInputGeneratorListType = {
  label: string;
  description: string;
  inputType: 'input' | 'modal';
  name: ValueNamesType;
};

type UserInfoRadioBtnGeneratorListType = {
  label: string;
  description: string;
  listLabel: { name: string; value: CalendarTypeEnum | SexualStatusEnum }[];
  name: ValueNameRadioBtnType;
};

type UserInfoInputType = {
  value: UserInfoValueInputType;
};

type UserInfoRadioType = {
  value: UserInfoValueRadioBtnType;
};
