import { useMemo } from 'react';

import { toJalaliData } from '@utils/dates';

import { BabyCheckTypeEnums } from '@components/women/KitTests/KitTestBabyCheck/enum';
import { DigitalBabyCheckEnum } from '@components/women/KitTests/KitTestDigitalBabyCheck/enum';
import {
  KIT_TEST_RANGE_HIGH_LIMIT,
  KIT_TEST_RANGE_LOW_LIMIT,
  kitTestScripts,
} from '@components/women/KitTests/KitTestRange/constants';
import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import moment from 'moment-jalaali';

import { TestGeneratorProps } from '../../types';

const useTestGeneratorScriptMaker = (props: TestGeneratorProps) => {
  const { culture } = useCulture();

  return useMemo(() => {
    const output = { resultScript: '', typeScript: '', dateScript: '' };

    if (props.type === BabyCheckTypeEnums.Analog) {
      const updatedResult = props.result * 100;
      output.typeScript = 'نواری';

      if (updatedResult <= KIT_TEST_RANGE_LOW_LIMIT) {
        output.resultScript = kitTestScripts.babyCheck.resultLow;
      } else if (updatedResult >= KIT_TEST_RANGE_HIGH_LIMIT) {
        output.resultScript = kitTestScripts.babyCheck.resultHigh;
      } else {
        output.resultScript = kitTestScripts.babyCheck.resultAverage;
      }
    } else if (props.type === BabyCheckTypeEnums.Digital) {
      output.typeScript = 'دیجیتال';

      if (props.result === DigitalBabyCheckEnum.Negative) {
        output.resultScript = 'منفی';
      } else if (props.result === DigitalBabyCheckEnum.Positive) {
        output.resultScript = 'مثبت';
      }
    }

    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        output.dateScript = toJalaliData(props.createTime);
        break;
      case CalendarTypeEnum.Gregorian:
        output.dateScript = moment(props.createTime, 'YYYY-MM-DD').format('YYYY/MM/DD');
        break;
      default:
        output.dateScript = toJalaliData(props.createTime);
        break;
    }

    return output;
  }, [props.createTime, props.result, props.type, culture.calendarType]);
};

export default useTestGeneratorScriptMaker;
