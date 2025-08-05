import { CycleThemeEnum } from '@services/loginServices/enum';

import { ChildTypeEnum, PeriodStatusEnum } from '@constants/activation.constants';
import { CalendarTypeEnum } from '@constants/date.constants';
import { ProfileProviderPropsTypes } from '@providers/ProfileProvider/type';
import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';

import { SexualStatusEnum } from './enum';

type ChangeStatusBtnsTypes = {
  text: string;
  action: ActionTypes;
  backgroundColor: string;
  foregroundColor: string;
};

type UpdateInteractionTypes = {
  type: number;
  data: string;
  delaySecond: number;
  isDismissible: boolean;
};

export type ProfileResponseTypes = {
  name: string;
  pregnancyDate: string;
  isDelivery: number;
  avatar: string;
  username: string;
  remaindDays: number;
  birthDate: string;
  periodLength: number;
  cycleLength: number;
  sexualStatus: SexualStatusEnum;
  interfaceCode: string;
  interfaceText: string;
  interfaceShareText: string;
  calendarType: CalendarTypeEnum;
  status: number;
  periodStatus: PeriodStatusEnum;
  week: number;
  changeStatusBtns: ChangeStatusBtnsTypes[];
  updateInteraction: UpdateInteractionTypes;
  updated: boolean;
  childType: ChildTypeEnum;
  childName: string;
  childBirthDate: string;
  supportPhone: string;
  cycleTheme: CycleThemeEnum;
};

export type UseGetProfileDataPropsType = Pick<ProfileProviderPropsTypes, 'onComplete'>['onComplete'];
