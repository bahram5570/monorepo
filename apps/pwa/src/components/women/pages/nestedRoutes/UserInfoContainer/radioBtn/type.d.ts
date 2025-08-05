import { CalendarTypeEnum } from '@constants/date.constants';
import { SexualStatusEnum } from '@providers/ProfileProvider/__hooks__/useGetProfileData/enum';

import { ChangeHandlerType, ValueNameRadioBtnType } from '../type';

type UserInfoRadioBtnGeneratorPropsType = {
  label: string;
  description: string;
  value: string | number;
  name: ValueNameRadioBtnType;
  changeValueHandler: ChangeHandlerType;
  listLabel: { name: string; value: CalendarTypeEnum | SexualStatusEnum }[];
};
