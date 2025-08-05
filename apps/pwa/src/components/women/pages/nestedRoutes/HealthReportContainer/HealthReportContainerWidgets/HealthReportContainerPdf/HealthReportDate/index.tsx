import { useMemo } from 'react';

import { gregorianFarsiScriptDate, jalaaliScriptDate, toJalaliData } from '@utils/dates';

import Typography from '@components/ui/Typography';
import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import { WidgetsEnum } from '@providers/WidgetActionsProvider/widgetEnums';
import moment from 'moment-jalaali';

import { HealthReportDatePropsType } from './type';

const HealthReportDate = ({ data }: HealthReportDatePropsType) => {
  const { culture } = useCulture();

  const findPeriodReportWidget = useMemo(() => {
    return data.widgets.find((widget) => widget.type === WidgetsEnum.PeriodReportCard);
  }, []);

  const itemList = findPeriodReportWidget?.data.items;

  const fromStart = itemList?.[itemList?.length - 1]?.start;
  const toStart = itemList?.[0]?.start;
  const toCycleLength = itemList?.[0]?.cycleLength;

  const scripts = useMemo(() => {
    const result = { from: '', to: '' };

    if (fromStart && toStart && toCycleLength) {
      const fromDate = fromStart;

      const toDay = new Date(toStart);
      toDay.setDate(toDay.getDate() + toCycleLength);
      const toDate = toDay.toISOString();

      if (culture.calendarType === CalendarTypeEnum.Jalali) {
        result.from = jalaaliScriptDate(toJalaliData(fromDate));
        result.to = jalaaliScriptDate(toJalaliData(toDate));
      }

      if (culture.calendarType === CalendarTypeEnum.Gregorian) {
        result.from = gregorianFarsiScriptDate(moment(fromDate, 'YYYY-MM-DD').format('YYYY-MM-DD'));
        result.to = gregorianFarsiScriptDate(moment(toDate, 'YYYY-MM-DD').format('YYYY-MM-DD'));
      }
    }

    return result;
  }, [culture.calendarType, fromStart, toStart, toCycleLength]);

  return (
    <Typography scale="Body" size="Large" color="Surface_Outline">
      {`از ${scripts.from}  تا  ${scripts.to}`}
    </Typography>
  );
};

export default HealthReportDate;
