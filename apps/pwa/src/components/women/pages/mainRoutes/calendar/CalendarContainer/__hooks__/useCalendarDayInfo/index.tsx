import useTheme from '@hooks/useTheme';

import { CalendarWidgetEnums, DayTypeEnums } from '../../../__hooks__/useCalendarGetData/CalendarEnums';
import { CalendarDayInfoTypes, UseCalendarDayInfoProps } from './types';

const useCalendarDayInfo = (day?: UseCalendarDayInfoProps) => {
  const { colors } = useTheme();
  const item = day?.items?.find((item) => item.type === CalendarWidgetEnums.Cycle)?.data;

  const calendarDayInfo: CalendarDayInfoTypes = {
    backgroundColor: colors.Surface_SurfaceVariant,
    cellColor: colors.Neutral_OnBackground,
    dayTypeColor: colors.Neutral_OnBackground,
    isGiveBirth: false,
    dayTitle: item?.dayTitle || '',
  };

  switch (item?.dayType) {
    case DayTypeEnums.White:
      calendarDayInfo.cellColor = colors.Neutral_OnBackground;
      calendarDayInfo.dayTypeColor = colors.Surface_OnSurfaceVariant;
      calendarDayInfo.backgroundColor = colors.Surface_SurfaceVariant;
      break;

    case DayTypeEnums.GiveBirth:
      calendarDayInfo.cellColor = colors.Orange_300;
      calendarDayInfo.dayTypeColor = colors.Orange_300;
      calendarDayInfo.backgroundColor = colors.Green_50;
      calendarDayInfo.isGiveBirth = true;
      break;

    case DayTypeEnums.Breastfeeding:
      calendarDayInfo.cellColor = colors.CalendarWoman_Breastfeeding_OnBackground;
      calendarDayInfo.dayTypeColor = colors.CalendarWoman_Breastfeeding_OnBackground;
      calendarDayInfo.backgroundColor = colors.CalendarWoman_Breastfeeding_Background1;
      break;

    case DayTypeEnums.SecondaryBreastfeeding:
      calendarDayInfo.cellColor = colors.CalendarWoman_Breastfeeding_OnBackground;
      calendarDayInfo.dayTypeColor = colors.CalendarWoman_Breastfeeding_OnBackground;
      calendarDayInfo.backgroundColor = colors.CalendarWoman_Breastfeeding_Background2;
      break;

    case DayTypeEnums.Pregnancy:
      calendarDayInfo.cellColor = colors.CalendarWoman_Pregnancy_OnBackground;
      calendarDayInfo.dayTypeColor = colors.CalendarWoman_Pregnancy_OnBackground;
      calendarDayInfo.backgroundColor = colors.CalendarWoman_Pregnancy_Background1;
      break;

    case DayTypeEnums.SecondaryPregnancy:
      calendarDayInfo.cellColor = colors.CalendarWoman_Pregnancy_OnBackground;
      calendarDayInfo.dayTypeColor = colors.CalendarWoman_Pregnancy_OnBackground;
      calendarDayInfo.backgroundColor = colors.CalendarWoman_Pregnancy_Background2;
      break;

    case DayTypeEnums.Ovulation:
      calendarDayInfo.cellColor = colors.White;
      calendarDayInfo.dayTypeColor = colors.Cyan_500;
      calendarDayInfo.backgroundColor = colors.CalendarWoman_Fertility_Ovulation;
      break;

    case DayTypeEnums.Fertility:
      calendarDayInfo.cellColor = colors.CalendarWoman_Fertility_OnBackground;
      calendarDayInfo.dayTypeColor = colors.Cyan_500;
      calendarDayInfo.backgroundColor = colors.CalendarWoman_Fertility_Background;
      break;

    case DayTypeEnums.Period:
      calendarDayInfo.cellColor = colors.CalendarWoman_Period_OnBackground;
      calendarDayInfo.dayTypeColor = colors.Red_500;
      calendarDayInfo.backgroundColor = colors.CalendarWoman_Period_Background;
      break;

    case DayTypeEnums.Pms:
      calendarDayInfo.cellColor = colors.CalendarWoman_PMS_OnBackground;
      calendarDayInfo.dayTypeColor = colors.Purple_500;
      calendarDayInfo.backgroundColor = colors.CalendarWoman_PMS_Background;
      break;

    case DayTypeEnums.LatePeriod:
      calendarDayInfo.cellColor = colors.Grey_800;
      calendarDayInfo.dayTypeColor = colors.Grey_800;
      calendarDayInfo.backgroundColor = colors.Grey_200;
      break;

    default:
      calendarDayInfo.cellColor = colors.Neutral_OnBackground;
      calendarDayInfo.dayTypeColor = colors.Surface_OnSurfaceVariant;
      calendarDayInfo.backgroundColor = colors.Surface_SurfaceVariant;
      break;
  }

  return calendarDayInfo;
};

export default useCalendarDayInfo;
