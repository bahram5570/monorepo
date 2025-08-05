import { CalendarTypeEnum } from '@constants/date.constants';
import { Next, NextRequest, NextResponse } from 'next/server';

import { CycleThemeEnum } from './enum';

export type LoginResponseTypes = {
  name: string;
  token: string;
  status: number;
  result: boolean;
  hasPair: boolean;
  advertise: string[];
  periodStatus: number;
  showComment: boolean;
  interfaceCode: string;
  interfaceText: string;
  messageNotRead: number;
  showExperience: boolean;
  hasSubscribtion: boolean;
  womansubscribtion: boolean;
  cycleTheme: CycleThemeEnum;
  interfaceVisibility: boolean;
  endTimeWomanSubscribe: number;
  calendarType: CalendarTypeEnum;
};

export interface HandleUserStatusTypes {
  response: NextResponse;
  userCookie: { name: string; value: string };
}

export interface HandleActivationCrLogginTypes {
  request: NextRequest;
  response: NextResponse;
}
