import {
  BackButtonIconComponent,
  BackToSubscriptionIconComponent,
  CalendarIconComponent,
  InfoIconComponent,
  PregnancyCheckupBackButtonIconComponent,
  PrifileIconComponent,
  ProfileTicketsHistory,
  TicketsHistoryIconComponent,
} from './IconComponents';
import { HeaderIconEnums } from './enums';
import { IconsListTypes } from './types';

export const HEADER_HEIGHT = 80;
export const ICONS_SIZE = 32;

export const iconsList: IconsListTypes = {
  [HeaderIconEnums.Info]: InfoIconComponent,
  [HeaderIconEnums.Profile]: PrifileIconComponent,
  [HeaderIconEnums.Calendar]: CalendarIconComponent,
  [HeaderIconEnums.BackButton]: BackButtonIconComponent,
  [HeaderIconEnums.TicketsHistory]: TicketsHistoryIconComponent,
  [HeaderIconEnums.ProfileSupportTicket]: ProfileTicketsHistory,
  [HeaderIconEnums.BackToSubscription]: BackToSubscriptionIconComponent,
  [HeaderIconEnums.PregnancyCheckupBackButton]: PregnancyCheckupBackButtonIconComponent,
};
